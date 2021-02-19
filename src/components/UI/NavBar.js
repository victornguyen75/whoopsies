import React from "react";
import PropTypes from "prop-types";
import Assignment from "@material-ui/icons/Assignment";
import NavBarStyles from "./NavBarStyles";

export default function NavBar({ NAVBAR_HEIGHT, SIDEBAR_WIDTH }) {
  const { AppBar, SearchBox, SearchIcon, InputBase, Button } = NavBarStyles();
  return (
    <AppBar NAVBAR_HEIGHT={NAVBAR_HEIGHT} SIDEBAR_WIDTH={SIDEBAR_WIDTH}>
      Whoopsies!
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

NavBar.propTypes = {
  NAVBAR_HEIGHT: PropTypes.number,
  SIDEBAR_WIDTH: PropTypes.number,
};

NavBar.defaultProps = {
  NAVBAR_HEIGHT: 0,
  SIDEBAR_WIDTH: 0,
};
