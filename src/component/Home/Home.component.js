import React, { Fragment } from 'react';
import {Grid,Typography, Divider,Button} from "@material-ui/core";
import useStyles from "./Home.style";




const Home = () => {
   const  classes = useStyles();

    return(
            <Grid container  justify="center" alignItems="center" direction="column" style={{height:"100vh",backgroundColor:"#16213B"}}>
                <Grid container item lg={6}  >
                    <Typography variant="h3" className={classes.h3}>
                            Hey there,
                            my name is Cameus Hans.
                            I am a <Typography variant="h3" component="span" className={classes.span}>Fullstack Web Developer </Typography>based in Paris.
                    </Typography>

                    <Typography variant="h5" className={classes.h5}>
                      Specialized in JavaScript with over 7 years of professional experience in building
                      the web and working with technologies like 
                    </Typography>

                    <Grid caontainer item lg={6} >
                            <Button size="large" variant="contained">Project</Button>
                            <Button size="large" variant="contained">Contact</Button>
                    </Grid>
                    
                </Grid>
            </Grid>
    )
}


export default Home;