import TextFieldUnstyled from "@material-ui/core/TextField";
import styled from "styled-components";

const TextField = styled(TextFieldUnstyled)`
  margin: 0 10px 10px 0 !important;
`;

export default function TaskFormStyles() {
  return { TextField };
}
