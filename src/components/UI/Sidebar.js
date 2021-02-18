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
        <ListItem button>
          <Link to="/whoopsies/dashboard">
            <DashboardIcon />
            Dashboard
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/whoopsies/create-task">
            <CreateTaskIcon />
            Create Task
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/whoopsies/general-questions">
            <GeneralQuestionsIcon />
            General Questions
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/whoopsies/">
            <LogoutIcon />
            Logout
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
}
