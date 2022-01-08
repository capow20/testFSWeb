import { Button, createStyles} from '@mui/material';
import { withStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { Colors } from '../../../constants/Colors';
import s from './FitStackCloseButton.module.css';
import styled from '@material-ui/styles/styled';
import { maxWidth } from '@mui/system';


export default function FitStackCloseButton (props: any) {

    const ColorButton = withStyles(() => 
        createStyles({
            root: {
                maxWidth: '1em',
                width: '1em',
                "&:hover": {
                    backgroundColor: Colors.mainBackgroundColor,
                },
            },
        })
)(Button);


    const NewColorButton = styled(Button)(() => ({
        maxWidth: '1em',
        width: '1em',
        "&:hover": {
            backgroundColor: Colors.mainBackgroundColor,
        },
    }))

    return(
        <div>
            <Button className={s.colorButton} onClick={props.onClick}>
                <CloseIcon className={s.text} />
            </Button>
        </div>
    )

}
