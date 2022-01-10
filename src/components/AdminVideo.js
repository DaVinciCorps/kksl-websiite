import { TextField } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@mui/styles';
import MenuItem from '@mui/material/MenuItem';
import { url } from "./Helper";
import axios from 'axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Snackbar from '@mui/material/Snackbar';
import useMediaQuery from '@mui/material/useMediaQuery';

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


export default function AdminVideo() {
    const isMobile = useMediaQuery('(max-width:850px)');
    const history = useHistory();
    const classes = useStyles();
    const [title, setTitle] = useState("");
    const [youtube, setYoutube] = useState("");
    const [category, setCategory] = useState("");
    const { id } = useParams();
    const [open, setOpen] = useState(false);
    const vertical = "bottom";
    const horizontal = "center";
    const [message, setMessage] = useState();
    useEffect(() => {
        if (id) {
            axios({
                method: 'get',
                url: url + "video/" + id,
            })
                .then(res => {
                    console.log(res);
                    setCategory(res.data.category);
                    setTitle(res.data.title);
                    setYoutube(res.data.youtube_link);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [])
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleYoutube = (e) => {
        setYoutube(e.target.value);
    }
    const handleCategory = (e) => {
        setCategory(e.target.value);
    }

    const handleSubmit = () => {
        console.log(title, youtube, category);
        if (title != "" && youtube != "" && category != "" && !id) {
            var formData = new FormData();
            formData.append("title", title);
            formData.append("youtube_link", youtube);
            formData.append("category", category);
            axios({
                method: "post",
                url: url + "video",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(res => {

                    console.log(res.data);
                    if (res.data._id) {
                        setOpen(true);
                        setMessage("Video created successfully.")
                        history.push("/admin/video/" + res.data._id);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
        else if (title != "" && youtube != "" && category != "" && id) {
            var formData = new FormData();
            formData.append("videoId", id);
            formData.append("title", title);
            formData.append("youtube_link", youtube);
            formData.append("category", category);
            axios({
                method: "post",
                url: url + "video/update_video",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(res => {
                    console.log(res);
                    setOpen(true);
                    setMessage("Video updated successfully.")
                })
                .catch(err => {
                    console.log(err);
                })
        }

    }
    const handleDelete = () => {
        var formData = new FormData();
        formData.append("videoId", id);
        axios({
            method: "delete",
            url: url + "video/" + id,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(res => {
                console.log(res);
                setCategory('');
                setYoutube('');
                setTitle('');
                setOpen(true);
                setMessage("Video deleted successfully.")
                history.push("/admin/video");
            })
            .catch(err => {
                console.log(err);
            })
    }
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <div>
            <div style={{ margin: isMobile ? "0px 6.2%" : "133px 14.4%", boxShadow: isMobile ? "" : "0px 20px 26px rgba(54, 53, 53, 0.3)", padding: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p style={{ fontFamily: "Mulish", fontSize: isMobile ? 24 : 32, }}>{id ? "Update a Video" : "Create a Video"}</p>

                {youtube.includes("youtube.com/embed") && 
                    <div style={{ display: 'flex', marginTop: 30 }}>
                        <div style={{}}>
                            <iframe width={isMobile ? "320px" : "400"} height={isMobile ? "300px" : "300"} src={youtube} style={{ borderRadius: 15, border: 'none' }} />
                        </div>
                    </div>
                }

                <TextField
                    label="Title"
                    className={classes.textField}
                    variant="outlined"
                    value={title}
                    onChange={handleTitle}
                    style={{ marginTop: 50 }}
                />
                <TextField
                    label="Youtube Link"
                    className={classes.textField}
                    variant="outlined"
                    value={youtube}
                    onChange={handleYoutube}
                    style={{ marginTop: 30 }}
                />

                <TextField
                    select
                    label="Category"
                    value={category}
                    onChange={handleCategory}
                    variant="outlined"
                    className={classes.textField}
                    style={{ marginTop: 30 }}
                >
                    <MenuItem key={"Tutorial"} value={"Tutorial"}>
                        Tutorial
                    </MenuItem>
                    <MenuItem key={"Explainer"} value={"Explainer"}>
                        Explainer
                    </MenuItem>
                </TextField>
                <button onClick={handleSubmit} className={classes.signInButton} style={{ backgroundColor: (category && youtube && title) ? "#2584F4" : "" }}>
                    {id ? "Update" : "Submit"}
                </button>
                {id &&
                    <button onClick={handleDelete} className={classes.signInButton} style={{ backgroundColor: "#2584F4" }}>
                        Delete
                    </button>
                }
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={handleClose}
                    message={message}
                    key={vertical + horizontal}
                    style={{ textAlign: 'center' }}
                />
            </div>
        </div>
    )
}
