import React from "react";
import styled from "styled-components";
import StatusPill, { StatusVariant } from "./Pills";
import { H2, P } from "./Typography";

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
        <Title>{character.name}</Title>
        <SubTitle>
          {character.species} - {character.gender}
        </SubTitle>
        <StatusPill
          $variant={character.status.toLowerCase() as StatusVariant}
        />
        <Description>
          <Strong>{character.name}</Strong> origin is{" "}
          <Strong>{character.origin.name}</Strong> and the last known location
          was <Strong>{character.location.name}</Strong>. He was first seen in
          episode <Strong>{firstEpisode}</Strong> and last seen in episode{" "}
          <Strong>{lastEpisode}</Strong>.
        </Description>
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
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

const Title = styled(H2)`
  color: var(--tertiary-600);
  font-size: 29px;
`;

const SubTitle = styled(P)`
  color: var(--tertiary-400);
  font-size: 16px;
  font-weight: 700;
`;

const Description = styled(P)`
  font-size: 14px;
  font-weight: 400;
`;

const Strong = styled.strong`
  font-weight: 700;
  font-size: 14px;
`;
