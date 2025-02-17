import { useState, useEffect, useCallback } from "react";

const isBooleanString = (value: string): value is "true" | "false" =>
  value === "true" || value === "false";

export function useUrlParams<T extends string | boolean | number>(
  paramName: string,
  initialValue?: T,
) {
  const getParamValue = useCallback((): T | undefined => {
    const params = new URLSearchParams(window.location.search);
    const value = params.get(paramName);

    if (value === null) {
      return initialValue;
    }

    if (isBooleanString(value) && typeof initialValue === "boolean") {
      return (value === "true") as T;
    }

    if (typeof initialValue === "number") {
      const parsed = parseFloat(value);
      return !isNaN(parsed) ? (parsed as T) : initialValue;
    }

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
      const newUrl = `${window.location.pathname}${
        params.toString() ? "?" + params.toString() : ""
      }`;
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
