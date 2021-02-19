import AppBarUnstyled from "@material-ui/core/AppBar";
import SearchIconUnstyled from "@material-ui/icons/Search";
import InputBaseUnstyled from "@material-ui/core/InputBase";
import ButtonUnstyled from "@material-ui/core/Button";
import styled from "styled-components";

const SEARCH_BOX_WIDTH = 20;
const INPUT_BASE_LEFT_MARGIN = 2;

const AppBar = styled(AppBarUnstyled)`
  display: block !important;
  padding: 0.5em 0 0.5em
    ${({ sidebarwidth }) => (sidebarwidth + 0.5).toString()}em;
`;

const SearchBox = styled.div`
  display: inline-block;
  background-color: #5c6bc0;
  &:hover {
    background-color: #6f7dc8;
  }
  border-radius: 7px;
  width: ${SEARCH_BOX_WIDTH.toString()}em;
`;

const SearchIcon = styled(SearchIconUnstyled)`
  position: absolute;
  margin: 3px;
`;

const InputBase = styled(InputBaseUnstyled)`
  margin-left: ${INPUT_BASE_LEFT_MARGIN.toString()}em;
  width: ${(SEARCH_BOX_WIDTH - INPUT_BASE_LEFT_MARGIN).toString()}em;
`;

const Button = styled(ButtonUnstyled)`
  margin: 0 1em !important;
  background-color: white !important;

  a {
    text-decoration: inherit;
    color: inherit;
  }
`;

export default function NavBarStyles() {
  return { AppBar, SearchBox, SearchIcon, InputBase, Button };
}
