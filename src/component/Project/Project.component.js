import React from 'react';
import {Typography,Grid} from "@material-ui/core";
import "./projet.css";

import ImgMediaCard from "./CardProject"


const projectPictures = [
    {image:"../../../projetfront.png",nom:"What's The Price",description:"",lienSite:"https://hanstraining.netlify.app/",largeur:4},
    {image:"../../../ecommerce.png",nom:"Niya",description:"",largeur:4},
    {image:"../../../ticketac.png",nom:"Ticketac",description:"",lienSite:"https://ticketack.herokuapp.com/",largeur:4},
    {image:"../../../robot.png",nom:"Your Robot Friend",description:"",largeur:4},
    {image:"../../../travel.png",nom:"Travel the World",description:"",largeur:4},
    {image:"../../../wildTtrip.png",nom:"WildTrip",description:"",largeur:4}

 

];

const pictureToProjectViaProps = projectPictures.map((element,index)=>{
    return <ImgMediaCard 
     image={element.image} 
     nom={element.nom} 
     description={element.description}
     lienSite={element.lienSite}
     largeur={element.largeur}
     />
})


 const Project = ()=>{
    return(
        <div className="fade-in">
            <Typography variant="h2" style={{textAlign:"center"}}>Mes projets</Typography>
            <Grid container justify="center">
                {pictureToProjectViaProps}
            </Grid>
        </div>
    )
    }


export default Project;