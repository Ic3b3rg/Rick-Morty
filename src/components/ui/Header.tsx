import styled from "styled-components";
import Logo from "../../assets/logo.svg";
import { SearchFilterBar } from "./Filters";
import { Pagination } from "../features/Pagination";
import { useUrlParams } from "../../hooks/useUrlParams";
interface HeaderProps {
  currentPage: number;
  totalPages: number;
}
const Header = ({ totalPages, currentPage }: HeaderProps) => {
  const { setUrlParam: setCurrentPage } = useUrlParams<number>("page", 1);

  // console.log("currentPage)", currentPage);

  const prevPage = () => {
    if (currentPage && currentPage <= 1) return;
    setCurrentPage((currentPage as number) - 1);
  };
  const nextPage = () => {
    if (currentPage === totalPages) return;
    setCurrentPage((currentPage as number) + 1);
  };
  return (
    <Wrapper>
      <HeaderContainer>
        <RickMortyLogo />
        <Pagination
          currentPage={currentPage as number}
          totalPages={totalPages}
          onPrev={prevPage}
          onNext={nextPage}
        />
        <IconContainer>
          <span>⚙️</span>
        </IconContainer>
      </HeaderContainer>
      <FilterContainer>
        <SearchFilterBar />
      </FilterContainer>
    </Wrapper>
  );
};
const RickMortyLogo = () => (
  <LogoWrapper>
    <Logo />
  </LogoWrapper>
);
const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 80px;
  background-color: var(--white);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px 32px 24px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 120px;
  height: 40px;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const FilterContainer = styled.div`
  position: absolute;
  top: calc(50% + 30px);
  width: 100%;
  z-index: 101;
  height: 100%;
`;
const Wrapper = styled.div`
  position: relative;
  margin-bottom: 80px;
`;

export default Header;
