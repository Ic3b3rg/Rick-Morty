import styled from "styled-components";
import { P } from "./Typography";

// Definizione delle varianti di stato disponibili
type StatusVariant = "alive" | "dead" | "unknown";

// Interfaccia per le props del componente
interface StatusPillProps {
  variant: StatusVariant;
}

// Interfaccia per la configurazione delle varianti
interface StatusVariantConfig {
  background: string;
  color: string;
  text: string;
}

// Type per l'oggetto delle configurazioni
type StatusVariantConfigs = {
  [K in StatusVariant]: StatusVariantConfig;
};

// Configurazioni delle varianti
const STATUS_VARIANTS: StatusVariantConfigs = {
  alive: {
    background: "#EDFBD8",
    color: "#4A9D3C",
    text: "Alive",
  },
  dead: {
    background: "#C81D25",
    color: "#FFFFFF",
    text: "Dead",
  },
  unknown: {
    background: "#264653",
    color: "#FFFFFF",
    text: "Unknown",
  },
};

const StatusPill: React.FC<StatusPillProps> = ({ variant = "unknown" }) => {
  return (
    <PillContainer variant={variant}>
      <PillText>{STATUS_VARIANTS[variant].text}</PillText>
    </PillContainer>
  );
};
const PillContainer = styled.span<StatusPillProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 16px;
  border-radius: 10px;
  background-color: ${(props) => STATUS_VARIANTS[props.variant].background};
  color: ${(props) => STATUS_VARIANTS[props.variant].color};
  text-transform: uppercase;
`;

const PillText = styled(P)`
  font-weight: 700;
`;
export default StatusPill;
export type { StatusPillProps, StatusVariant };
