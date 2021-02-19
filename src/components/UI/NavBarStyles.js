import AppBarUnstyled from "@material-ui/core/AppBar";
import SearchIconUnstyled from "@material-ui/icons/Search";
import InputBaseUnstyled from "@material-ui/core/InputBase";
import ButtonUnstyled from "@material-ui/core/Button";
import styled from "styled-components";

const AppBar = styled(AppBarUnstyled)`
  display: block !important;
  padding: 0.5em 0 0.5em 12.5em;
`;

const SearchBox = styled.div`
  display: inline-block;
  background-color: #5c6bc0;
  &:hover {
    background-color: #6f7dc8;
  }
  border-radius: 7px;
  width: 20em;
`;

const SearchIcon = styled(SearchIconUnstyled)`
  position: absolute;
  margin: 3px;
`;

const InputBase = styled(InputBaseUnstyled)`
  width: 18em;
  margin-left: 2em;
`;

const Button = styled(ButtonUnstyled)`
  margin: 0 1em !important;
  background-color: white !important;
`;

export default function NavBarStyles() {
  return { AppBar, SearchBox, SearchIcon, InputBase, Button };
}
