import React, { lazy , Suspense} from 'react';
import Header from './component/NavBar/NavBar.component';
import {Switch,Route} from "react-router-dom";
import "./App.css";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Footer from "./component/Footer/Footer";
const Home = lazy(()=>import("./component/Home/Home.component"));
const Project = lazy(()=>import("./component/Project/Project.component"));
const About = lazy(()=>import("./component/About/About.component"));



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
              <Suspense fallback={<div>...Loading</div>}>

                  <Route exact path="/">
                      <Home/>
                  </Route>
                  
                  <Route exact path="/project">
                      <Project/>
                  </Route>

                  <Route exact path="/about">
                      <About/>
                  </Route>

                  </Suspense> 
            </Switch>
            <Footer/>
      </ThemeProvider>
    </div>

  );
}

export default App;
