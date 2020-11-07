import React, { Fragment } from 'react';
import Header from './component/NavBar/NavBar.component';
import {Switch,Link,Route,Router} from "react-router-dom";
import Home from "./component/Home/Home.component";
import "./App.css";



function App() {

  return (

    <div className="App">
        <Header />
        <Home />
    </div>

  );
}

export default App;
