import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  joinBoxWrapper: {
    width: "100%",
    height: "100vh",
    background: theme.palette.black.main,
    display: "grid",
    placeContent: "center",
  },
  joinBox: {
    width: "350px",
    // maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "2em",
    "& > *": {
      width: "100%",
    },
    "& > h2": {
      textAlign: "center",
      color: theme.palette.secondary.main,
    },
    "& > input": {
      outline: "none",
      border: "none",
      height: "3em",
      padding: "0 1em",
    },
    "& > button": {
      height: "3em",
      border: "none",
      outline: "none",
      background: theme.palette.primary.main,
      color: theme.palette.secondary.main,
      fontSize: "1.1em",
      fontWeight: "bold",
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "500px",
      width: "96%",
      margin: "auto",
    },
  },
}));

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name !== "" && room !== "") {
      history.push(`/room?name=${name}&room=${room}`);
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className={classes.joinBoxWrapper}>
      <div className={classes.joinBox}>
        <h2>JOIN / CREATE ROOM</h2>
        <input
          type="text"
          value={name}
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={room}
          placeholder="Enter Room Name"
          onChange={(e) => setRoom(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Join
        </button>
      </div>
    </div>
  );
};

export default Join;
