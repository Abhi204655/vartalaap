import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Chat from "./components/Chat";
import Join from "./components/Join";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2979FF",
    },
    secondary: {
      main: "#ffffff",
    },
    black: {
      main: "#1A1A1D",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    height: "100vh",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.main}>
        <Switch>
          <Route exact path="/" render={() => <Join />} />
          <Route exact path="/room" render={() => <Chat />} />
        </Switch>
      </div>
    </ThemeProvider>
  );
};

export default App;
