import styled from "styled-components";
import { P } from "./Typography";

interface PillProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}
export const Pill: React.FC<PillProps> = ({
  label,
  selected = false,
  onClick,
}) => {
  return (
    <PillContainer selected={selected} onClick={onClick}>
      <LabelText>{label.toUpperCase()}</LabelText>
      {selected && <CloseIcon>×</CloseIcon>}
    </PillContainer>
  );
};
const LabelText = styled(P)`
  font-size: 14px;
  font-weight: 700;
`;

const CloseIcon = styled.span`
  font-weight: bold;
  margin-left: 4px;
`;

const PillContainer = styled.span<{ selected: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 10px;
  border: 1px solid var(--tertiary-600);
  color: ${({ selected }) =>
    selected ? "var(--white)" : "var(--tertiary-600)"};
  background-color: ${({ selected }) =>
    selected ? "var(--tertiary-600)" : "transparent"};
  cursor: pointer;
`;
