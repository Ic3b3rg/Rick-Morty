import React, { useState } from "react";
import styled from "styled-components";
import { useRickMortyApi } from "../../api/useRickApi";
import FilterIcon from "../../assets/icons/filter.svg";
import { useUrlParams } from "../../hooks/useUrlParams";

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

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    resetPageParam();
    fetchData();
  };
  return (
    <SearchBarContainer>
      <FilterInput>
        <input placeholder="Search a character" onChange={onChange} />
        <FilterButton onClick={toggleFilters}>
          {isFilterOpen ? (
            <> FILTERS X</>
          ) : (
            <>
              FILTERS
              <FilterIcon />
            </>
          )}
        </FilterButton>
      </FilterInput>
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
  height: 100%;
`;
const FilterInput = styled.div`
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
      font-family: "Playfair Display";
    }
    &:focus {
      outline: none;
    }
  }
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
