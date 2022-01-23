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
import { url, parseDate } from "./Helper";
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


function IpoList() {
    const isMobile = useMediaQuery('(max-width:850px)');
    const is960 = useMediaQuery('(max-width:960px)');
    const isTab = useMediaQuery('(max-width:1100px)');
    const history = useHistory();
    const [active, setActive] = useState([]);
    const [past, setPast] = useState([]);
    const [upcoming, setUpcoming] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: url + "ipo/",
        })
            .then(res => {
                console.log(res.data);
                setActive([...res.data.active]);
                setPast([...res.data.past]);
                setUpcoming([...res.data.upcoming]);

            })
            .catch(err => {
                console.log(err);
            })

    }, []);

    const handleApply = () => {

    }
    const section1 = () => {

        return (
            <div style={{ display: 'flex', justifyContent: 'center', margin: isMobile ? "40px 6.2% 48px 6.2%" : is960 ? "80px 7.4% 20px 7.4%" : isTab ? "125px 7.4% 20px 7.4%" : "125px 14.4% 20px 14.4%", flexWrap: isMobile ? 'wrap' : "" }}>
                <div style={{ margin: isMobile ? 'auto' : '', marginRight: isMobile ? "auto" : "", }}>
                    <p style={{ fontWeight: 'normal', marginTop: 0, fontSize: isMobile ? 24 : 36, color: '#161A1B', lineHeight: isMobile ? "30.12px" : "43.2px", fontFamily: 'Mulish', textAlign: isMobile ? 'center' : "center" }}>
                        Click on an IPO to edit.
                    </p>
                </div>
            </div>
        )
    }


    const section2 = () => {
        return (
            <div style={{ display: 'flex', paddingLeft: isMobile ? "6.2%" : isTab ? "7.4%" : "14.4%", paddingRight: isMobile ? "6.2%" : isTab ? "7.4%" : "14.4%", marginTop: isMobile ? 0 : 80, flexDirection: 'column' }}>
                <div style={{ fontFamily: 'Mulish', fontWeight: 'bold', fontStyle: 'normal', fontSize: isMobile ? 20 : '36px', lineHeight: isMobile ? "24px" : '120%' }}>
                    Active IPOs
                </div>
                <div style={{ paddingTop: isMobile ? 24 : '32px' }}>
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
                                {active.map((row) => (
                                    <StyledTableRow key={row.company_name}>
                                        <StyledTableCell
                                            component="th"
                                            scope="row"
                                            style={{ color: "#298FF5" }}
                                            onClick={()=>window.open('/IPO/apply/'+row._id)}
                                        >
                                            {row.company_name}
                                        </StyledTableCell>
                                        <StyledTableCell align="left" >{parseDate(row.open_date)}-{parseDate(row.close_date)}</StyledTableCell>
                                        <StyledTableCell align="left">{row.low_price}-{row.high_price}</StyledTableCell>
                                        <StyledTableCell align="right">{row.lot_size}</StyledTableCell>
                                        <StyledTableCell align="right">
                                            <div>
                                                <button onClick={() => window.open('/admin/ipo/' + row._id)} style={{ width: 76, color: 'white', height: 34, backgroundColor: '#2584F4', Acolor: 'white', fontSize: 16, outline: 'none', border: 'none', borderRadius: 8, cursor: 'pointer', }} >
                                                    Edit
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
            <div style={{ display: 'flex', paddingLeft: isMobile ? "6.2%" : isTab ? "7.4%" : "14.4%", paddingRight: isMobile ? "6.2%" : isTab ? "7.4%" : "14.4%", marginTop: isMobile ? 48 : 80, flexDirection: 'column' }}>
                <div style={{ fontFamily: 'Mulish', fontWeight: 'bold', fontStyle: 'normal', fontSize: isMobile ? 20 : '36px', lineHeight: isMobile ? "24px" : '120%' }}>
                    Upcoming IPOs
                </div>
                <div style={{ paddingTop: isMobile ? "24px" : '32px' }}>
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
                                {upcoming.map((row) => (
                                    <StyledTableRow key={row.company_name}>
                                        <StyledTableCell
                                            component="th"
                                            scope="row"
                                            style={{ color: "#298FF5" }}
                                            onClick={()=>window.open('/IPO/apply/'+row._id)}
                                        >
                                            {row.company_name}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.open_date?(parseDate(row.open_date)+"-"+parseDate(row.close_date)):"To be announced"}</StyledTableCell>
                                        <StyledTableCell align="right">{row.low_price && row.low_price}-{row.high_price && row.high_price}</StyledTableCell>
                                        <StyledTableCell align="right">{row.lot_size?row.lot_size:"-"}</StyledTableCell>
                                        <StyledTableCell align="right">
                                            <div>
                                                <button onClick={() => window.open('/admin/ipo/' + row._id)} style={{ width: 76, color: 'white', height: 34, backgroundColor: '#2584F4', Acolor: 'white', fontSize: 16, outline: 'none', border: 'none', borderRadius: 8, cursor: 'pointer', }} >
                                                    Edit
                                                </button>
                                            </div></StyledTableCell>
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
            <div style={{ display: 'flex', paddingLeft: isMobile ? "6.2%" : isTab ? "7.4%" : "14.4%", paddingRight: isMobile ? "6.2%" : isTab ? "7.4%" : "14.4%", marginTop: isMobile ? 48 : 80, flexDirection: 'column', marginBottom: isMobile ? '80px' : '160px' }}>
                <div style={{ fontFamily: 'Mulish', fontWeight: 'bold', fontStyle: 'normal', fontSize: isMobile ? 20 : '36px', lineHeight: isMobile ? "24px" : '120%' }}>
                    Closed IPOs
                </div>
                <div style={{ paddingTop: isMobile ? '24px' : '32px' }}>
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
                                {past.map((row) => (
                                    <StyledTableRow key={row.company_name}>
                                        <StyledTableCell
                                            component="th"
                                            scope="row"
                                            style={{ color: "#298FF5" }}
                                            onClick={()=>window.open('/IPO/apply/'+row._id)}
                                        >
                                            {row.company_name}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{parseDate(row.open_date)}-{parseDate(row.close_date)}</StyledTableCell>
                                        <StyledTableCell align="left">{row.low_price}-{row.high_price}</StyledTableCell>
                                        <StyledTableCell align="right">{row.lot_size}</StyledTableCell>
                                        <StyledTableCell align="right">
                                            <div>
                                                <button onClick={() => window.open('/admin/ipo/' + row._id)} style={{ width: 76, color: 'white', height: 34, backgroundColor: '#2584F4', Acolor: 'white', fontSize: 16, outline: 'none', border: 'none', borderRadius: 8, cursor: 'pointer', }} >
                                                    Edit
                                                </button>
                                            </div></StyledTableCell>
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
        <div style={{ margin: 'auto', maxWidth: isMobile ? 600 : '1440px', }}>
            {section1()}
            {section2()}
            {section3()}
            {section4()}
        </div>
    )
}

export default IpoList
