import React from 'react';
import {
    Grid,Typography, Divider,Button,Avatar,List,ListItem,
    ListItemIcon,ListItemText,TextField} from "@material-ui/core";
import "./Contact.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Link} from "react-router-dom";





const Contact = () => {

    return(
        <div>
            <Grid lg={12} container direction="column"  className="fade-in" >
                <Grid container item lg={4} justify="flex-end">
                 <Typography variant ="h3" className="Typography" >Get in touch? </Typography>
                 </Grid>

          <Grid container item justify="space-evenly">
           <Grid container item  lg={5} justify="center" >
                   <Typography className="Typography" variant="h6">Do you have an interesting project I can help with? Feel free to reach out to me by using one of the following:</Typography>
                   <List  dense={true}>

                       <ListItem>
                            <ListItemIcon>
                                <MailIcon className="icon"/>
                                <ListItemText className="Typography">Email:cameushanshans@gmail.com</ListItemText>
                            </ListItemIcon>
                       </ListItem>

                     <ListItem>
                            <ListItemIcon>
                               <GitHubIcon className="icon"/>
                               <ListItemText className="Typography">Linkedin:<a href="https://www.linkedin.com/in/hans-cameus-047447155">https://www.linkedin.com/in/hans-cameus-047447155/</a></ListItemText>
                            </ListItemIcon>
                     </ListItem>  

                    <ListItem>
                       <ListItemIcon>
                             <LinkedInIcon className="icon"/>
                             <ListItemText className="Typography">GitHub:<a href="https://github.com/cameushans">https://github.com/cameushans</a></ListItemText>
                       </ListItemIcon>
                    </ListItem>   
                         
                   </List>
                   <Typography  variant="p" className="Typography">You can also use the contact form on this page.</Typography>

               </Grid> 
          <Grid  container  lg={5} item justify="columnr" >
                            <TextField id="standard-basic" label="Enter Your name" color="secondary" style={{width:"50%"}} />
                            <TextField id="standard-basic" label="Enter Your name"  color="secondary" style={{width:"50%"}}/>
                 <TextField
                                id="outlined-multiline-static"
                                label="Message"
                                multiline
                                rows={5}
                                variant="outlined"
                                fullWidth={true}
                                color="secondary"
                                />
                                <Button variant="outlined" color="secondary"  >Send Message</Button>
                                </Grid>
                                </Grid>


                       </Grid>

           </div>


    )
}

export default Contact;