import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    minWidth: "300px",
    width: "400px",
    height: "100vh",
    background: "red",
    // background: theme.palette.black.main,
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  return <div className={classes.sidebar}>hello</div>;
};

export default Sidebar;
