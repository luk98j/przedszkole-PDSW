import React, { useState, useEffect, Profiler } from "react";
import { Container } from "@material-ui/core";
import Box from '@mui/material/Box';
import MealsService from "../services/meals-service"
import AuthService from "../services/authorization-service";
import {Table, TableCell, TableRow, TableBody, TableHead, TableContainer, Paper, Typography, Collapse, IconButton, Badge} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const ChildrenDate = () =>{
    const [dense, setDense] = React.useState(false)
    const [secondary, setSecondary] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [children, setChildren] =useState(undefined);
    useEffect(()=>{
        var user;
        if(currentUser===undefined){
            user = AuthService.getCurrentUser()
            console.log(user)
            setCurrentUser(user)
            
        }
        if(children===undefined){
            AuthService.getUserChild(user.username).then(result=>{
                console.log(result)
                setChildren(result)
            })
        }
            
    },[])

   
    function Row(props){
        const { row } = props;
        const [open, setOpen]=useState(false)
        const [allMeals, setAllMeals] = useState(undefined)
        const [childMeals, setChildMeals] = useState(undefined)
        if(allMeals === undefined){
            
            MealsService.getAllMeals().then(result =>{
                setAllMeals(result)
            })
         
        }

        if(childMeals === undefined){
            
            MealsService.getMeal(row.meal).then(result =>{
                if(result.length !=0){
                    
                    setChildMeals(result[0].id)
                }
                
            })
            
        }

        const handleChange = (e) =>{
            console.log(e.target.value)
            var value = Number(e.target.value);
            MealsService.assignMealToChild(row.id, value)
            window.location.reload();
        }

            return (
                <React.Fragment>
                <TableRow>
                    <TableCell >
                        <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell >{row.name}</TableCell>
                    <TableCell>{row.surname}</TableCell>
                   
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
                    <Collapse in={open} timeout="auto" unmountOnExit>                   
                                <Table>
                                    <TableHead>
                                        <TableCell></TableCell>
                                        <TableCell>Śniadanie</TableCell>
                                        <TableCell>Obiad</TableCell>
                                        <TableCell>Kolacja</TableCell>
                                    </TableHead>
                                    <TableBody>
                                   
                                    {allMeals && allMeals.map((row,i) => (
                                    <TableRow>
                                        <TableCell>
                                        <input type="radio" value={row.id} onChange={handleChange} checked={ childMeals === row.id}/>
                                        </TableCell>
                                        <TableCell >{row.breakfast}</TableCell>
                                        <TableCell >{row.dinner}</TableCell>
                                        <TableCell >{row.supper}</TableCell>
                                    </TableRow>
                                        
                                    ))}
                                    
                                    </TableBody>
                                </Table>                    
                        
                    </Collapse>
                    </TableCell>
                </TableRow>
                </React.Fragment>
            );
        }
    
    return(
        <Container fixed>
            <center>
                <h2>Dane dzieci</h2>
                
                <Box sx={{ width: '100%', maxWidth: 760, bgcolor: 'background.paper', border: '1px solid black' }}>
                <TableContainer component={Paper}>
                        <Table>
                        <TableHead>
                            <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Imie</TableCell>
                            <TableCell>Nazwisko</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {children && children.map((row,i) => (
                            <Row key={i} row={row} />
                            ))}
                        </TableBody> 
                        </Table>
                </TableContainer>
                </Box>
                
                
            </center>
        </Container>
    )
}
export default ChildrenDate