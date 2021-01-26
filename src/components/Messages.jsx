import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  messages: {
    flex: 1,
    background: theme.palette.black.main,
    display: "flex",
    flexDirection: "column",
    // justifyContent: "flex-end",
    padding: "1em 1em",
    alignItems: "center",
    overflowY: "scroll",
  },
  msg: {
    maxWidth: "80%",
    width: "initial",
    height: "auto",
    margin: ".5em 0",
    alignSelf: "flex-start",
    display: "flex",
    "& > p": {
      borderRadius: "1.6em",
      padding: "1em",
      //   color: theme.palette.secondary.main,
    },
  },
  recieved: {
    background: theme.palette.secondary.main,
    color: theme.palette.black.main,
  },
  sent: {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  admin: {
    textAlign: "center",
  },
}));

const Messages = ({ messages, user }) => {
  const classes = useStyles();
  const messagesRef = useRef(null);

  useEffect(() => {
    if (messagesRef) {
      messagesRef.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);

  return (
    <div className={classes.messages} ref={messagesRef}>
      {messages.map((message, index) => (
        <div
          key={index}
          className={`${classes.msg} 
          `}
          style={{
            alignSelf:
              message.user === "admin"
                ? "center"
                : message.user === user
                ? "flex-end"
                : "flex-start",
          }}
        >
          <p
            className={`${classes.msgTxt} ${
              message.user === "admin"
                ? classes.admin
                : message.user === user
                ? classes.sent
                : classes.recieved
            }`}
          >
            {message.text}
          </p>
          {message.user !== user && message.user !== "admin" && (
            <p className={classes.msgFrom}>{message.user}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Messages;
