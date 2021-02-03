import TextFieldUnstyled from "@material-ui/core/TextField";
import styled from "styled-components";

const TextField = styled(TextFieldUnstyled)`
  margin-right: 1em;
`;

export default function TaskCreationStyles() {
  return { TextField };
}
