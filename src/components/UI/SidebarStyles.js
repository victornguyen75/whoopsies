import DrawerUnstyled from "@material-ui/core/Drawer";
import ListAltIcon from "@material-ui/icons/ListAlt";
import QueueIcon from "@material-ui/icons/Queue";
import HelpIcon from "@material-ui/icons/Help";
import styled, { css } from "styled-components";

const Drawer = styled(DrawerUnstyled)`
  * {
    text-decoration: inherit;
    color: inherit;
    cursor: auto;
  }
`;

const iconStyles = css`
  vertical-align: top;
  font-size: 1.1rem !important;
  margin-right: 8px;
`;

const DashboardIcon = styled(ListAltIcon)`
  ${iconStyles}
`;

const CreateTaskIcon = styled(QueueIcon)`
  ${iconStyles}
`;

const GeneralQuestionsIcon = styled(HelpIcon)`
  ${iconStyles}
`;

export default function SidebarStyles() {
  return { Drawer, DashboardIcon, CreateTaskIcon, GeneralQuestionsIcon };
}
