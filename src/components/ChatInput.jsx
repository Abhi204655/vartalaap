import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AiOutlineSend } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  inputWrapper: {
    width: "100%",
    height: "5em",
    padding: "1em",
    background: theme.palette.primary.main,
  },
  inputBox: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    background: theme.palette.secondary.main,
    borderRadius: "2.2em",
    "& > input": {
      flex: 1,
      height: "100%",
      outline: "none",
      border: "none",
      padding: "0 1.3em",
      borderRadius: "2.2em",
    },
    "& > button": {
      width: "30px",
      height: "30px",
      display: "grid",
      marginRight: "0.2em",
      placeContent: "center",
      borderRadius: "50%",
      outline: "none",
      border: "none",
      fontSize: "1.3em",
      background: theme.palette.secondary.main,
    },
  },
}));

const ChatInput = ({ message, setMessage, sendMessage }) => {
  const classes = useStyles();
  return (
    <div className={classes.inputWrapper}>
      <div className={classes.inputBox}>
        <input
          type="text"
          placeholder="send message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
        />
        <button onClick={(e) => sendMessage(e)}>
          <AiOutlineSend />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
