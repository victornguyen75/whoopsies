import AppBar from "@material-ui/core/AppBar";
import SearchIconUnstyled from "@material-ui/icons/Search";
import InputBaseUnstyled from "@material-ui/core/InputBase";
import styled from "styled-components";

const NavBar = styled(AppBar)`
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
  margin-left: 2em;
`;

const SearchIcon = styled(SearchIconUnstyled)`
  position: absolute;
  margin: 3px;
`;

const InputBase = styled(InputBaseUnstyled)`
  width: 18em;
  margin-left: 2em;
`;

const Content = styled.main`
  margin: 4em 0 0 12em;
`;

export default function AppStyles() {
  return { NavBar, SearchBox, SearchIcon, InputBase, Content };
}
