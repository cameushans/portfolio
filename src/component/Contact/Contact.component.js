import React from 'react';
import {Grid,Typography, Divider,Button,Avatar,List,ListItem,ListItemIcon,ListItemText} from "@material-ui/core";
import "./Contact.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';





const Contact = () => {

    return(
        <div className="fade-in">
           <Grid container justify="space-around" >
               <Grid container item lg={4} >
                   <Typography variant ="h4" className="Typography">Me contacter ? </Typography>
                   <Typography className="Typography">Do you have an interesting project I can help with? Feel free to reach out to me by using one of the following:</Typography>
                   <List dense={true}>

                       <ListItem>
                            <ListItemIcon>
                                <MailIcon className="icon"/>
                                <ListItemText className="Typography">Monmail</ListItemText>
                            </ListItemIcon>
                       </ListItem>

                     <ListItem>
                            <ListItemIcon>
                               <GitHubIcon className="icon"/>
                               <ListItemText className="Typography">Monmail</ListItemText>
                            </ListItemIcon>
                     </ListItem>  

                    <ListItem>
                       <ListItemIcon>
                             <LinkedInIcon className="icon"/>
                             <ListItemText className="Typography">Monmail</ListItemText>
                       </ListItemIcon>
                    </ListItem>   
                         
                   </List>


               </Grid>
               <Grid container item lg={6}>
                   <Typography variant ="h4" className="Typography">Formulaire de contact</Typography>

               </Grid>
           </Grid>

        </div>

    )
}

export default Contact;