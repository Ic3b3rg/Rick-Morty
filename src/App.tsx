import { useEffect } from "react";
import { useRickMortyApi } from "./api/useRickApi";
import "./App.css";
import { CharacterList } from "./components/features/CharacterList";
import { Container } from "./components/ui/Grid";
import Header from "./components/ui/Header";
import { Loader } from "./components/ui/Loader";
import { useUrlSearchParams } from "./hooks/useUrlParams";
import styled from "styled-components";
import SadRick from "./assets/sad-rick.webp";
import { P } from "./components/ui/Typography";

function App() {
  const { data, error, isLoading, fetchData } = useRickMortyApi();
  const searchParams = useUrlSearchParams();
  const page = searchParams.get("page") || 1;

  useEffect(() => {
    fetchData();
  }, [fetchData, searchParams]);
  console.log(error);
  return (
    <>
      <Header currentPage={Number(page)} totalPages={data?.info.pages || 0} />
      <Container>
        {isLoading && <Loader />}
        {!error && data?.results ? (
          data && <CharacterList characters={data.results ?? []} />
        ) : (
          <>
            <ErrorView src={SadRick} />
            <ErrorText>{error?.message}!</ErrorText>
            aggiungere bottone refresh
          </>
        )}
      </Container>
    </>
  );
}
const ErrorView = styled.img`
  width: 90%;
`;
const ErrorText = styled(P)`
  font-size: 32px;
  color: var(--red);
  font-weight: 700;
  padding-top: 16px;
`;
export default App;
