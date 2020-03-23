import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { lightTheme } from "./themes/light";
import "./App.css";
import Home from "./Home";
import Container from "@material-ui/core/Container";

const App = () => (
  <ThemeProvider theme={lightTheme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <Container>
      <CssBaseline />
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </Container>
  </ThemeProvider>
);

export default App;
