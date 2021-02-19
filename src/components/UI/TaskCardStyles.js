import CardUnstyled from "@material-ui/core/Card";
import styled from "styled-components";

function getPriorityColor({ priority }) {
  switch (priority) {
    case "Cosmetic":
      return "#E4E4E4";
    case "Low":
      return "#C1E1C1";
    case "Medium":
      return "#FDFD96";
    case "High":
      return "#FFB347";
    case "Showstopper":
      return "#FF6961";
    default:
      return "#E4E4E4";
  }
}

const Card = styled(CardUnstyled)`
  margin: 10px;
  padding: 10px;
  background-color: ${(props) => getPriorityColor(props)} !important;
`;

export default function TaskCardStyles() {
  return { Card };
}
