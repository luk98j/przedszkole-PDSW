import React, { useState, useEffect, Profiler } from "react";
import { Container } from "@material-ui/core";
import Box from '@mui/material/Box';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import InfoIcon from "@mui/icons-material/Info";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MealsService from "../services/meals-service"

const ChildrenDate = () =>{
    const [dense, setDense] = React.useState(false)
    const [secondary, setSecondary] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);
    useEffect(()=>{

    })
    function prepareMeals() {
        //let todayMeals = MealsService.randMeals();
        //console.log(todayMeals);
    }
    return(
        <Container fixed>
           <center>
               <h2>Dane dzieci</h2>
                <button onClick={prepareMeals}>losuj posilki</button>
               <Box sx={{ width: '100%', maxWidth: 760, bgcolor: 'background.paper', border: '1px solid black' }}>
                   <List>
                           <ListItem>
                               <ListItemIcon>
                                   <InfoIcon />
                               </ListItemIcon>
                                   <ListItemText
                                       primary="Joanna Ankowska"
                                       secondary={'Grupa: Żyrafy'}
                                   />
                               <ListItemButton>
                                   <ListItemText
                                       primary="Open"
                                       secondary={secondary ? 'Secondary text' : null}
                                   />
                               </ListItemButton>
                               <ListItemButton>
                                   <ListItemText
                                       primary="Edit"
                                       secondary={secondary ? 'Secondary text' : null}
                                   />
                               </ListItemButton>
                               <ListItemButton>
                                   <ListItemText
                                       primary="Posiłki"
                                       secondary={secondary ? 'Secondary text' : null}
                                   />
                               </ListItemButton>
                           </ListItem>
                   </List>
               </Box>
               <Box sx={{ width: '100%', maxWidth: 760, bgcolor: 'background.paper', border: '1px solid black' }}>
                   <List>
                       <ListItem>
                           <ListItemIcon>
                               <InfoIcon />
                           </ListItemIcon>
                           <ListItemText
                               primary="Andrzej Ankowski"
                               secondary={'Grupa: Biedronki'}
                           />
                           <ListItemButton>
                               <ListItemText
                                   primary="Open"
                                   secondary={secondary ? 'Secondary text' : null}
                               />
                           </ListItemButton>
                           <ListItemButton>
                               <ListItemText
                                   primary="Edit"
                                   secondary={secondary ? 'Secondary text' : null}
                               />
                           </ListItemButton>
                           <ListItemButton>
                               <ListItemText
                                   primary="Posiłki"
                                   secondary={secondary ? 'Secondary text' : null}
                               />
                           </ListItemButton>
                       </ListItem>
                   </List>
               </Box>
               <Box sx={{ width: '100%', maxWidth: 760, bgcolor: 'background.paper', border: '1px solid black' }}>
                   <List>
                       <ListItem>
                           <ListItemIcon>
                               <InfoIcon />
                           </ListItemIcon>
                           <ListItemText
                               primary="Katarzyna Ankowska"
                               secondary={'Grupa: Pszczółki'}
                           />
                           <ListItemButton>
                               <ListItemText
                                   primary="Open"
                                   secondary={secondary ? 'Secondary text' : null}
                               />
                           </ListItemButton>
                           <ListItemButton>
                               <ListItemText
                                   primary="Edit"
                                   secondary={secondary ? 'Secondary text' : null}
                               />
                           </ListItemButton>
                           <ListItemButton>
                               <ListItemText
                                   primary="Posiłki"
                                   secondary={secondary ? 'Secondary text' : null}
                               />
                           </ListItemButton>
                       </ListItem>
                   </List>
               </Box>
           </center>
        </Container>
    )
}
export default ChildrenDate