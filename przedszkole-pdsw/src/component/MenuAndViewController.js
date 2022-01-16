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
import logo from "../image/przedszkole_logo.png"

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
    rghtSide:{
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
    const [currentUser, setCurrentUser] = useState(true);
    const [teacher, setTeacher] = useState(true);
    useEffect(()=>{

    })

    const logOut = () => {
        setCurrentUser(false);
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
                        {teacher ? (
                            <div>
                            <MenuItem >
                                Aktualności
                            <Link to="/activities"/>
                            </MenuItem>
                            <MenuItem>
                                Wiadomości
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
                                Konta rodziców
                            <Link to="/accounts"/>
                            </MenuItem>
                            <MenuItem>
                                Grupy przedszkolne
                                <Link to="/groups"/>
                            </MenuItem>
                            <MenuItem>
                                Wiadomości
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
                            Zaloguj się
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
            <div className={classes.rghtSide}>
                <SwitchAndRoute/>
            </div> 
        </div>
    )
};

export default MenuAndViewController;
