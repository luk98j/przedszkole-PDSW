import React, { useState, useEffect, Profiler } from "react";
import { Container } from "@material-ui/core";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { db } from "../db";


const Login = () =>{
    useEffect(()=>{

    })

    function HandleLogin() {
        let checkLogin = document.getElementById("filled-login-input").value;
        let checkPassword = document.getElementById("filled-password-input").value;
        const currentUser = db.users.get().where(["username", "password"]).equals([checkLogin, checkPassword])
        console.log(currentUser.id);
        if (currentUser.id !== 0) {
            console.log("Zalogowano");
        }
    }

    return(
        <div>
            <Container fixed>
                <center>
                    <h2>Zaloguj się</h2>
                    <TextField
                        id="filled-login-input"
                        label="Login"
                        autoComplete="current-login"
                        variant="filled"
                    /><br></br>
                    <TextField
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                    /><br></br>

                    <Button onClick={HandleLogin}>Zaloguj</Button>

                </center>
            </Container>
        </div>
    )
}
export default Login