import styled, { keyframes } from "styled-components";
import Portal from "../../assets/portal.png";

export const Loader = () => {
  return (
    <Overlay>
      <SpinnerImage src={Portal} alt={"Loading..."} />
    </Overlay>
  );
};
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const SpinnerImage = styled.img`
  width: 320px;
  height: 320px;
  animation: ${spin} 1s linear infinite;
`;
