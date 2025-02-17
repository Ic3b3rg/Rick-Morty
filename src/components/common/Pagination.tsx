import React from "react";
import styled from "styled-components";
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--tertiary-600);
  font-size: 29px;
`;

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPrev,
  onNext,
}) => {
  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= totalPages;

  return (
    <PaginationContainer>
      <IconButton onClick={onPrev} disabled={isFirstPage}>
        <ArrowLeft />
      </IconButton>
      <div>
        Page <CurrentPage>{currentPage}</CurrentPage> of {totalPages}
      </div>
      <IconButton onClick={onNext} disabled={isLastPage}>
        <ArrowRight />
      </IconButton>
    </PaginationContainer>
  );
};
const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    & > svg {
      fill: var(--tertiary-300);
    }
  }
`;
const CurrentPage = styled.span`
  color: var(--tertiary-400);
`;
