import React, { useState, useEffect, Profiler } from "react";
import { Container } from "@material-ui/core";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { db } from "../db";
import AuthService from "../services/authorization-service"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = (props) =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    useEffect(()=>{

    })


    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
      };
    
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const errorMessage = (text) =>{
        toast.error(text, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
    }

    async function handleLogin() {
        const currentUser = await AuthService.login(username,password)
        if(currentUser==="USER NOT FOUND"){
            errorMessage("Niepoprawne dane")
        } else {
            AuthService.setUser(currentUser)
            props.history.push("/")
            window.location.reload();
        }
    }

    return(
        <div>
          <Container fixed>
           <center>
               <h2>Zaloguj się</h2>
            <TextField
                id="filled-password-input"
                label="Login"
                type="text"
                autoComplete="current-password"
                onChange={onChangeUsername}
                variant="filled"
            /><br></br>
            <TextField
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={onChangePassword}
                variant="filled"
            /><br></br>
           
            <Button onClick={handleLogin}>Zaloguj</Button>
           </center>
           <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        </Container>  
        </div>
    )
}
export default Login