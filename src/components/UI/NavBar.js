import React, { useContext } from "react";
import Assignment from "@material-ui/icons/Assignment";
import ThemeContext from "../Providers/ThemeContext";
import NavBarStyles from "./NavBarStyles";

export default function NavBar() {
  const { AppBar, SearchBox, SearchIcon, InputBase, Button } = NavBarStyles();
  const theme = useContext(ThemeContext);

  return (
    <AppBar sidebarwidth={theme.SIDEBAR_WIDTH}>
      <b>Whoopsies!</b>
      <Button variant="outlined" color="primary" startIcon={<Assignment />}>
        <a
          href="https://docs.google.com/document/d/1FgaHyxg0d-MKl4OlfG0u36fmp6jM5nZxvI3ZeXUq4vs/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          SRS
        </a>
      </Button>
      <SearchBox>
        <SearchIcon />
        <InputBase
          placeholder="Search by project"
          inputProps={{ "aria-label": "search" }}
        />
      </SearchBox>
    </AppBar>
  );
}
