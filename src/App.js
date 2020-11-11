import React, { Fragment } from 'react';
import Header from './component/NavBar/NavBar.component';
import {Switch,Link,Route,Router} from "react-router-dom";
import Home from "./component/Home/Home.component";
import Contact from "./component/Contact/Contact.component";
import "./App.css";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';



const theme = createMuiTheme({
  palette:{
    primary:blue,
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

                  <Route exact path="/contact">
                      <Contact/>
                  </Route>

            </Switch>
      </ThemeProvider>
    </div>

  );
}

export default App;
