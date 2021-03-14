import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import SidebarStyles from "./SidebarStyles";

export default function Sidebar({ resetTaskForm }) {
  const {
    Drawer,
    DashboardIcon,
    CreateTaskIcon,
    GeneralQuestionsIcon,
    LogoutIcon,
  } = SidebarStyles();

  return (
    <Drawer variant="permanent">
      <List>
        <Link to="/whoopsies/dashboard">
          <ListItem button>
            <DashboardIcon />
            Dashboard
          </ListItem>
        </Link>
        <Link to="/whoopsies/create-task" onClick={() => resetTaskForm()}>
          <ListItem button>
            <CreateTaskIcon />
            Create Task
          </ListItem>
        </Link>
        <Link to="/whoopsies/general-questions">
          <ListItem button>
            <GeneralQuestionsIcon />
            General Questions
          </ListItem>
        </Link>
        <Link to="/whoopsies/">
          <ListItem button>
            <LogoutIcon />
            Logout
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
}

Sidebar.propTypes = {
  resetTaskForm: PropTypes.func,
};

Sidebar.defaultProps = {
  resetTaskForm: () => {},
};
