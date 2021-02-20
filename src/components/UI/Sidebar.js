import React from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import SidebarStyles from "./SidebarStyles";

export default function Sidebar() {
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
        <Link to="/whoopsies/create-task">
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
