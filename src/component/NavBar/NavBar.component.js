import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import { Typography,Toolbar,Button,Grid} from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import {ArrowBack} from '@material-ui/icons';
import {Link} from "react-router-dom";



const Header = () => {


  return (

      <Appbar position="static" color="transparent"  >
                <Toolbar >
                  <Grid container  justify="space-between">

                          <Grid  item>
                                <ArrowBack edge="start"/>
                          </Grid>

                          <Grid item lg={4} > 
                              <Link to="/">
                                <Button>Home</Button>
                              </Link>
                              <Link>
                                <Button to="/project">Projects</Button>
                              </Link>
                              <Link to="/contact">
                                <Button>Contact</Button>
                              </Link>
                          </Grid>

                  </Grid>
                        
                </Toolbar>
      </Appbar>
          
  )
};

export default Header;