import styled from "styled-components";
import Logo from "../../assets/logo.svg";
import { SearchFilterBar } from "../common/Filters";
import { Pagination } from "../common/Pagination";
import { useUrlParams } from "../../hooks/useUrlParams";
import HamburgerIcon from "../../assets/icons/hamburger.svg";

interface HeaderProps {
  currentPage: number;
  totalPages: number;
}
const Header = ({ totalPages, currentPage }: HeaderProps) => {
  const { setUrlParam: setCurrentPage } = useUrlParams<number>("page", 1);
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
          <HamburgerIcon />
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
  z-index: 10;
  background-color: var(--white);
  box-shadow: var(--shadow-1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 24px;
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
