import styled from "styled-components";
import { GenderFilter, SpeciesFilter, StatusFilter } from "./FilterPills";
interface FilterPanelProps {
  isOpen: boolean;
}
export const FiltersPanel = ({ isOpen }: FilterPanelProps) => {
  return (
    <FiltersPanelContainer $isOpen={isOpen}>
      <GenderFilter />
      <StatusFilter />
      <SpeciesFilter />
    </FiltersPanelContainer>
  );
};

const FiltersPanelContainer = styled.div<{ $isOpen: boolean }>`
  position: relative;
  top: -25%;
  background-color: var(--tertiary-50);
  border-radius: 8px;
  overflow: hidden;
  transition:
    max-height 0.3s ease,
    padding 0.3s ease;
  max-height: ${({ $isOpen }) => ($isOpen ? "500px" : "0")};
  padding: ${({ $isOpen }) => ($isOpen ? "40px 16px 16px 16px" : "0 16px")};
  width: 100%;
  box-sizing: border-box;
  box-shadow: var(--shadow-2);
`;
