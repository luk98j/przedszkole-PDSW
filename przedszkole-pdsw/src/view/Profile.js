import React, { useState, useEffect, Profiler } from "react";
import { Container } from "@material-ui/core";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AuthService from "../services/authorization-service"
const Profile = key =>{
    useEffect(()=>{

    })

    function changePassword() {
        //TODO: przekazywanie prawdziwego loginu/id
        let login = "Rodzic";
        let oldPassword = document.getElementById("filled-old-password-input").value;
        let newPassword = document.getElementById("filled-new-password-input").value;
        let newPassword2 = document.getElementById("filled-new-password-2-input").value;
        AuthService.changePass(login, oldPassword, newPassword, newPassword2)
    }

    return(
        <Container fixed>
           <center>
               <h2>Profil</h2>

            <h4>Imie: Ania<br></br>
            Naziwsko: Ankowska<br></br>
            Stare haslo:<br></br>
            <TextField
                id="filled-old-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
            /><br></br>
            Nowe haslo<br></br>
            <TextField
                id="filled-new-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
            /><br></br>
            Powtorz haslo<br></br>
            <TextField
                id="filled-new-password-2-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
            /><br></br>
            <Button onClick={changePassword}>Resetuj</Button>
            </h4>
           </center>
        </Container>
    )
}
export default Profile