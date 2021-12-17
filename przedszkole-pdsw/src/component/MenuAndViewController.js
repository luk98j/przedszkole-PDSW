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
    }
   
  }));

const MenuAndViewController = () => {
    const classes = useStyles();
    const [currentUser, setCurrentUser] = useState(true);

    useEffect(()=>{

    })

    return (
    <div className={classes.splitScreen}>
        <div className={classes.leftSide}>
            <ProSidebar>
                <SidebarHeader>
                //logo
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="square">
                    {currentUser ? (
                        <div>
                        <MenuItem>
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
                        <MenuItem>
                                Profil
                                <Link to="/profile"/>
                        </MenuItem>
                        </div>
                    ):(
                        <div>
                        <MenuItem>
                            <Link to="/login">Login</Link>
                        </MenuItem>
                        </div>
                    )}
                        
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    
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
