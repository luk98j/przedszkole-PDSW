import React, { useState, useEffect, Profiler } from "react";
import { Container } from "@material-ui/core";
import Box from '@mui/material/Box';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import InfoIcon from "@mui/icons-material/Info";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

const Messages = () =>{
    const [dense, setDense] = React.useState(false)
    const [secondary, setSecondary] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);
    useEffect(()=>{

    })

    return(
        <Container fixed>
           <center>
               <h2>Wiadomości</h2>

               <Box sx={{ width: '100%', maxWidth: 760, bgcolor: 'background.paper', border: '1px solid black' }}>
                   <List>
                           <ListItem>
                               <ListItemIcon>
                                   <InfoIcon />
                               </ListItemIcon>
                               <ListItemText
                                   primary="Nowe zasady w związku z obostrzeniami"
                                   secondary={'Treść: '}
                               />
                               <ListItemButton>
                                   <ListItemText
                                       primary="Open"
                                       secondary={secondary ? 'Secondary text' : null}
                                   />
                               </ListItemButton>
                               <ListItemButton>
                                   <ListItemText
                                       primary="Reply"
                                       secondary={secondary ? 'Secondary text' : null}
                                   />
                               </ListItemButton>
                               <ListItemButton>
                                   <ListItemText
                                       primary="Delete"
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
                               primary="Zmiana opłat - posiłki i pobyt w placówce"
                               secondary={'Treść: '}
                           />
                           <ListItemButton>
                               <ListItemText
                                   primary="Open"
                                   secondary={secondary ? 'Secondary text' : null}
                               />
                           </ListItemButton>
                           <ListItemButton>
                               <ListItemText
                                   primary="Reply"
                                   secondary={secondary ? 'Secondary text' : null}
                               />
                           </ListItemButton>
                           <ListItemButton>
                               <ListItemText
                                   primary="Delete"
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
                               primary="Organizujemy wydarzenie charytatywne"
                               secondary={'Treść: '}
                           />
                           <ListItemButton>
                               <ListItemText
                                   primary="Open"
                                   secondary={secondary ? 'Secondary text' : null}
                               />
                           </ListItemButton>
                           <ListItemButton>
                               <ListItemText
                                   primary="Reply"
                                   secondary={secondary ? 'Secondary text' : null}
                               />
                           </ListItemButton>
                           <ListItemButton>
                               <ListItemText
                                   primary="Delete"
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
export default Messages