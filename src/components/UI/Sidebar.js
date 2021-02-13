import React from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import SidebarStyles from "./SidebarStyles";

export default function Sidebar() {
  const { Drawer } = SidebarStyles();
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem button>
          <Link to="/whoopsies/create-task">Create Task</Link>
        </ListItem>
        <ListItem>
          <Link to="/whoopsies/dashboard">Dashboard</Link>
        </ListItem>
      </List>
    </Drawer>
  );
}

Sidebar.propTypes = {};

Sidebar.defaultProps = {};
