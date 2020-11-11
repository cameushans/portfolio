import React from 'react';
import {
    Grid,Typography, Divider,Button,Avatar,List,ListItem,
    ListItemIcon,ListItemText,TextField} from "@material-ui/core";
import "./Contact.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';





const Contact = () => {

    return(
           <Grid container   className="fade-in" justify="space-evenly">
               <Grid  item lg={4} style={{marginTop:"8%"}} >
                   <Typography variant ="h3" className="Typography">Me contacter ? </Typography>
                   <Typography className="Typography" variant="h5">Do you have an interesting project I can help with? Feel free to reach out to me by using one of the following:</Typography>
                   <List dense={true}>

                       <ListItem>
                            <ListItemIcon>
                                <MailIcon className="icon"/>
                                <ListItemText className="Typography">Email:cameushanshans@gmail.com</ListItemText>
                            </ListItemIcon>
                       </ListItem>

                     <ListItem>
                            <ListItemIcon>
                               <GitHubIcon className="icon"/>
                               <ListItemText className="Typography">Linkedin:</ListItemText>
                            </ListItemIcon>
                     </ListItem>  

                    <ListItem>
                       <ListItemIcon>
                             <LinkedInIcon className="icon"/>
                             <ListItemText className="Typography">GitHub:</ListItemText>
                       </ListItemIcon>
                    </ListItem>   
                         
                   </List>
                   <Typography  variant="h6" className="Typography">You can also use the contact form on this page.</Typography>


               </Grid>
               <Grid  item lg={6}  style={{marginTop:"8%"}}>
                   <Grid item container lg={10}  justify="space-between">
                            <TextField id="standard-basic" label="Enter Your name" color="secondary" />
                            <TextField id="standard-basic" label="Enter Your name"  color="secondary"/>
                  </Grid>
                 <Grid item container lg={10}  >
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


    )
}

export default Contact;