import { ApiResponse } from "@/types/rick-api";
import { BASE_URL } from "../utils/url";
import { useCallback, useState } from "react";

export const useRickMortyApi = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams(window.location.search);
      const url = `${BASE_URL}?${params.toString()}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An error occurred"));
    } finally {
      setLoading(false);
    }
  }, []);

  const get = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading, fetchData: get };
};
