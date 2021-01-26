import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  infobar: {
    width: "100%",
    height: "4.3em",
    background: theme.palette.primary.main,
    padding: "1em",
    display: "flex",
    alignItems: "center",
    "& > h2": {
      color: theme.palette.secondary.main,
    },
  },
}));

const Infobar = ({ roomName }) => {
  const classes = useStyles();
  return (
    <div className={classes.infobar}>
      <h2>{roomName}</h2>
    </div>
  );
};

export default Infobar;
