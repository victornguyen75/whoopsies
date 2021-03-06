import TextFieldUnstyled from "@material-ui/core/TextField";
import FormControlLabelUnstyled from "@material-ui/core/FormControlLabel";
import styled from "styled-components";

const TextField = styled(TextFieldUnstyled)`
  width: ${({ label }) => (["Sprint"].includes(label) ? "5em" : "10em")};
  margin: 0 10px 10px 0 !important;
`;

const FormControlLabel = styled(FormControlLabelUnstyled)`
  margin-left: 0px !important;
`;

export default function TaskFormStyles() {
  return { TextField, FormControlLabel };
}
