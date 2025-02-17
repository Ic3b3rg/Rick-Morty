import { useCallback, useState, useEffect } from "react";

export function useUrlSearchParams() {
  const getSearchParams = useCallback(
    () => new URLSearchParams(window.location.search),
    [],
  );
  const [searchParams, setSearchParams] = useState(getSearchParams());

  useEffect(() => {
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    const triggerLocationChange = () => {
      window.dispatchEvent(new Event("locationchange"));
    };

    window.history.pushState = function (...args) {
      originalPushState.apply(window.history, args);
      triggerLocationChange();
    };

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
