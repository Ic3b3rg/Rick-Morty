import { useEffect } from "react";
import { useRickMortyApi } from "./api/useRickApi";
import "./App.css";
import { CharacterCard } from "./components/ui/Card";
import { Container, Grid, GridItem } from "./components/ui/Grid";
import Header from "./components/ui/Header";
import { useUrlSearchParams } from "./hooks/useUrlParams";

function App() {
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
        <Grid>
          {data?.results.map((character) => (
            <GridItem key={character.id} span={4}>
              <CharacterCard character={character} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
