import AlertUnstyled from "@material-ui/lab/Alert";
import styled from "styled-components";

const Alert = styled(AlertUnstyled)`
  position: absolute;
  top: ${(props) => (props.show ? "4.5em" : "0em")};
  right: 1em;
  z-index: 999;
  transition: top 1s ease !important;
`;

export default function NotificationStyles() {
  return { Alert };
}
