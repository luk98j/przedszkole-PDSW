import React, { useState, useEffect, Profiler } from "react";
import { Container } from "@material-ui/core";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Login = () =>{
    useEffect(()=>{

    })

    return(
        <div>
          <Container fixed>
           <center>
               <h2>Zaloguj się</h2>
            <TextField
                id="filled-password-input"
                label="Login"
                type="password"
                autoComplete="current-password"
                variant="filled"
            /><br></br>
            <TextField
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
            /><br></br>
            
            <Button>Zaloguj</Button>
        
           </center>
        </Container>  
        </div>
    )
}
export default Login