import React, { Fragment } from 'react';
import Header from './component/NavBar/NavBar.component';
import {Switch,Link,Route,Router} from "react-router-dom";
import Home from "./component/Home/Home.component";
import Contact from "./component/Contact/Contact.component";
import About from "./component/About/About.component"
import "./App.css";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Project from "./component/Project/Project.component"




const theme = createMuiTheme({
  palette:{
    primary:blue,
    secondary:blue
  }
})

function App() {

  return (

    <div className="App">
      <ThemeProvider theme={theme}>
            <Header />
            <Switch>

                  <Route exact path="/">
                      <Home/>
                  </Route>

                  <Route exact path="/project">
                      <Project/>
                  </Route>


                  <Route exact path="/about">
                      <About/>
                  </Route>


                  <Route exact path="/contact">
                      <Contact/>
                  </Route>

            </Switch>
      </ThemeProvider>
    </div>

  );
}

export default App;
