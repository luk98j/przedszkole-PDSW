import React, { useState, useEffect, Profiler } from "react";
import logo from "../image/przedszkole_logo.png"

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        position: "absolute",
        top: "35%",
        left:"45%"
    },
  }));


const MainPage = () =>{
    const style = useStyles()
    useEffect(()=>{

    })

    return(

            <center>
                <h1>Witaj na stronie przedszkola</h1>
                <img src={logo} alt="Logo"/>
                
            </center>
    )
}
export default MainPage