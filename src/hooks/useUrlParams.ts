import { useState, useEffect, useCallback } from "react";

const isBooleanString = (value: string): value is "true" | "false" =>
  value === "true" || value === "false";

export function useUrlParams<T extends string | boolean>(
  paramName: string,
  initialValue?: T,
) {
  const getParamValue = useCallback((): T | undefined => {
    const params = new URLSearchParams(window.location.search);
    const value = params.get(paramName);
    if (value === null) return initialValue;
    if (isBooleanString(value)) return (value === "true") as T;
    return value as T;
  }, [paramName, initialValue]);

  const [param, setParam] = useState<T | undefined>(getParamValue);

  const updateParam = useCallback(
    (newValue: T | undefined) => {
      const params = new URLSearchParams(window.location.search);
      if (newValue === undefined || newValue === "") {
        params.delete(paramName);
      } else {
        params.set(paramName, String(newValue));
      }
      const newUrl = `${window.location.pathname}${params.toString() ? "?" + params.toString() : ""}`;
      window.history.pushState({}, "", newUrl);
      setParam(getParamValue());
    },
    [paramName, getParamValue],
  );

  useEffect(() => {
    const handlePopState = () => {
      setParam(getParamValue());
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [getParamValue]);

  return { urlParam: param, setUrlParam: updateParam };
}

export function useUrlSearchParams() {
  const getSearchParams = useCallback(
    () => new URLSearchParams(window.location.search),
    [],
  );
  const [searchParams, setSearchParams] = useState(getSearchParams());

  useEffect(() => {
    // Salva le funzioni originali
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    // Funzione per dispatchare un evento personalizzato "locationchange"
    const triggerLocationChange = () => {
      window.dispatchEvent(new Event("locationchange"));
    };

    window.history.pushState = function (...args) {
      originalPushState.apply(window.history, args);
      triggerLocationChange();
    };

    // Patch replaceState
    window.history.replaceState = function (...args) {
      originalReplaceState.apply(window.history, args);
      triggerLocationChange();
    };

    const handleLocationChange = () => {
      setSearchParams(getSearchParams());
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("locationchange", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("locationchange", handleLocationChange);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, [getSearchParams]);

  return searchParams;
}
