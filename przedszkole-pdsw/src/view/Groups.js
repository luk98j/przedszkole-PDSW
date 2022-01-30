import React, { useState, useEffect, Profiler } from "react";
import { Container } from "@material-ui/core";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthService from "../services/authorization-service"




const Groups = () =>{
   
    const [table, setTable] = useState(["1a","2a","2b","3a","3b"])
    const [checked, setChecked] = React.useState([]);
    const [group1A, setGroup1A] = React.useState([]);
    const [group1B, setGroup1B] = React.useState([]);
    const [group2A, setGroup2A] = React.useState([]);
    const [group2B, setGroup2B] = React.useState([]);
    const [group3A, setGroup3A] = React.useState([]);
    const [group3B, setGroup3B] = React.useState([]);
  

    const notObj = (a, b) =>{
        return a.filter((value) => b.indexOf(value) === -1);
    }
      
    const castToObject =(obj)=>{
       return checked.length !=0
    }

    
    const leftChecked1 = castToObject(group1A,checked);
    const rightChecked1 = castToObject(group1B, checked);
    const leftChecked2 = castToObject(group2A, checked);
    const rightChecked2 = castToObject(group2B,checked );
    const leftChecked3 = castToObject(group3A,checked );
    const rightChecked3 = castToObject(group3B,checked );
   
    useEffect(()=>{
        
        AuthService.getChildrenGroup("1a").then(result=>{
            
            setGroup1A(result)
        })
        AuthService.getChildrenGroup("1b").then(result=>{
            
            setGroup1B(result)
        })
        AuthService.getChildrenGroup("2a").then(result=>{
            
            setGroup2A(result)
        })
        AuthService.getChildrenGroup("2b").then(result=>{
           
            setGroup2B(result)
        })
        AuthService.getChildrenGroup("3a").then(result=>{
            
            setGroup3A(result)
        })
        AuthService.getChildrenGroup("3b").then(result=>{
            
            setGroup3B(result)
        })

        
        
    },[])



    
    const handleToggle = (value) => () => {
        console.log(value)
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    

    const handleCheckedRight1 = () => {
        
        checked.forEach(element => {
            AuthService.setChildGroup(element,"1b")
            
        });
        
        window.location.reload();
    };

    const handleCheckedLeft1 = () => {
        checked.forEach(element => {
            AuthService.setChildGroup(element,"1a")
            
        });
        
        window.location.reload();
    };

    const handleCheckedRight2 = () => {
        checked.forEach(element => {
            AuthService.setChildGroup(element,"2b")
            
        });
        
        window.location.reload();
    };

    const handleCheckedLeft2 = () => {
        checked.forEach(element => {
            AuthService.setChildGroup(element,"2a")
            
        });
        
        window.location.reload();
    };

    const handleCheckedRight3 = () => {
        checked.forEach(element => {
            AuthService.setChildGroup(element,"3b")
            
        });
        
        window.location.reload();
    };

    const handleCheckedLeft3 = () => {
        checked.forEach(element => {
            AuthService.setChildGroup(element,"3a")
            
        });
        
        window.location.reload();
    };

    

    const customList = (items) => (
        <Paper sx={{ width: 200, height: 230, overflow: 'auto' }}>
          <List dense component="div" role="list">
              
            {items && items.map((value) => {
              return (
                <ListItem
                  key={value}
                  role="listitem"
                  button
                  onClick={handleToggle(value.id)}
                >
                  <ListItemIcon>
                    <Checkbox
                      checked={checked.indexOf(value.id) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{
                        'aria-labelledby': value.id,
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText id={value.id} primary={value.name + " "+ value.surname} />
                </ListItem>
              );
            })}
            <ListItem />
          </List>
        </Paper>
      );
        
    return(
        <Container fixed>
            <center>
                <h2>Grupy</h2>
            <Grid container spacing={1} paddingBottom={"20px"} justifyContent="center" alignItems="center">
                Grupy 1
                <Grid item>
                    A{customList(group1A)}</Grid>
                <Grid item>
                    <Grid container direction="column" alignItems="center">
                    <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleCheckedRight1}
                        disabled={leftChecked1.length === 0}
                        aria-label="move selected right"
                    >
                        &gt;
                    </Button>
                    <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleCheckedLeft1}
                        disabled={rightChecked1.length === 0}
                        aria-label="move selected left"
                    >
                        &lt;
                    </Button>
                    
                    </Grid>
                </Grid >
                <Grid item>B{customList(group1B)}</Grid>
                </Grid>

                <Grid container spacing={1} paddingBottom={"20px"} justifyContent="center" alignItems="center">
                Grupy 2
                <Grid item>A{customList(group2A)}</Grid>
                <Grid item>
                    <Grid container direction="column" alignItems="center">
                    <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleCheckedRight2}
                        disabled={leftChecked2.length === 0}
                        aria-label="move selected right"
                    >
                        &gt;
                    </Button>
                    <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleCheckedLeft2}
                        disabled={rightChecked2.length === 0}
                        aria-label="move selected left"
                    >
                        &lt;
                    </Button>
                    
                    </Grid>
                </Grid>
                <Grid item>B{customList(group2B)}</Grid>
                </Grid>

                <Grid container spacing={1} paddingBottom={"20px"} justifyContent="center" alignItems="center">
                    Grupy 3
                <Grid item>A{customList(group3A)}</Grid>
                <Grid item>
                    <Grid container direction="column" alignItems="center">
                    <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleCheckedRight3}
                        disabled={leftChecked3.length === 0}
                        aria-label="move selected right"
                    >
                        &gt;
                    </Button>
                    <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleCheckedLeft3}
                        disabled={rightChecked3.length === 0}
                        aria-label="move selected left"
                    >
                        &lt;
                    </Button>
                    
                    </Grid>
                </Grid>
                <Grid item>B{customList(group3B)}</Grid>
                </Grid>
                
                
            </center>
        
        </Container>
    )
    
}
export default Groups