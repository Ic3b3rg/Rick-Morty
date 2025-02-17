import { Character } from "@/types/rick-api";
import { Grid, GridItem } from "../common/Grid";
import { CharacterCard } from "../common/Card";

interface CharacterListProps {
  characters: Character[];
}
export const CharacterList = ({ characters }: CharacterListProps) => {
  return (
    <Grid>
      {characters.map((character) => (
        <GridItem key={character.id} span={4}>
          <CharacterCard character={character} />
        </GridItem>
      ))}
    </Grid>
  );
};
