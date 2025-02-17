import React, { useState } from "react";
import styled from "styled-components";
import { useUrlParams } from "../../../hooks/useUrlParams";
import { H2 } from "../../common/Typography";
import { Pill } from "../../common/Pill";

const FILTER_CONFIGS = {
  species: {
    title: "Species",
    options: ["human", "alien", "mythological creature"],
  },
  gender: {
    title: "Gender",
    options: ["male", "female", "genderless", "unknown"],
  },
  status: {
    title: "Status",
    options: ["alive", "dead", "unknown"],
  },
};

interface FilterSectionProps {
  title: string;
  filterKey: string;
  options: string[];
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  filterKey,
  options,
}) => {
  const [activePill, setActivePill] = useState<string | null>(null);
  const { setUrlParam } = useUrlParams<string>(filterKey);
  const { setUrlParam: setPage } = useUrlParams<number>("page");

  const handlePillClick = (label: string) => {
    const isAlreadyActive = activePill === label;
    setActivePill(isAlreadyActive ? null : label);
    setUrlParam(isAlreadyActive ? "" : label);
    setPage(1);
  };

  return (
    <FilterContainer>
      <FilterTitle>{title}</FilterTitle>
      <PillsContainer>
        {options.map((label) => (
          <Pill
            key={label}
            label={label}
            selected={activePill === label}
            onClick={() => handlePillClick(label)}
          />
        ))}
      </PillsContainer>
    </FilterContainer>
  );
};

export const SpeciesFilter: React.FC = () => (
  <FilterSection
    title={FILTER_CONFIGS.species.title}
    filterKey="species"
    options={FILTER_CONFIGS.species.options}
  />
);

export const GenderFilter: React.FC = () => (
  <FilterSection
    title={FILTER_CONFIGS.gender.title}
    filterKey="gender"
    options={FILTER_CONFIGS.gender.options}
  />
);

export const StatusFilter: React.FC = () => (
  <FilterSection
    title={FILTER_CONFIGS.status.title}
    filterKey="status"
    options={FILTER_CONFIGS.status.options}
  />
);

const FilterContainer = styled.div`
  margin-bottom: 16px;
`;

const PillsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;
const FilterTitle = styled(H2)`
  color: var(--tertiary-600);
`;
