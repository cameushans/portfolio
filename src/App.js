import React, { Fragment } from 'react';
import Header from './component/NavBar/NavBar.component';
import {Switch,Link,Route,Router} from "react-router-dom";
import Home from "./component/Home/Home.component";
import Contact from "./component/Contact/Contact.component";
import "./App.css";



function App() {

  return (

    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
             <Home/>
        </Route>
        <Route exact path="/contact">
             <Contact/>
        </Route>
      </Switch>
    </div>

  );
}

export default App;
