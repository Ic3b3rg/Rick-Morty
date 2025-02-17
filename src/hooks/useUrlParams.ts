import { useCallback, useEffect, useState } from "react";

const isBooleanString = (value: string): value is "true" | "false" => {
  return value === "true" || value === "false";
};

function useUrlParams<T extends string | boolean>(
  paramName: string,
  initialValue?: T,
) {
  const getInitialValue = useCallback(() => {
    const params = new URLSearchParams(window.location.search);
    const paramValue = params.get(paramName);

    if (paramValue === null) {
      return initialValue;
    }

    if (isBooleanString(paramValue)) {
      return (paramValue === "true") as T;
    }

    return paramValue as T;
  }, [initialValue, paramName]);

  const [urlParam, setParamState] = useState<T | undefined>(getInitialValue);

  const setUrlParam = useCallback(
    (value: T | undefined) => {
      setParamState(value);
      const params = new URLSearchParams(window.location.search);

      if (value === undefined || value === "") {
        params.delete(paramName);
      } else {
        params.set(paramName, String(value));
      }
      const newUrl = `${window.location.pathname}${params.toString() ? "?" : ""}${params.toString()}`;
      window.history.pushState({}, "", newUrl);
    },
    [paramName],
  );

  useEffect(() => {
    const handlePopState = () => {
      setParamState(getInitialValue());
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [getInitialValue, paramName]);

  return { urlParam, setUrlParam };
}

export default useUrlParams;
