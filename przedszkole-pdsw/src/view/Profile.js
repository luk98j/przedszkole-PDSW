import React, { useState, useEffect, Profiler } from "react";
import { Container } from "@material-ui/core";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AuthService from "../services/authorization-service"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = key =>{
    const [currentUser, setCurrentUser] = useState(undefined);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [oldPassword, setOldPassword] = useState("");

    useEffect(()=>{
        setCurrentUser(AuthService.getCurrentUser())
    },[])

    function changePassword() {
        if(password !== "" && password2 !== "" && oldPassword !==""){
            console.log(currentUser.username)
            const success = AuthService.changePass(currentUser.username, oldPassword, password)
            success.then(function(result){
                console.log(result)
                if(result==="PASSWORD_CHANGED"){
                    correctMessage("Haslo zmienione")
                } else {
                    errorMessage("Stare hasło niepoprawne")
                }
            })
            
        } else {
            errorMessage("Niepoprawne dane")
        }
        
    }

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
    const correctMessage = (text) =>{
        toast.success(text, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const onChangePassword2 = (e) => {
        const password = e.target.value;
        setPassword2(password);
    };

    const onChangeOldPassword = (e) => {
        const password = e.target.value;
        setOldPassword(password);
    };

    return(
        <Container fixed>
           <center>
               <h2>Profil</h2>

            <h4>
            Stare haslo:<br></br>
            <TextField
                id="filled-old-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
                onChange={onChangeOldPassword}
            /><br></br>
            Nowe haslo<br></br>
            <TextField
                id="filled-new-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
                onChange={onChangePassword}
            /><br></br>
            Powtorz haslo<br></br>
            <TextField
                id="filled-new-password-2-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
                onChange={onChangePassword2}
            /><br></br>
            <Button onClick={changePassword}>Resetuj</Button>
            </h4>
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
    )
}
export default Profile