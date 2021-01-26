import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// import Sidebar from "../Sidebar";
import Infobar from "../Infobar";
import ChatInput from "../ChatInput";
import Messages from "../Messages";

let socket;
const ENDPOINT = "https://react-node-chat-app-socket.herokuapp.com/";

const useStyles = makeStyles((theme) => ({
  chatWrapper: {
    width: "100%",
    height: "100%",
    background: theme.palette.black.main,
    display: "flex",
  },
  chatBox: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    color: theme.palette.secondary.main,
  },
}));

const Chat = () => {
  const location = useLocation();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  // const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);
    console.log(socket);
    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {
      console.log("user,joined");
    });

    return () => {
      socket.disconnect();
      socket.off();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
    // socket.on("roomData", ({ users }) => {
    //   setUsers(users);
    // });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      console.log(message);
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  };

  return (
    <div className={classes.chatWrapper}>
      {/* <Sidebar /> */}
      <div className={classes.chatBox}>
        <Infobar roomName={room} />
        <Messages messages={messages} user={name.trim().toLowerCase()} />
        <ChatInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
