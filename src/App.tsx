import "./App.css";
import { CharacterCard } from "./components/ui/Card";
import { Container, Grid, GridItem } from "./components/ui/Grid";
import Header from "./components/ui/Header";
import StatusPill from "./components/ui/Pills";
import { H1, P } from "./components/ui/Typography";
const mock = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  location: {
    name: "Earth",
    url: "https://rickandmortyapi.com/api/location/20",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
  ],
  url: "https://rickandmortyapi.com/api/character/1",
  created: "2017-11-04T18:48:46.250Z",
};
function App() {
  return (
    <>
      <Header />
      <H1>Aa</H1>
      <P>Aa</P>
      <StatusPill variant="alive" />
      <StatusPill variant="dead" />
      <StatusPill variant="unknown" />

      <Container>
        <Grid>
          <GridItem span={4}>
            <CharacterCard character={mock} />
          </GridItem>
          <GridItem span={4}>
            <CharacterCard character={mock} />
          </GridItem>
          <GridItem span={4}>
            <CharacterCard character={mock} />
          </GridItem>
          <GridItem span={4}>
            <CharacterCard character={mock} />
          </GridItem>
          <GridItem span={4}>
            <CharacterCard character={mock} />
          </GridItem>
          <GridItem span={4}>
            <CharacterCard character={mock} />
          </GridItem>
          <GridItem span={4}>
            <CharacterCard character={mock} />
          </GridItem>
          <GridItem span={4}>
            <CharacterCard character={mock} />
          </GridItem>
          <GridItem span={4}>
            <CharacterCard character={mock} />
          </GridItem>
          <GridItem span={4}>
            <CharacterCard character={mock} />
          </GridItem>
          <GridItem span={4}>
            <CharacterCard character={mock} />
          </GridItem>
          <GridItem span={4}>
            <CharacterCard character={mock} />
          </GridItem>
          <GridItem span={4}>
            <CharacterCard character={mock} />
          </GridItem>
          <GridItem span={4}>
            <CharacterCard character={mock} />
          </GridItem>
          <GridItem span={4}>
            <CharacterCard character={mock} />
          </GridItem>
          <GridItem span={4}>
            <CharacterCard character={mock} />
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}

export default App;
