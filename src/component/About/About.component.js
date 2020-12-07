import React from 'react';
import {Grid,Typography, Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import useStyles from "./About.style"




const About = () => {
    const classes = useStyles;

    return(
        <>
            <Grid container direction="column" >
                <Grid lg={12} item container justify="center" >
                    <Typography variant="h3">
                        A propos de moi 
                    </Typography>
                </Grid>


                <Grid lg={6} item  container justify="center">
                    <Typography variant="h6"  className={classes.typography}>Ma formation</Typography>
                </Grid>


                <Grid lg={6} item  container justify="center">
                    <Typography variant="body1" className={classes.typography} >
                        ihehehfihfeihfeihziezgh
                        egzgegegzegzegezggz
                        zegzgzgrgzrzrgrzgrzgrz
                        zrgzrgrzzgzrgzgzrggzrggrr
                        efjefbjebfjbefjbefbjebefzg
                            eeihifhiheihfeihefihie
                    </Typography>
                </Grid>
                <Grid lg={6} item container  justify="center">
                    <Typography variant="body1" className={classes.typography} >
                        ihehehfihfeihfeihziezgh
                        egzgegegzegzegezggz
                        zegzgzgrgzrzrgrzgrzgrz
                        zrgzrgrzzgzrgzgzrggzrggrr
                        efjefbjebfjbefjbefbjebefzg
                            eeihifhiheihfeihefihie
                    </Typography>
                </Grid>
                <Grid lg={6} item container  justify="center">
                    <Typography variant="body1" className={classes.typography}>
                        ihehehfihfeihfeihziezgh
                        egzgegegzegzegezggz
                        zegzgzgrgzrzrgrzgrzgrz
                        zrgzrgrzzgzrgzgzrggzrggrr
                        efjefbjebfjbefjbefbjebefzg
                            eeihifhiheihfeihefihie
                    </Typography>
                </Grid>

                <Grid lg={6} item  container justify="center">
                    <Typography variant="h6"  className={classes.typography}>Ma formation</Typography>
                </Grid>


                <Grid lg={6} item  container justify="center">
                    <Typography variant="body1" className={classes.typography} >
                        ihehehfihfeihfeihziezgh
                        egzgegegzegzegezggz
                        zegzgzgrgzrzrgrzgrzgrz
                        zrgzrgrzzgzrgzgzrggzrggrr
                        efjefbjebfjbefjbefbjebefzg
                            eeihifhiheihfeihefihie
                    </Typography>
                </Grid>
                <Grid lg={6} item container  justify="center">
                    <Typography variant="body1" className={classes.typography} >
                        ihehehfihfeihfeihziezgh
                        egzgegegzegzegezggz
                        zegzgzgrgzrzrgrzgrzgrz
                        zrgzrgrzzgzrgzgzrggzrggrr
                        efjefbjebfjbefjbefbjebefzg
                            eeihifhiheihfeihefihie
                    </Typography>
                </Grid>
                <Grid lg={6} item container  justify="center">
                    <Typography variant="body1" className={classes.typography}>
                        ihehehfihfeihfeihziezgh
                        egzgegegzegzegezggz
                        zegzgzgrgzrzrgrzgrzgrz
                        zrgzrgrzzgzrgzgzrggzrggrr
                        efjefbjebfjbefjbefbjebefzg
                            eeihifhiheihfeihefihie
                    </Typography>
                </Grid>

            </Grid>
       </>
    )
}
export default About;