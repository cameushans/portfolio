import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import { Typography,Toolbar,Button,Grid} from '@material-ui/core';
import {Link} from "react-router-dom";
import "./NavBar.css";





const Header = () => {

  return (
    
      <Appbar position="static" >
                <Toolbar >
                  <Grid container  justify="space-between">

                          <Grid item lg={4} > 

                              <Link to="/" className="link" >
                                <Button >Home</Button>
                              </Link>

                              <Link  to="/project"  className="link" >
                                <Button className="buttonStyle">Projects</Button>
                              </Link>

                              <Link to="/about"  className="link" >
                                <Button className="buttonStyle">About</Button>
                              </Link>

                          </Grid>

                  </Grid>
                        
                </Toolbar>
      </Appbar>        
  )
};

export default Header;