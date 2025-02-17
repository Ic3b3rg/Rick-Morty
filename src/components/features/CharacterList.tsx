import { Character } from "@/types/rick-api";
import { Grid, GridItem } from "../ui/Grid";
import { CharacterCard } from "../ui/Card";

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
