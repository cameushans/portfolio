import React from 'react';
import {Typography,Grid} from "@material-ui/core";

import ImgMediaCard from "./CardProject"


const projectPictures = ["../../../projetfront.png","../../../ecommerce.png","../../../ticketac.png"];

const pictureToProjectViaProps = projectPictures.map((element,index)=>{
    return <ImgMediaCard key={index} image={element}/>
})


 const Project = ()=>{
    return(
        <div>
            <Grid container justify="center">
                {pictureToProjectViaProps}
            </Grid>
        </div>
    )
    }


export default Project;