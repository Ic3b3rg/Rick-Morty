import styled from "styled-components";
import { P } from "./Typography";

export type StatusVariant = "alive" | "dead" | "unknown";

interface StatusPillProps {
  $variant: StatusVariant;
}

interface StatusVariantConfig {
  background: string;
  color: string;
  text: string;
}

type StatusVariantConfigs = {
  [K in StatusVariant]: StatusVariantConfig;
};

const STATUS_VARIANTS: StatusVariantConfigs = {
  alive: {
    background: "var(--primary-100)",
    color: "var(--primary-700)",
    text: "Alive",
  },
  dead: {
    background: "var(--red)",
    color: "var(--white)",
    text: "Dead",
  },
  unknown: {
    background: "var(--dark-gray)",
    color: "var(--white)",
    text: "Unknown",
  },
};

const StatusPill: React.FC<StatusPillProps> = ({ $variant = "unknown" }) => {
  return (
    <PillContainer $variant={$variant}>
      <PillText>{STATUS_VARIANTS[$variant].text}</PillText>
    </PillContainer>
  );
};
const PillContainer = styled.span<StatusPillProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 16px;
  border-radius: 10px;
  background-color: ${(props) => STATUS_VARIANTS[props.$variant].background};
  color: ${(props) => STATUS_VARIANTS[props.$variant].color};
  text-transform: uppercase;
  margin: 16px 0;
`;

const PillText = styled(P)`
  font-weight: 700;
`;
export default StatusPill;
