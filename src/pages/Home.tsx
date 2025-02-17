import { useEffect } from "react";
import { useRickMortyApi } from "./../api/useRickApi";
import { CharacterList } from "./../components/features/CharacterList";
import { Container } from "./../components/common/Grid";
import Header from "./../components/layout/Header";
import { Loader } from "./../components/common/Loader";
import { useUrlSearchParams } from "./../hooks/useUrlSearchParams";
import { ErrorView } from "./../components/common/ErrorView";

export const Home = () => {
  const { data, error, isLoading, fetchData } = useRickMortyApi();
  const searchParams = useUrlSearchParams();
  const page = searchParams.get("page") || 1;

  useEffect(() => {
    fetchData();
  }, [fetchData, searchParams]);
  return (
    <>
      <Header currentPage={Number(page)} totalPages={data?.info.pages || 0} />
      <Container>
        {isLoading && <Loader />}
        {!error && data?.results ? (
          data && <CharacterList characters={data.results ?? []} />
        ) : (
          <ErrorView error={error?.message ?? ""} />
        )}
      </Container>
    </>
  );
};
