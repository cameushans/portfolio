import React from 'react';
import {Grid,Typography, Button} from "@material-ui/core";
import useStyles from "./Home.style";
import {Link} from "react-router-dom";
import "./Home.css";




const Home = () => {
   const  classes = useStyles();

    return(
            <Grid container  justify="center" alignItems="center"  className="fade-in" >
                <Grid container item lg={3} justify="flex-end">
                     <img src="../../../hans.jpg"  className={classes.avatar} alt="ma photo"></img>
                </Grid>
                <Grid container item lg={6} direction="column" >
                    <Typography variant="h3" className={classes.h3}>
                            Hey there,
                            my name is Cameus Hans.
                            I am a <Typography variant="h3" component="span" className="text-focus-in" >Fullstack Web Developer </Typography>based in Paris.
                    </Typography>

                    <Typography variant="h5" className={classes.h5}>
                      Specialized in JavaScript with over 7 years of professional experience in building
                      the web and working with technologies like 
                    </Typography>

                    <Grid container item lg={6}   >
                             <Link to="/project" className="link">
                                 <Button size="small"  variant="outlined" color="secondary"  >Project</Button>
                            </Link>
                            <Link to="/about" className="link">
                                <Button size="small" variant="outlined" color="secondary" >Contact</Button>
                            </Link>
                    </Grid>
                    
                </Grid>
            </Grid>
    )
}


export default Home;