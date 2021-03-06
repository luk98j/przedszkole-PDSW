import React, { useState, useEffect, Profiler } from "react";
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import SwitchAndRoute from '../static/SwitchAndRoute';
import Login from "../view/Login"
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import { populate } from "./Populate";
import logo from "../image/przedszkole_logo.png"
import AuthService from "../services/authorization-service";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    splitScreen:{
        display: 'flex',
        flexDirection: 'row',
        height: "100vh"
    },
    leftSide:{
        
    },
    rightSide:{
        width:"100%",
        
    },
    footer:{
        height:"20%"
    },
    menuStyle:{
        backgroundColor: "rgb(110, 20, 20)"
    },
    imageStyle:{
        width:"100%",
        height:"100%"
    }
   
  }));

const MenuAndViewController = () => {
    const classes = useStyles();

    const [currentUser, setCurrentUser] = useState(undefined);
    const [teacher, setTeacher] = useState(undefined);

    useEffect(()=>{
        setCurrentUser(AuthService.getCurrentUser())
        console.log(currentUser)
        if(currentUser!==undefined){
            if(currentUser.role=="ADMIN"){
                setTeacher(true)
            } else {
                setTeacher(false)
            }
        }
        
    },[])

    const logOut = () => {
        setCurrentUser(undefined);
        setTeacher(undefined)
        AuthService.logout();
    };

    return (
    <div className={classes.splitScreen}>
        <div className={classes.leftSide}>
            <ProSidebar >
                <SidebarHeader className={classes.menuStyle}>
                <img src={logo} alt="Logo" className={classes.imageStyle}/>
                </SidebarHeader>
                <SidebarContent className={classes.menuStyle}>
                    <Menu iconShape="square">
                    {currentUser ? (
                        <div>
                        { currentUser.role !== "ADMIN" ? (
                            <div>
                            <MenuItem >
                                Aktualno??ci
                            <Link to="/activities"/>
                            </MenuItem>
                            <MenuItem>
                                Wiadomo??ci
                                <Link to="/messages"/>
                            </MenuItem>
                            <MenuItem>
                                Dane dzieci
                                <Link to="/children-date"/>
                            </MenuItem>
                            </div>
                        ):
                        (   
                            <div>
                            <MenuItem>
                                Konta rodzic??w
                            <Link to="/accounts"/>
                            </MenuItem>
                            <MenuItem>
                                Grupy przedszkolne
                                <Link to="/groups"/>
                            </MenuItem>
                            <MenuItem>
                                Wiadomo??ci
                                <Link to="/admin-messages"/>
                            </MenuItem>
                            </div>
                        )}
                        <MenuItem>
                            Profil
                        <Link to="/profile"/>
                        </MenuItem>
                        <MenuItem>
                            Wyloguj
                        <Link to="/logout" onClick={logOut}/>
                        </MenuItem>
                        </div>
                    ):(
                        <div>
                        <MenuItem>
                            Zaloguj si??
                        <Link to="/login"/>
                        </MenuItem>
                        </div>
                    )}
                        
                    </Menu>
                </SidebarContent>
                <SidebarFooter className={classes.menuStyle}>
                    
                </SidebarFooter>
            </ProSidebar>
            </div>
            <div className={classes.rightSide}>
                <SwitchAndRoute/>
            </div> 
        </div>
    )
};

export default MenuAndViewController;
