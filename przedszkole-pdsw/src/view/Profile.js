import React, { useState, useEffect, Profiler } from "react";
import { Container } from "@material-ui/core";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { db } from "../db";

const Profile = key =>{
    useEffect(()=>{

    })

    function changePassword(login, oldPassword, newPassword, newPassword2) {
        if (newPassword===newPassword2) {
            let checkOldPassword = db.users.where(["username", "password"]).equals([login, oldPassword]);
            if (checkOldPassword != null) {
                db.users.where(["username", "password"]).equals([login, oldPassword]).modify(user => {user.password = newPassword});
            }
        }
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
            <Button>Resetuj</Button>
            </h4>
           </center>
        </Container>
    )
}
export default Profile