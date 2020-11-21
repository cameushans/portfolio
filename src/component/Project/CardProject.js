import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Grid container item lg={props.largeur} justify="center" spacing={2} style={{marginTop:"2%"}}>
          <Card className={classes.root}>
            <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="245"
                      image={props.image}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                             {props.nom}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                             {props.description}
                          </Typography>
                    </CardContent>
            </CardActionArea>
            <CardActions>
                    <Button size="small" color="primary" href={props.lienSite}>
                      See more
                    </Button>
                    <Button size="small" color="primary">
                      Code Source
                    </Button>
            </CardActions>
          </Card>
    </Grid>
  );
}
