import CardUnstyled from "@material-ui/core/Card";
import styled from "styled-components";

function getPriorityColor(props) {
  const taskColorValues = props.colors[props.priority];
  return `rgba(${taskColorValues.r}, ${taskColorValues.g}, ${taskColorValues.b}, 1)`;
}

const Card = styled(CardUnstyled)`
  margin: 10px;
  padding: 10px;
  background-color: ${(props) => getPriorityColor(props)} !important;
`;

export default function TaskCardStyles() {
  return { Card };
}
