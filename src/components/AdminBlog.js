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
        ['@media(max-width: 850px)']:{
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

export default function AdminBlog() {
    const isMobile = useMediaQuery('(max-width:850px)');
    const history = useHistory();
    const classes = useStyles();
    const [title, setTitle] = useState("");
    const [timeToRead, setTimeToRead] = useState();
    const [para1, setPara1] = useState();
    const [para2, setPara2] = useState();
    const [para3, setPara3] = useState();
    const [para4, setPara4] = useState();
    const [category, setCategory] = useState("");
    const { id } = useParams();
    const [open, setOpen] = useState(false);
    const vertical = "bottom";
    const horizontal = "center";
    const [message, setMessage] = useState();
    const [image,setImage] = useState();
    const [preview,setPreview] = useState();
    useEffect(()=>{
        if(image){
            const objectUrl = URL.createObjectURL(image)
            setPreview(objectUrl);
        }
    },[image])
    useEffect(() => {
        if (id) {
            axios({
                method: 'get',
                url: url + "blogs/" + id,
            })
                .then(res => {
                    console.log(res);
                    setCategory(res.data.category);
                    setTitle(res.data.title);
                    setPreview(res.data.image);
                    setTimeToRead(res.data.time_to_read_min);
                    setPara1(res.data.content_para_1);
                    setPara2(res.data.content_para_2);
                    setPara3(res.data.content_para_3);
                    setPara4(res.data.content_para_4);
                    
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [])
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleCategory = (e) => {
        setCategory(e.target.value);
    }
    const handleTimeToRead = (e) => {
        setTimeToRead(e.target.value);
    }
    const handlePara1 = (e) => {
        setPara1(e.target.value);
    }
    const handlePara2 = (e) => {
        setPara2(e.target.value);
    }
    const handlePara3 = (e) => {
        setPara3(e.target.value);
    }
    const handlePara4 = (e) => {
        setPara4(e.target.value);
    }

    const handleSubmit = () => {
        if (title != "" && category != "" && image && timeToRead && para1 && para2 && para3 && para4 && !id) {
            var formData = new FormData();
            formData.append("title", title);
            formData.append("category", category);
            formData.append("file",image);
            formData.append("time_to_read_min",timeToRead);
            formData.append("content_para_1",para1);
            formData.append("content_para_2",para2);
            formData.append("content_para_3",para3);
            formData.append("content_para_4",para4);
            axios({
                method: "post",
                url: url + "blogs",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(res => {
                    console.log(res);
                    setOpen(true);
                    setMessage("Blog created successfully.")
                    history.push("/admin/blog/" + res.data.data._id);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        else if (title != "" && category != "" && timeToRead && para1 && para2 && para3 && para4 && id) {
            var formData = new FormData();
            formData.append("blogId", id);
            formData.append("title", title);
            if(image){
                formData.append("file",image);
            }
            // 
            formData.append("category", category);
            formData.append("time_to_read_min",timeToRead);
            formData.append("content_para_1",para1);
            formData.append("content_para_2",para2);
            formData.append("content_para_3",para3);
            formData.append("content_para_4",para4);
            axios({
                method: "post",
                url: url + "blogs/update_blog",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(res => {
                    console.log(res);
                    setOpen(true);
                    setMessage("Blog updated successfully.")
                })
                .catch(err => {
                    console.log(err);
                })
        }

    }
    const handleDelete = () => {
        var formData = new FormData();
        formData.append("blogId", id);
        axios({
            method: "delete",
            url: url + "blogs/" + id,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(res => {
                console.log(res);
                setCategory('');
                setTitle('');
                setTimeToRead('');
                setPara1('');
                setPara2('');
                setPara3('');
                setPara4('');
                setImage('');
                setPreview('');
                setOpen(true);
                setMessage("Blog deleted successfully.")
                history.push("/admin/blog");
            })
            .catch(err => {
                console.log(err);
            })
    }
    const handleClose = () => {
        setOpen(false);
    }

    const handleImage=(e)=>{
        setImage(e.target.files[0]);
    }

    return (
        <div>

            <div style={{ margin:isMobile?"0px 6.2%": "133px 14.4%", boxShadow:isMobile?"": "0px 20px 26px rgba(54, 53, 53, 0.3)", padding: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p style={{ fontFamily: "Mulish", fontSize:isMobile?24: 32, }}>{id ? "Update a Blog" : "Create a Blog"}</p>
                {preview && <img src={preview} style={{width:isMobile?300: 500,height: 'auto', marginTop: 30, border: '1px solid darkgrey'}} />}
                <TextField
                    label="Title"
                    className={classes.textField}
                    variant="outlined"
                    value={title}
                    onChange={handleTitle}
                    style={{marginTop: 50}}
                />
                <div style={{display: 'flex', marginTop: '30px',justifyContent: 'space-between',}} className={classes.textField}>
                    <p style={{marginRight: 20}}>Photo: </p>
                    <input
                        type = "file"
                        onChange={handleImage}
                    />
                    <p style={{fontFamily: 'Mulish',}}>
                        {image?image.name:""}
                    </p>
                </div>
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
                <TextField
                    label="Time to read"
                    className={classes.textField}
                    variant="outlined"
                    type = "number"
                    value={timeToRead}
                    onChange={handleTimeToRead}
                    style={{ marginTop: 30 }}
                />
                <TextField
                    label="Content para 1"
                    className={classes.textField}
                    variant="outlined"
                    value={para1}
                    onChange={handlePara1}
                    style={{ marginTop: 30 }}
                    multiline
                />
                <TextField
                    label="Content para 2"
                    className={classes.textField}
                    variant="outlined"
                    value={para2}
                    onChange={handlePara2}
                    style={{ marginTop: 30 }}
                    multiline
                />
                <TextField
                    label="Content para 3"
                    className={classes.textField}
                    variant="outlined"
                    value={para3}
                    onChange={handlePara3}
                    style={{ marginTop: 30 }}
                    multiline
                />
                <TextField
                    label="Content para 4"
                    className={classes.textField}
                    variant="outlined"
                    value={para4}
                    onChange={handlePara4}
                    style={{ marginTop: 30 }}
                    multiline
                // rows={4}
                />
                <button onClick={handleSubmit} className={classes.signInButton} style={{ backgroundColor: (title && category && timeToRead && para1 && para2 && para3 && para4 && preview ) ? "#2584F4" : "" }}>
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
