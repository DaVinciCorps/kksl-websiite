import { TextField } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@mui/styles';
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

export default function AdminReview() {
    const isMobile = useMediaQuery('(max-width:850px)');
    const history = useHistory();
    const classes = useStyles();
    const [rating, setRating] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [name, setName] = useState();
    const [designation, setDesignation] = useState();
    const [content, setContent] = useState();
    const { id } = useParams();
    const [open, setOpen] = useState(false);
    const vertical = "bottom";
    const horizontal = "center";
    const [message, setMessage] = useState();
    const [image, setImage] = useState();
    const [preview, setPreview] = useState();
    useEffect(() => {
        if (image) {
            const objectUrl = URL.createObjectURL(image)
            setPreview(objectUrl);
        }
    }, [image])
    useEffect(() => {
        if (id) {
            axios({
                method: 'get',
                url: url + "review/" + id,
            })
                .then(res => {
                    console.log(res);
                    setRating(res.data.rating);
                    setPreview(res.data.image);
                    setName(res.data.name);
                    setDesignation(res.data.designation);
                    setContent(res.data.content);
                    setLoaded(true);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [])
    const handleRating = (e) => {
        setRating(e.target.value);
    }
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleDesignation = (e) => {
        setDesignation(e.target.value);
    }
    const handleContent = (e) => {
        setContent(e.target.value);
    }

    const handleSubmit = () => {
        if (rating != "" && image && name && designation && content && !id) {

            var formData = new FormData();
            formData.append("rating", rating);
            formData.append("file", image);
            formData.append("name", name);
            formData.append("designation", designation);
            formData.append("content", content);
            axios({
                method: "post",
                url: url + "review",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(res => {
                    console.log(res);
                    setOpen(true);
                    setMessage("Review created successfully.")
                    window.open("/admin/review/" + res.data.data._id, "_self");
                })
                .catch(err => {
                    console.log(err);
                })
        }
        else if (rating && name && designation && content && id) {
            var formData = new FormData();
            console.log(rating);
            formData.append("reviewId", id);
            formData.append("rating", rating);
            if (image) {
                formData.append("file", image);
            }
            formData.append("name", name);
            formData.append("designation", designation);
            formData.append("content", content);
            axios({
                method: "post",
                url: url + "review/update_review",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(res => {
                    console.log(res);
                    setOpen(true);
                    setMessage("Review updated successfully.")
                })
                .catch(err => {
                    setMessage("Something went wrong. Please try again later")
                    setOpen(true);
                    console.log(err);
                })
        }

    }
    const handleDelete = () => {
        var formData = new FormData();
        formData.append("reviewId", id);
        axios({
            method: "delete",
            url: url + "review/" + id,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(res => {
                console.log(res);
                setRating('');
                setName('');
                setDesignation('');
                setContent('');
                setImage('');
                setPreview('');
                setOpen(true);
                setMessage("Review deleted successfully.")
                history.push("/admin/review");
            })
            .catch(err => {
                console.log(err);
            })
    }
    const handleClose = () => {
        setOpen(false);
    }

    const handleImage = (e) => {
        setImage(e.target.files[0]);
    }

    return (
        <div>
            {((id && loaded) || (!id)) &&
                <div style={{ margin: isMobile ? "0px 6.2%" : "133px 14.4%", boxShadow: isMobile ? "" : "0px 20px 26px rgba(54, 53, 53, 0.3)", padding: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p style={{ fontFamily: "Mulish", fontSize: isMobile ? 24 : 32, }}>{id ? "Update a Review" : "Create a Review"}</p>
                    {preview && <img src={preview} style={{ width: isMobile ? 160 : 160, height: '160px', marginTop: 30, border: '1px solid darkgrey', borderRadius: "100%" }} />}
                    <TextField
                        label="Rating"
                        className={classes.textField}
                        type="number"
                        variant="outlined"
                        value={rating}
                        onChange={handleRating}
                        style={{ marginTop: 50 }}
                    />
                    <div style={{ display: 'flex', marginTop: '30px', justifyContent: 'space-between', }} className={classes.textField}>
                        <p style={{ marginRight: 20 }}>Photo: </p>
                        <input
                            type="file"
                            onChange={handleImage}
                        />
                        <p style={{ fontFamily: 'Mulish', }}>
                            {image ? image.name : ""}
                        </p>
                    </div>
                    <TextField
                        label="Name"
                        className={classes.textField}
                        variant="outlined"
                        value={name}
                        onChange={handleName}
                        style={{ marginTop: 30 }}
                    />
                    <TextField
                        label="Designation"
                        className={classes.textField}
                        variant="outlined"
                        value={designation}
                        onChange={handleDesignation}
                        style={{ marginTop: 30 }}
                    />
                    <TextField
                        label="Content"
                        className={classes.textField}
                        variant="outlined"
                        value={content}
                        onChange={handleContent}
                        style={{ marginTop: 30 }}
                        multiline
                    />
                    <button onClick={handleSubmit} className={classes.signInButton} style={{ backgroundColor: (rating && name && designation && content && preview) ? "#2584F4" : "" }}>
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
            }
        </div>
    )
}
