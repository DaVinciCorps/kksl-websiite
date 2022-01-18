import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import { url, checkEmail, checkPhone } from './Helper';

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
        width: 150,
        color: "#FFFFFF",
        height: 48,
        borderRadius: 8,
        fontSize: 16,
        fontFamily: "Mulish",
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        marginTop: 30
    }
});

export default function UnlistedModal(props) {

    const classes = useStyles();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState('');
    const [stock, setStock] = useState('');
    const [msgOpen, setMsgOpen] = useState(false);
    const [phoneError, setPhoneError] = useState({
        error: false,
        helperText: "",
    })
    const [emailError, setEmailError] = useState({
        error: false,
        helperText: "",
    })
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handlePhone = (e) => {
        setPhone(e.target.value);
        setPhoneError({
            error: false,
            helperText: ""
        })
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailError({
            error: false,
            helperText: ""
        })
    }
    const handleStock = (e) => {
        setStock(e.target.value);
    }

    const handleSubmit = () => {
        console.log(name, phone, email, stock);
        console.log(checkEmail(email));
        console.log(checkPhone(phone));
        if (!checkPhone(phone)) {
            setPhoneError({
                error: true,
                helperText: "Enter a valid 10 digit phone number"
            })
        }
        if (!checkEmail(email)) {
            setEmailError({
                error: true,
                helperText: "Enter a valid email"
            })
        }
        if (name && phone && email && stock && checkEmail(email) && checkPhone(phone)) {
            var formData = new FormData();
            formData.append("phone", phone);
            formData.append("email", email);
            formData.append("name", name);
            formData.append("stock", stock);
            axios({
                method: "post",
                url: url + "data/unlisted_stocks",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(res => {
                    console.log(res);
                    setEmail();
                    setPhone();
                    setName();
                    setStock();
                    props.handleClose();
                    setMsgOpen(true);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    const handleCloseMsg = () => {
        setMsgOpen(false);
    }

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                style={{ boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)', borderRadius: 15 }}
                maxWidth="md"
            >
                <div style={{ width: 450, height: 644, background: 'white', display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center', padding: 40 }}>
                    <TextField
                        label="Name"
                        className={classes.textField}
                        variant="outlined"
                        value={name}
                        onChange={handleName}
                        style={{ marginTop: 50 }}
                    />
                    <TextField
                        label="Phone No."
                        className={classes.textField}
                        variant="outlined"
                        type="number"
                        onWheel={(e) => e.target.blur()}
                        value={phone}
                        error={phoneError.error}
                        helperText={phoneError.helperText}
                        onChange={handlePhone}
                        style={{ marginTop: 50 }}
                    />
                    <TextField
                        label="Email"
                        className={classes.textField}
                        variant="outlined"
                        value={email}
                        error={emailError.error}
                        helperText={emailError.helperText}
                        onChange={handleEmail}
                        style={{ marginTop: 50 }}
                    />
                    <TextField
                        label="Stock Name"
                        className={classes.textField}
                        variant="outlined"
                        value={stock}
                        onChange={handleStock}
                        style={{ marginTop: 50 }}
                    />
                    <button onClick={handleSubmit} className={classes.signInButton} style={{ backgroundColor: (name && phone && email && stock) ? "#2584F4" : "", margin: "auto" }}>
                        Submit
                    </button>
                </div>

            </Dialog>
            <Dialog
                open={msgOpen}
                onClose={handleCloseMsg}
                style={{ boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)', borderRadius: 15 }}
                maxWidth="md"
            >
                <div style={{ padding: 50, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <p style={{ fontFamily: "Mulish", fontSize: 20, }}>
                        We have received your data. Our team will contact you shortly. Thank you!
                    </p>
                    <button onClick={handleCloseMsg} className={classes.signInButton} style={{ backgroundColor: "#2584F4", margin: "auto", marginTop: 30, }}>
                        OK
                    </button>
                </div>
            </Dialog>
        </div>
    )
}
