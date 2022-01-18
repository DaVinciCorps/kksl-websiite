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


export default function AdminIPO() {
    const isMobile = useMediaQuery('(max-width:850px)');
    const history = useHistory();
    const classes = useStyles();
    const [exchange, setExchange] = useState("");
    const [company, setCompany] = useState("");
    const [lotPrice, setLotPrice] = useState("");
    const [openDate, setOpenDate] = useState("");
    const [closeDate, setCloseDate] = useState("");
    const [openDateSec, setOpenDateSec] = useState("");
    const [closeDateSec, setCloseDateSec] = useState("");
    const [lotSize, setLotSize] = useState("");
    const [lowPrice, setLowPrice] = useState("");
    const [highPrice, setHighPrice] = useState("");
    const [issueSize, setIssueSize] = useState("");
    const [aboutPara1, setAboutPara1] = useState("");
    const [aboutPara2, setAboutPara2] = useState("");
    const [recommendationPara1, setRecommendationPara1] = useState("");
    const [recommendationPara2, setRecommendationPara2] = useState("");
    const [loaded, setLoaded] = useState(false);
    const { id } = useParams();
    const [open, setOpen] = useState(false);
    const vertical = "bottom";
    const horizontal = "center";
    const [message, setMessage] = useState();

    const formatDate=(sec)=>{
        if(!sec){
            return "";
        }
        var date = new Date(sec);
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        
        var day = date.getDate();
        
        var hour = date.getHours();
        var minute = date.getMinutes();
        if(month<10){
            month = "0"+String(month);
        }
        if(day<10){
            day = "0"+String(day);
        }
        if(hour<10){
            hour = "0"+String(hour);
        }
        if(minute<10){
            minute = "0"+String(minute);
        }
        var res = "";
        res+= String(year) + "-" + String(month) + "-" + String(day) + "T" + String(hour) + ":" + String(minute);
        return res; 
    }

    useEffect(() => {
        if (id) {
            axios({
                method: 'get',
                url: url + "ipo/" + id,
            })
                .then(res => {
                    console.log(res);
                    setCompany(res.data.company_name)
                    setExchange(res.data.exchange)
                    setIssueSize(res.data.issue_size)
                    setLotPrice(res.data.minimum_amount)
                    setOpenDateSec(res.data.open_date)
                    setOpenDate(formatDate(res.data.open_date))
                    setCloseDate(formatDate(res.data.close_date))
                    setCloseDateSec(res.data.close_date)
                    setLotSize(res.data.lot_size)
                    setLowPrice(res.data.low_price)
                    setHighPrice(res.data.high_price)
                    setAboutPara1(res.data.about_para_1)
                    setAboutPara2(res.data.about_para_2)
                    setRecommendationPara1(res.data.recommendation_para_1)
                    setRecommendationPara2(res.data.recommendation_para_2)
                    setLoaded(true);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [])

    const handleCompany = (e) => {
        setCompany(e.target.value);
    }
    const handleExchange = (e) => {
        setExchange(e.target.value);
    }
    const handleLotPrice = (e) => {
        setLotPrice(e.target.value);
    }
    const handleOpenDate = (e) => {
        
        const open = (new Date(e.target.value)).getTime();
        console.log(open);
        setOpenDate(e.target.value);
        setOpenDateSec(open);
    }
    const handleCloseDate = (e) => {
        const close = (new Date(e.target.value)).getTime()
        setCloseDate(e.target.value);
        setCloseDateSec(close);
    }
    const handleLotSize = (e) => {
        setLotSize(e.target.value);
    }
    const handleLowPrice = (e) => {
        setLowPrice(e.target.value);
    }
    const handleHighPrice = (e) => {
        setHighPrice(e.target.value);
    }
    const handleIssueSize = (e) => {
        setIssueSize(e.target.value);
    }
    const handleAboutPara1 = (e) => {
        setAboutPara1(e.target.value);
    }
    const handleAboutPara2 = (e) => {
        setAboutPara2(e.target.value);
    }
    const handleRecommendationPara1 = (e) => {
        setRecommendationPara1(e.target.value);
    }
    const handleRecommendationPara2 = (e) => {
        setRecommendationPara2(e.target.value);
    }

    const handleSubmit = () => {
        if (company != "" && exchange != "" && !id ) {
            var formData = new FormData();
            console.log({openDate})
            formData.append("company_name", company);
            formData.append("exchange", exchange);
            formData.append("minimum_amount", lotPrice);
            formData.append("open_date", openDateSec);
            formData.append("close_date", closeDateSec);
            formData.append("lot_size", lotSize);
            formData.append("low_price", lowPrice);
            formData.append("high_price", highPrice);
            formData.append("issue_size", issueSize);
            formData.append("about_para_1", aboutPara1);
            formData.append("about_para_2", aboutPara2);
            formData.append("recommendation_para_1", recommendationPara1);
            formData.append("recommendation_para_2", recommendationPara2);
            axios({
                method: "post",
                url: url + "ipo",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(res => {

                    console.log(res.data);
                    if (res.data._id) {
                        setOpen(true);
                        setMessage("IPO created successfully.")
                        history.push("/admin/IPO/" + res.data._id);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
        else if (company != "" && exchange != "" && id ) {
            var formData = new FormData();
            formData.append("ipoId", id);
            formData.append("company", company);
            formData.append("exchange", exchange);
            formData.append("lot_price", lotPrice);
            formData.append("open_date", openDateSec);
            formData.append("close_date", closeDateSec);
            formData.append("lot_size", lotSize);
            formData.append("low_price", lowPrice);
            formData.append("high_price", highPrice);
            formData.append("issue_size", issueSize);
            formData.append("about_para1", aboutPara1);
            formData.append("about_para2", aboutPara2);
            formData.append("recommendation_para_1", recommendationPara1);
            formData.append("recommendation_para_2", recommendationPara2);
            axios({
                method: "post",
                url: url + "ipo/update_ipo",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(res => {
                    console.log(res);
                    setOpen(true);
                    setMessage("IPO updated successfully.")
                })
                .catch(err => {
                    console.log(err);
                })
        }

    }
    const handleDelete = () => {
        var formData = new FormData();
        formData.append("ipoId", id);
        axios({
            method: "delete",
            url: url + "ipo/" + id,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(res => {
                console.log(res);
                setExchange("");
                setCompany("");
                setLotPrice("");
                setOpenDate("");
                setCloseDate("");
                setLotSize("");
                setLowPrice("");
                setHighPrice("");
                setIssueSize("");
                setAboutPara1("");
                setAboutPara2("");
                setRecommendationPara1("");
                setRecommendationPara2("");
                setOpen(true);
                setMessage("IPO deleted successfully.")
                history.push("/admin/ipo");
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
            {((id && loaded) || (!id)) &&
                <div style={{ margin: isMobile ? "0px 6.2%" : "133px 14.4%", boxShadow: isMobile ? "" : "0px 20px 26px rgba(54, 53, 53, 0.3)", padding: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p style={{ fontFamily: "Mulish", fontSize: isMobile ? 24 : 32, }}>{id ? "Update a IPO" : "Create a IPO"}</p>
                    <TextField
                        label="Company Name"
                        className={classes.textField}
                        variant="outlined"
                        value={company}
                        onChange={handleCompany}
                        style={{ marginTop: 50 }}
                    />
                    <TextField
                        select
                        label="Exchange"
                        value={exchange}
                        onChange={handleExchange}
                        variant="outlined"
                        className={classes.textField}
                        style={{ marginTop: 50 }}
                    >
                        <MenuItem key={"NSE"} value={"NSE"}>
                            NSE
                        </MenuItem>
                        <MenuItem key={"BSE"} value={"BSE"}>
                            BSE
                        </MenuItem>
                    </TextField>
                    <TextField
                        label="Lot Price"
                        className={classes.textField}
                        variant="outlined"
                        value={lotPrice}
                        onChange={handleLotPrice}
                        style={{ marginTop: 50 }}
                        type="number"
                        onWheel={(e) => e.target.blur()}
                    />
                    <p style={{fontFamily: "Mulish", marginBottom: -40, marginTop: 24,}}>Open Date Time</p>
                    <TextField
                        className={classes.textField}
                        variant="outlined"
                        type="datetime-local"
                        value={openDate}
                        onChange={handleOpenDate}
                        style={{ marginTop: 50 }}
                    />
                    <p style={{fontFamily: "Mulish", marginBottom: -40, marginTop: 24,}}>Close Date Time</p>
                    <TextField
                        className={classes.textField}
                        variant="outlined"
                        type="datetime-local"
                        value={closeDate}
                        onChange={handleCloseDate}
                        style={{ marginTop: 50 }}
                    />
                    <TextField
                        label="Lot Size"
                        className={classes.textField}
                        variant="outlined"
                        value={lotSize}
                        onChange={handleLotSize}
                        type="number"
                        onWheel={(e) => e.target.blur()}
                        style={{ marginTop: 50 }}
                    />
                    <TextField
                        label="Low - Issue Price"
                        className={classes.textField}
                        variant="outlined"
                        value={lowPrice}
                        onChange={handleLowPrice}
                        type="number"
                        onWheel={(e) => e.target.blur()}
                        style={{ marginTop: 50 }}
                    />
                    <TextField
                        label="High - Issue Price"
                        className={classes.textField}
                        variant="outlined"
                        value={highPrice}
                        onChange={handleHighPrice}
                        type="number"
                        onWheel={(e) => e.target.blur()}
                        style={{ marginTop: 50 }}
                    />
                    <TextField
                        label="Issue Size"
                        className={classes.textField}
                        variant="outlined"
                        value={issueSize}
                        onChange={handleIssueSize}
                        type="number"
                        onWheel={(e) => e.target.blur()}
                        style={{ marginTop: 50 }}
                    />
                    <TextField
                        label="About Company Para 1"
                        className={classes.textField}
                        variant="outlined"
                        value={aboutPara1}
                        onChange={handleAboutPara1}
                        multiline
                        style={{ marginTop: 50 }}
                    />
                    <TextField
                        label="About Company Para 2"
                        className={classes.textField}
                        variant="outlined"
                        value={aboutPara2}
                        onChange={handleAboutPara2}
                        multiline
                        style={{ marginTop: 50 }}
                    />
                    <TextField
                        label="Our Recommendation Para 1"
                        className={classes.textField}
                        variant="outlined"
                        value={recommendationPara1}
                        onChange={handleRecommendationPara1}
                        multiline
                        style={{ marginTop: 50 }}
                    />

                    <TextField
                        label="Our Recommendation Para 2"
                        className={classes.textField}
                        variant="outlined"
                        value={recommendationPara2}
                        onChange={handleRecommendationPara2}
                        multiline
                        style={{ marginTop: 50 }}
                    />
                    <button onClick={handleSubmit} className={classes.signInButton} style={{ backgroundColor: (company != "" && exchange != "") ? "#2584F4" : "" }}>
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
