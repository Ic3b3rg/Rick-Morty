import styled from "styled-components";
import SadRick from "../../assets/images/sad-rick.webp";
import { P } from "./Typography";

export const ErrorView = ({ error }: { error: string }) => {
  return (
    <>
      <ErrorImage src={SadRick} />
      <ErrorText>{error}!</ErrorText>
    </>
  );
};

const ErrorImage = styled.img`
  width: 90%;
`;
const ErrorText = styled(P)`
  font-size: 32px;
  color: var(--red);
  font-weight: 700;
  padding-top: 16px;
`;
