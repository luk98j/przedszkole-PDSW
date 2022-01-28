import React, { useState, useEffect, Profiler } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles((theme) => ({
    modalStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    boxStyle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        height: '70%',
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        textAlign:'center',
        padding: '10px',
    }
  }));

const ModalComponent = (props) =>{
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [post, setPost] = React.useState(null);
    const [data, setData] = React.useState(null);
    useEffect(()=>{
        if(props.open != null){
            setOpen(props.open)
            console.log(props.data)
            setData(props.data)
        }
    },[props])

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        props.callBack(false)
    };


    return(
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className={classes.modalStyle}
                >
                    <div>
                <Box className={classes.boxStyle}>
                <h3>
                    Informacja
                </h3>
                {data}
                </Box>
                </div>
      </Modal>
        </div>
    )
}
export default ModalComponent