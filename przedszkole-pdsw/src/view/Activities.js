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


const Activities = () =>{
    const [dense, setDense] = React.useState(false)
    const [secondary, setSecondary] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);
    const [news, setNews] = React.useState(undefined);
    const [data, setData] = React.useState(false);

    useEffect(()=>{
        if(news === undefined){
            getNews()
        }
        
    },[])

    async function getNews(){
        var temp;
        NewsService.getAll().then((result) =>{
            setNews(result)
        })
        
    }

    function callModal(data){
        setData(data)
        setOpenModal(true)
        
    }

    async function addNews(){
        await NewsService.addNews("title","content");
    }

    return(
        <Container fixed>
            <center>
                <h2>Aktualności</h2>
                {/* <button onClick={addNews}>Dodaj</button> */}

                <Box sx={{ width: '100%', maxWidth: 760, bgcolor: 'background.paper', border: '1px solid black' }}>
                    <List>
                        {news && news.map((row) => {
                            return(
                            <ListItem>
                                <ListItemIcon>
                                    <InfoIcon />
                                </ListItemIcon>
                                <ListItemButton onClick={()=>callModal(row.content)} >
                                    <ListItemText
                                        primary={row.title}
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                </ListItemButton>
                            </ListItem>
                            )
                        }
                        )}
                    </List>
                </Box>
            </center>
            <ModalComponent open={openModal} callBack={setOpenModal} data={data}/>
        </Container>

    )
}
export default Activities