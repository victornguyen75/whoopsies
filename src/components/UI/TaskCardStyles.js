import CardUnstyled from "@material-ui/core/Card";
import styled from "styled-components";

const Card = styled(CardUnstyled)`
  margin: 10px;
  padding: 10px;
`;

export default function TaskCardStyles() {
  return { Card };
}
