import styled from "styled-components";
import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <RickMortyLogo />
      <PageCounter>Page 1 of 30</PageCounter>
      <IconContainer>
        <span>⚙️</span>
      </IconContainer>

      <FilterContainer>
        <FilterInput>
          <input type="text" placeholder="Filter items..." />
        </FilterInput>
      </FilterContainer>
    </HeaderContainer>
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
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

const PageCounter = styled.div`
  font-size: 16px;
  color: #666;
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
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  bottom: 0;
  width: 300px;
  z-index: 101;
`;

const FilterInput = styled.div`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    padding: 12px 40px 12px 16px;
    border-radius: 8px;
    border: 1px solid #e1e1e1;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: white;
    font-size: 14px;

    &::placeholder {
      color: #999;
    }

    &:focus {
      outline: none;
      border-color: #007aff;
    }
  }

  svg {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
  }
`;

export default Header;
