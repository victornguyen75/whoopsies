import CardUnstyled from "@material-ui/core/Card";
import styled from "styled-components";

function getPriorityColor(props) {
  switch (props.priority) {
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

// The adjust property of the Card component does not accept boolean attributes
// Thus, strings have to be used and compared here
const Card = styled(CardUnstyled)`
  display: grid;
  grid-template-columns: 85% 15%;
  margin: ${({ adjust }) => (adjust === "true" ? "0px" : "10px")} 0px 10px 0px;
  padding: 10px;
  background-color: ${(props) => getPriorityColor(props)} !important;

  svg {
    opacity: 0;
    float: right;
    position: relative;
    top: -3px;
    right: -8px;
    transition: 0.5s ease;
  }

  :hover svg {
    opacity: 1;
  }
`;

export default function TaskCardStyles() {
  return { Card };
}
