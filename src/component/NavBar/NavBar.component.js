import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import { Typography,Toolbar,Button,Grid} from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import {ArrowBack} from '@material-ui/icons';


const Header = () => {


  return (

      <Appbar position="static" color="transparent"  >
                <Toolbar >
                  <Grid container  justify="space-between">

                          <Grid  item>
                                <ArrowBack edge="start"/>
                          </Grid>

                          <Grid item lg={4} > 
                                <Button>Home</Button>
                                <Button>Projects</Button>
                                <Button>Contact</Button>
                          </Grid>

                  </Grid>
                        
                </Toolbar>
      </Appbar>
          
  )
};

export default Header;