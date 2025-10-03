import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from "./Badge";
import React from "react";
import "./IconWithCounter.scss";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IconWithCounterProps {
  icon: IconProp,
  count: number;
  onClick?: () => void;
}

const IconWithCounter: React.FC<IconWithCounterProps> = ({ icon, count, onClick }) => (
  <span onClick={onClick} role="button" className="icon-with-counter">
    <FontAwesomeIcon size="xl" icon={icon} />
    <Badge
      as="span"
      bg="danger"
      pill
      className="icon-badge"
    >
      {count}
    </Badge>
  </span>
);

export default IconWithCounter;
