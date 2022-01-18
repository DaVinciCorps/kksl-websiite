import React from 'react'
import { makeStyles } from '@mui/styles';
import Dialog from '@mui/material/Dialog';

const useStyles = makeStyles({
    textField: {
        width: "100%",
        maxWidth: 800,
        ['@media(max-width: 850px)']: {
            width: "100%",
            maxWidth: 500,
            minWidth: 300
        }
    },
    signInButton: {
        width: 120,
        color: "#FFFFFF",
        height: 40,
        borderRadius: 8,
        fontSize: 16,
        fontFamily: "Mulish",
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        marginTop: 30
    }
});

export default function LoginSignupModal(props) {
    const classes = useStyles();
    const handleRedirect=(link)=>{
        props.handleClose();
        window.open(link,"_blank");
    }
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                style={{ boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)', borderRadius: 15 }}
                maxWidth="md"
            >
                <div style={{ width: 450, background: 'white', display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center', padding: 40 }}>
                    <p style={{ fontFamily: "Mulish", fontSize: 20, }}>
                        Do you have an account with KKSL?
                    </p>
                    <div style={{ display: 'flex' }}>
                        <button onClick={() => { handleRedirect("https://www.kksecurities.com/Backoffice-Branch.aspx") }} className={classes.signInButton} style={{ backgroundColor: "#2584F4", marginTop: 30,marginRight: 15 }}>
                            Yes
                        </button>
                        <button onClick={() => { handleRedirect("https://instigo.ndml.in/SelfService/#/registration") }} className={classes.signInButton} style={{ backgroundColor: "#2584F4", margin: "auto", marginTop: 30,marginLeft: 15 }}>
                            No
                        </button>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}
