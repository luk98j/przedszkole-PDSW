import React, { useState, useEffect, Profiler } from "react";
import { Container } from "@material-ui/core";
import Box from '@mui/material/Box';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import InfoIcon from "@mui/icons-material/Info";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthService from "../services/authorization-service"
import {Table, TableCell, TableRow, TableBody, TableHead, TableContainer, Paper, Typography, Collapse, IconButton, Badge} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const Accounts = () =>{
    const [dense, setDense] = React.useState(false)
    const [secondary, setSecondary] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);
    const [users, setUsers] = useState(undefined);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(()=>{
        AuthService.getAll().then(result=>{
            console.log(result)
            setUsers(result)
        })
        
        
    },[])


    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
      };
    
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const onChangePhone = (e) => {
        const phone = e.target.value;
        setPhone(phone);
    };

    async function deleteChild(){

    }

    async function addUser(){
        if(username!=="" && password !=="" && phone !==""){
            const user = await AuthService.addUser(username,password,phone)
            console.log(user)
            window.location.reload();
        } else {
            errorMessage("Niepoprawne dane")
        }
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

        function Row(props){
            const { row } = props;
            const [open, setOpen] = useState(false);
            const [children, setChildren] = useState(undefined);
            const [childName ,setChildName] = useState(undefined);
            const [childSurname ,setChildSurname] = useState(undefined);
            const [childGroup ,setChildGroup] = useState(undefined);

            const onChangeUsernameChild = (e) => {
                const username = e.target.value;
                setChildName(username);
              };
            const onChangesetChildSurname = (e) => {
                const username = e.target.value;
                setChildSurname(username);
            };
            const onChangesetChildPhone = (e) => {
                const username = e.target.value;
                setChildGroup(username);
            };

            async function addChild(){
                if(childName!=="" && childSurname !=="" && childGroup !==""){
                    const user = await AuthService.addChild(row.username, childName, childSurname, childGroup)
                    window.location.reload();
                } else {
                    errorMessage("Niepoprawne dane")
                }
            }

            if(children === undefined){
                AuthService.getUserChild(row.username).then(result=>{
                    console.log(result)
                    setChildren(result)
                })
            }

                return (
                    <React.Fragment>
                    <TableRow>
                        <TableCell >
                            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                        </TableCell>
                        <TableCell >{row.username}</TableCell>
                        <TableCell>{row.phone}</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
                        <Collapse in={open} timeout="auto" unmountOnExit>                   
                                    <Table>
                                       <TableBody>
                                        {children && children.map((row,i) => (
                                        <RowChild key={i} row={row} />
                                        ))}
                                        <TableRow>
                                        <TableCell>
                                        <TextField
                                            id="filled-password-input"
                                            label="Imie"
                                            type="text"
                                            autoComplete="current-password"
                                            onChange={onChangeUsernameChild}
                                            variant="filled"
                                        />
                                        </TableCell>
                                        <TableCell>
                                        <TextField
                                            id="filled-password-input"
                                            label="Nazwisko"
                                            type="text"
                                            autoComplete="current-password"
                                            onChange={onChangesetChildSurname}
                                            variant="filled"
                                        />
                                        </TableCell>
                                        <TableCell>
                                        <TextField
                                            id="filled-password-input"
                                            label="Telefon"
                                            type="text"
                                            autoComplete="current-password"
                                            onChange={onChangesetChildPhone}
                                            variant="filled"
                                        />
                                        </TableCell>
                                        <TableCell>
                                        <Button onClick={addChild}>Dodaj dziecko</Button>
                                        </TableCell>
                                        </TableRow>
                                        </TableBody>
                                    </Table>                    
                            
                        </Collapse>
                        </TableCell>
                    </TableRow>
                    </React.Fragment>
                );
            }

        function RowChild(props){
            const { row } = props;
            const [open, setOpen] = useState(false);
            
            async function deleteChild(){
                AuthService.deleteChild(row.id)
                window.location.reload();
            }
                return (
                    <React.Fragment>
                    <TableRow>
                        <TableCell >{row.name}</TableCell>
                        <TableCell>{row.surname}</TableCell>
                        <TableCell>{row.group}</TableCell>
                        <TableCell><Button onClick={deleteChild}>Usun dziecko</Button></TableCell>
                    </TableRow>
                    </React.Fragment>
                );
            }
    return(
        <Container fixed>
            <center>
                <h2>Dane rodzicow i dzieci</h2>
                <Box sx={{ width: '100%', maxWidth: 760, bgcolor: 'background.paper', border: '1px solid black' }}>
                    Dodaj Rodzica<br></br>
                <TextField
                    id="filled-password-input"
                    label="Login"
                    type="text"
                    autoComplete="current-password"
                    onChange={onChangeUsername}
                    variant="filled"
                />
                <TextField
                    id="filled-password-input"
                    label="Hasło"
                    type="password"
                    autoComplete="current-password"
                    onChange={onChangePassword}
                    variant="filled"
                />
                <TextField
                    id="filled-password-input"
                    label="Telefon"
                    type="text"
                    autoComplete="current-password"
                    onChange={onChangePhone}
                    variant="filled"
                />
                
                <Button onClick={addUser}>Dodaj użytkownika</Button>
                </Box>
                <Box sx={{ width: '100%', maxWidth: 760, bgcolor: 'background.paper', border: '1px solid black' }}>
                 
                    <TableContainer component={Paper}>
                        <Table>
                        <TableHead>
                            <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Login</TableCell>
                            <TableCell>Numer telefonu</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users && users.map((row,i) => (
                            <Row key={i} row={row} />
                            ))}
                        </TableBody> 
                        </Table>
                </TableContainer>
                </Box>
                
                
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
export default Accounts