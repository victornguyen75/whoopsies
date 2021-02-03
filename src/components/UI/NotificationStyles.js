import Card from "@material-ui/core/Card";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ErrorIconUnstyled from "@material-ui/icons/Error";
import styled, { css } from "styled-components";

const iconStyles = css`
  vertical-align: top;
`;

const NotificationCard = styled(Card)`
  background-color: #444;
  color: white;
  padding: 16px;
  position: absolute;
  top: ${(props) => (props.show ? "1em" : "-10em")};
  right: 1em;
  z-index: 999;
  transition: top 1s ease;
  width: 15em;
`;

const BellIcon = styled(NotificationsIcon)`
  ${iconStyles}
`;

const ErrorIcon = styled(ErrorIconUnstyled)`
  ${iconStyles}
`;

export default function NotificationStyles() {
  return {
    NotificationCard,
    BellIcon,
    ErrorIcon,
  };
}
