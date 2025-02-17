import React from "react";
import styled from "styled-components";
import StatusPill, { StatusVariant } from "./Pills";
import { H2, P } from "./Typography";

const CardContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  box-shadow: var(--shadow-2);
  overflow: hidden;
  background-color: var(--white);
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const CardContent = styled.div`
  padding: 16px;
`;

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

function getEpisodeNumber(url: string) {
  const parts = url.split("/");
  return parts[parts.length - 1];
}

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const firstEpisode = getEpisodeNumber(character.episode[0]);
  const lastEpisode = getEpisodeNumber(
    character.episode[character.episode.length - 1],
  );

  return (
    <CardContainer>
      <CardImage src={character.image} alt={character.name} />

      <CardContent>
        <H2>{character.name}</H2>
        <P>
          {character.species} - {character.gender}
        </P>
        <StatusPill
          $variant={character.status.toLowerCase() as StatusVariant}
        />
        <P>
          {character.name} origin is {character.origin.name} and the last known
          location was {character.location.name}. He was first seen in episode{" "}
          {firstEpisode}
          and last seen in episode {lastEpisode}.
        </P>
      </CardContent>
    </CardContainer>
  );
};
