import React, { useState, useEffect, Profiler } from "react";
import { Container } from "@material-ui/core";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';
import ModalComponent from "../component/ModalComponent";
import NewsService from "../services/news-service"

function generate(element) {
    return [0, 1, 2, 3, 4,].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const Activities = () =>{
    const [dense, setDense] = React.useState(false)
    const [secondary, setSecondary] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);
    useEffect(()=>{

    })

    async function getAllNews(){
        let news = await NewsService.getAll();
        for(let i in news){
            console.log("title: "+ news[i].title);
            console.log("content: "+ news[i].content);
        }
    }
    getAllNews()


    function callModal(){
        console.log("MODAL")
        setOpenModal(true)
    }

    async function addNews(){
        await NewsService.addNews("title","content");
    }

    return(
        <Container fixed>
            <center>
                <h2>Aktualności</h2>
                <button onClick={addNews}>Dodaj</button>

                <Box sx={{ width: '100%', maxWidth: 760, bgcolor: 'background.paper', border: '1px solid black' }}>
                    <List>
                        {generate(
                            <ListItem>
                                <ListItemIcon>
                                    <InfoIcon />
                                </ListItemIcon>
                                <ListItemButton onClick={callModal}>
                                    <ListItemText
                                        primary="Single-line item"
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                </ListItemButton>
                            </ListItem>,
                        )}
                    </List>
                </Box>
            </center>
            <ModalComponent open={openModal} callBack={setOpenModal}/>
        </Container>

    )
}
export default Activities