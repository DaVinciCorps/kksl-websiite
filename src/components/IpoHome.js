import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import service1 from '../images/Services/service6.png';
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useHistory } from 'react-router';
import { url } from "./Helper";
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#E7F1FE",
    fontFamily: "Mulish",
    fontWeight: "bold",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: "111%",
    cursor: "pointer"
    // color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "111%",
    cursor: "pointer"
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    // backgroundColor: theme.palette.action.hover,
    height: 56
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    // border: 0,
  }
}));


function IpoHome() {
    const isMobile = useMediaQuery('(max-width:850px)');
    const is960 = useMediaQuery('(max-width:960px)');
    const isTab = useMediaQuery('(max-width:1100px)');
    const history = useHistory();
    const [ipos, setIpos] = useState([]);

    useEffect(()=>{
        axios({
            method: 'get',
            url: url + "ipo/",
        })
            .then(res => {
                console.log(res.data);
                const arr = res.data;
                // var open_t = arr.open_date;
                // var close_t = arr.close_date;

                // var open_date = new Date(res.data.open_date);
                // var close_date = new Date(res.data.close_date);
                // arr.open_date = open_date.getDate() + ' ' + open_date.getMonth()+1 + ', '+open_date.getFullYear();
                // arr.close_date = close_date.getDate() + ' ' + close_date.getMonth()+1 + ', '+close_date.getFullYear();

                setIpos([...arr]);
            })
            .catch(err => {
                console.log(err);
            })

    },[]);
    
    const handleApply=()=>{
        history.push('/IPO/apply')
    }
    const section1 = () => {

        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: isMobile ? "40px 6.2% 48px 6.2%" :is960?"80px 7.4% 20px 7.4%":isTab?"125px 7.4% 20px 7.4%": "125px 14.4% 20px 14.4%", flexWrap: isMobile ? 'wrap' : "" }}>
                <div style={{ margin: isMobile?'auto':'',marginRight: isMobile ? "auto" : 60, }}>
                    <p style={{ fontWeight: 'bold', marginTop: 0, fontSize: isMobile ? 24 : 36, color: '#161A1B', lineHeight: isMobile ? "30.12px" : "43.2px", fontFamily: 'Mulish', textAlign: isMobile ? 'center' : "" }}>
                        IPO
                    </p>
                    <p style={{ fontWeight: 400, marginTop: isMobile ? 16 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400, textAlign: isMobile ? 'center' : '' }}>
                    An Initial Public Offer (IPO) is the selling of securities to the public on the primary stock market which also allows a company to raise capital from public investors. From an investor point of view, IPO gives a chance to buy shares of a company, directly from the company at the price of their choice.
                    </p>
                    <div style={{ display: "flex", justifyContent: isMobile ? 'center' : "" }}>
                        <button onClick={handleApply} style={{ marginTop: isMobile ? 24 : 40, width: isMobile ? 160 : 257, height: isMobile ? 48 : 56, backgroundColor: '#2584F4', color: 'white', fontSize: isMobile ? 16 : 18, outline: 'none', border: 'none', borderRadius: 8, cursor: 'pointer' }} >
                            Apply for an IPO
                        </button>
                    </div>
                </div>
                <div>
                <img style={{ marginTop: isMobile ? 32 : 0, width: isMobile ? "100%" : "100%" }} src={service1} alt="Service1" />
                </div>
            </div>
        )
    }


    const section2 = () => {
        return (
            <div style={{ display:'flex', paddingLeft: isMobile ? "6.2%" :isTab?"7.4%": "14.4%", paddingRight: isMobile ? "6.2%" :isTab?"7.4%": "14.4%", marginTop: isMobile ? 0 : 160, flexDirection:'column'}}>
                <div style={{fontFamily:'Mulish', fontWeight:'bold', fontStyle:'normal', fontSize: isMobile?20:'36px', lineHeight:isMobile?"24px":'120%'}}>
                    Active IPOs
                </div>
                <div style={{paddingTop:isMobile?24:'32px'}}>
                    <TableContainer>
                        <Table sx={{ maxWidth: 1024 }} aria-label="customized table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell align="left">NAME</StyledTableCell>
                                <StyledTableCell align="left">Date</StyledTableCell>
                                <StyledTableCell align="left">Price Range</StyledTableCell>
                                <StyledTableCell align="right">Min. qty.</StyledTableCell>
                                <StyledTableCell align="right">(D) RHP</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {ipos.map((row) => (
                                <StyledTableRow key={row.company_name}>
                                <StyledTableCell
                                    component="th"
                                    scope="row"
                                    style={{ color: "#298FF5" }}
                                >
                                    {row.company_name}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.open_date}-{row.close_date}</StyledTableCell>
                                <StyledTableCell align="left">{row.low_price}-{row.high_price}</StyledTableCell>
                                <StyledTableCell align="right">{row.lot_size}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <div>
                                    <button onClick={()=>window.open('/IPO/apply/'+row._id)} style={{ width: 76, color:'white', height: 34, backgroundColor: '#2584F4', Acolor: 'white', fontSize: 16, outline: 'none', border: 'none', borderRadius: 8, cursor: 'pointer', }} >
                                        Apply
                                    </button>
                                    </div>
                                    
                                </StyledTableCell>
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        )
    }


    const section3 = () => {
        return (
            <div style={{ display:'flex', paddingLeft: isMobile ? "6.2%" :isTab?"7.4%": "14.4%", paddingRight: isMobile ? "6.2%" :isTab?"7.4%": "14.4%", marginTop: isMobile ? 48 : 80, flexDirection:'column'}}>
                <div style={{fontFamily:'Mulish', fontWeight:'bold', fontStyle:'normal', fontSize: isMobile?20:'36px', lineHeight:isMobile?"24px":'120%'}}>
                    Upcoming IPOs
                </div>
                <div style={{paddingTop:isMobile?"24px":'32px'}}>
                    <TableContainer>
                        <Table sx={{ maxWidth: 1024 }} aria-label="customized table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell align="left">NAME</StyledTableCell>
                                <StyledTableCell align="left">Date</StyledTableCell>
                                <StyledTableCell align="right">Price Range</StyledTableCell>
                                <StyledTableCell align="right">Min. qty.</StyledTableCell>
                                <StyledTableCell align="right">(D) RHP</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {ipos.map((row) => (
                                <StyledTableRow key={row.company_name}>
                                <StyledTableCell
                                    component="th"
                                    scope="row"
                                    style={{ color: "#298FF5" }}
                                >
                                    {row.company_name}
                                </StyledTableCell>
                                <StyledTableCell align="left">To be announced</StyledTableCell>
                                <StyledTableCell align="right">-</StyledTableCell>
                                <StyledTableCell align="right">-</StyledTableCell>
                                <StyledTableCell align="right">View</StyledTableCell>
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        )
    }


    const section4 = () => {
        return (
            <div style={{ display:'flex', paddingLeft: isMobile ? "6.2%" :isTab?"7.4%": "14.4%", paddingRight: isMobile ? "6.2%" :isTab?"7.4%": "14.4%", marginTop: isMobile ? 48 : 80, flexDirection:'column', marginBottom: isMobile ? '80px' : '160px'}}>
                <div style={{fontFamily:'Mulish', fontWeight:'bold', fontStyle:'normal', fontSize: isMobile?20:'36px', lineHeight:isMobile?"24px":'120%'}}>
                    Closed IPOs
                </div>
                <div style={{paddingTop:isMobile?'24px':'32px'}}>
                    <TableContainer>
                        <Table sx={{ maxWidth: 1024 }} aria-label="customized table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell align="left">NAME</StyledTableCell>
                                <StyledTableCell align="left">Date</StyledTableCell>
                                <StyledTableCell align="left">Price Range</StyledTableCell>
                                <StyledTableCell align="right">Min. qty.</StyledTableCell>
                                <StyledTableCell align="right">(D) RHP</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {ipos.map((row) => (
                                <StyledTableRow key={row.company_name}>
                                <StyledTableCell
                                    component="th"
                                    scope="row"
                                    style={{ color: "#298FF5" }}
                                >
                                    {row.company_name}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.open_date}-{row.close_date}</StyledTableCell>
                                <StyledTableCell align="left">{row.low_price}-{row.high_price}</StyledTableCell>
                                <StyledTableCell align="right">{row.lot_size}</StyledTableCell>
                                <StyledTableCell align="right">View</StyledTableCell>
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        )
    }

    return (
        <div style={{margin:'auto', maxWidth:isMobile?600:'1440px',}}>
            {section1()}
            {section2()}
            {section3()}
            {section4()}
        </div>
    )
}

export default IpoHome
