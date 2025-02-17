import { useRickMortyApi } from "../..//api/useRickApi";
import React, { useState } from "react";
import styled from "styled-components";
import { useUrlParams } from "../../hooks/useUrlParams";
import Filter from "../../assets/icons/filter.svg";

export const SearchFilterBar: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { fetchData } = useRickMortyApi();
  const { setUrlParam: setName } = useUrlParams<string>("name");
  const { setUrlParam: setPage } = useUrlParams<number>("page");
  const toggleFilters = () => {
    setIsFilterOpen((prev) => !prev);
  };
  const resetPageParam = () => {
    setPage(1);
  };
  return (
    <SearchBarContainer>
      <FilterInput>
        <input
          placeholder="Search a character"
          onChange={(e) => {
            setName(e.target.value);
            resetPageParam();
            fetchData();
          }}
        />

        <FilterButton onClick={toggleFilters}>
          {isFilterOpen ? (
            <> FILTERS X</>
          ) : (
            <>
              FILTERS
              <Filter />
            </>
          )}
        </FilterButton>
      </FilterInput>

      <FilterPanel $isOpen={isFilterOpen}>
        {/* Qui inserisci i contenuti dei tuoi filtri */}
        <p>Qui i filtri</p>
        <p>Ad esempio: Status, Gender, Species, ecc.</p>
      </FilterPanel>
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
  height: 100%;
`;
export const FilterInput = styled.div`
  position: relative;
  width: 100%;
  z-index: 10;
  font-family: "Playfair Display";
  input {
    width: 100%;
    padding: 12px 40px 12px 16px;
    border-radius: 100px;
    border: 1px solid var(--white);
    box-shadow: var(--shadow-4);
    background-color: var(--white);
    box-sizing: border-box;
    font-size: 30px;
    color: var(--tertiary-600);
    font-weight: 700;

    &::placeholder {
      color: var(--tertiary-300);
      font-size: 30px;
    }
    &:focus {
      outline: none;
    }
  }
`;

interface FilterPanelProps {
  $isOpen: boolean;
}

export const FilterPanel = styled.div<FilterPanelProps>`
  position: relative;
  top: -25%;
  background-color: var(--tertiary-50);
  border-radius: 8px;
  overflow: hidden;
  transition:
    max-height 0.3s ease,
    padding 0.3s ease;
  max-height: ${({ $isOpen }) => ($isOpen ? "200px" : "0")};
  padding: ${({ $isOpen }) => ($isOpen ? "40px 16px 16px 16px" : "0 16px")};
  width: 100%;
  box-sizing: border-box;
  box-shadow: var(--shadow-2);
`;

const FilterButton = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  gap: 8px;
  align-items: center;
  color: var(--tertiary-600);
  text-transform: uppercase;
  cursor: pointer;
`;
