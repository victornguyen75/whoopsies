import React, { useContext } from "react";
import PropTypes from "prop-types";
import Assignment from "@material-ui/icons/Assignment";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ThemeContext from "../Providers/ThemeContext";
import NavBarStyles from "./NavBarStyles";

export default function NavBar({ projectOptions, handleSearch }) {
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
        <Autocomplete
          id="project-autocomplete"
          options={projectOptions}
          onClose={(e) => handleSearch(e)}
          renderInput={(params) => (
            <div ref={params.InputProps.ref}>
              <InputBase
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...params.inputProps}
                size="small"
                variant="outlined"
                placeholder="Search by project"
              />
            </div>
          )}
        />
      </SearchBox>
    </AppBar>
  );
}

NavBar.propTypes = {
  projectOptions: PropTypes.arrayOf(PropTypes.string),
  handleSearch: PropTypes.func,
};
NavBar.defaultProps = {
  projectOptions: [],
  handleSearch: () => {},
};
