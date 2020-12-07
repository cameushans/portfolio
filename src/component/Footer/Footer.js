import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {
    Grid,Divider,Button,Avatar,List,ListItem,
ListItemText,TextField} from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';






const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '60vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Me contacter : </Typography>

                        <MailIcon className="icon"/>
               

   
                        <GitHubIcon className="icon"/>
                        <a href="https://www.linkedin.com/in/hans-cameus-047447155"/>
 
  
                    <LinkedInIcon className="icon"/>
                    <ListItemText className="Typography">GitHub:<a href="https://github.com/cameushans">https://github.com/cameushans</a></ListItemText>
      

        </Container>
      </footer>
  );
}