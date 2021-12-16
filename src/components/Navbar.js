import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import TrendImage from '../images/Vector.png'
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuSymbol from "../images/menu.png";
import Menu from '@mui/material/Menu';
import Associate from "../images/noto-v1_office-building.png";
import User from "../images/fa-solid_user.png";
import Dialog from '@mui/material/Dialog';
import cross from "../images/x (1).png";
import Security from "../images/security.png";
import { useHistory } from 'react-router';

const useStyles = makeStyles({
    root: {
        // width: '100%',
        height: '70px',
        backgroundColor: '#0953AA',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        padding: "0px 14.4%",
        zIndex: 1000,
        // paddingLeft: '14.5%',
        // paddingRight: '14.5%'
    },

    navLinks: {
        display: 'flex',
        // marginRight: 51,

    },

    navP: {
        margin: 0,
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Mulish',
        lineHeight: '120%',
        letterSpacing: '0.005em',
        // textTransform: 'uppercase',
        color: '#FFFFFF',
        marginRight: 32,
        cursor: 'pointer'
    },

    nifty: {
        backgroundColor: '#042349',
        height: '100%',
        width: 325,
        // marginRight: 83,
        color: '#FFFFFF',
        justifyContent: 'space-evenly',
        display: 'flex',
        flexDirection: 'column'
        // position: 'absolute',
        // left: 722,

    },

    shares: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
    },

    name: {
        // paddingLeft:8,
        paddingRight: 6,
        fontFamily: 'Rubik',
        fontSize: '14px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: "18px",
    },

    value: {
        paddingLeft: 6,
        paddingRight: 6,
        fontFamily: 'Rubik',
        fontSize: '14px',
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: "18px",
    },

    trend: {
        paddingLeft: 6,
        // paddingRight:8,
        fontFamily: 'Rubik',
        fontSize: '12px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: "21px",
    },

    signInButton: {
        width: 102,
        color: "#FFFFFF",
        height: 40,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "#2584F4",
        backgroundColor: "#2584F4",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        padding: '11 24',
        cursor: 'pointer'
    }

});


export default function Navbar() {
    const history = useHistory();
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:600px)');
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(false);
    const [associateOpen, setAssociateOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
        setAnchorEl(false);
    }
    const handleSignShow = (e) => {
        setOpen(true);
        setAnchorEl(e.currentTarget)
    }

    const loginMenu = () => {
        return (
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                style={{ marginTop: 15, padding: 0 }}

            >
                <div style={{ backgroundColor: "#F7F7F7", }}>
                    <div style={{ padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', }}>
                            <div style={{}}>
                                <img src={Associate} />
                                <p style={{ marginTop: 16, color: "#161A1B", fontSize: 18, fontFamily: 'Mulish', lineHeight: "21.6px", fontWeight: 'bold' }}>
                                    Associate Login
                                </p>
                                <p style={{ marginTop: 4, color: "rgba(22, 26, 27, 0.6)", fontSize: 12, fontFamily: 'Mulish', lineHeight: "18px", fontWeight: 400, maxWidth: 192 }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sit sagittis, risus mauris pellentesque iaculis.
                                </p>
                                <button onClick={() => { setAssociateOpen(true) }} style={{ marginTop: 16, width: 120, height: 48, outline: 'none', border: '1px solid #2584F4', borderRadius: 8, color: "#2584F4", fontWeight: 700, fontSize: 16, backgroundColor: "inherit", cursor: 'pointer' }}>
                                    Login
                                </button>
                            </div>

                            <div style={{ marginLeft: 40, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ flex: 1 }}>
                                    <img src={User} />
                                    <p style={{ marginTop: 16, color: "#161A1B", fontSize: 18, fontFamily: 'Mulish', lineHeight: "21.6px", fontWeight: 'bold' }}>
                                        Client Login
                                    </p>
                                    <p style={{ marginTop: 4, color: "rgba(22, 26, 27, 0.6)", fontSize: 12, fontFamily: 'Mulish', lineHeight: "18px", fontWeight: 400, maxWidth: 192 }}>
                                        Investor Client - direct for trading
                                    </p>
                                </div>
                                <button style={{ marginTop: 16, width: 120, height: 48, outline: 'none', border: '1px solid #2584F4', borderRadius: 8, color: "#2584F4", fontWeight: 700, fontSize: 16, backgroundColor: "inherit", cursor: 'pointer' }}>
                                    Login
                                </button>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: 72 }}>
                            <div style={{}}>
                                <p style={{ marginTop: 0, color: "rgba(22, 26, 27, 0.7)", fontSize: 24, fontFamily: 'Mulish', lineHeight: "120%", fontWeight: 600, letterSpacing: '0.05em' }}>
                                    Utilities
                                </p>
                                <p style={{ cursor: 'pointer', marginTop: 24, color: "rgba(22, 26, 27, 0.7)", fontSize: 16, fontFamily: 'Mulish', lineHeight: "19.2px", fontWeight: 400, letterSpacing: '0.05em' }}>
                                    Brokerage Calculator
                                </p>
                                <p style={{ cursor: 'pointer', marginTop: 16, color: "rgba(22, 26, 27, 0.7)", fontSize: 16, fontFamily: 'Mulish', lineHeight: "19.2px", fontWeight: 400, letterSpacing: '0.05em' }}>
                                    Margin Calculator
                                </p>
                                <p style={{ cursor: 'pointer', marginTop: 16, color: "rgba(22, 26, 27, 0.7)", fontSize: 16, fontFamily: 'Mulish', lineHeight: "19.2px", fontWeight: 400, letterSpacing: '0.05em' }}>
                                    Holiday Calendar
                                </p>
                            </div>

                            <div style={{ marginLeft: 80 }}>
                                <p style={{ cursor: 'pointer', marginTop: 0, color: "rgba(22, 26, 27, 0.7)", fontSize: 24, fontFamily: 'Mulish', lineHeight: "120%", fontWeight: 600, letterSpacing: '0.05em' }}>
                                    Updates
                                </p>
                                <p style={{ cursor: 'pointer', marginTop: 24, color: "rgba(22, 26, 27, 0.7)", fontSize: 16, fontFamily: 'Mulish', lineHeight: "19.2px", fontWeight: 400, letterSpacing: '0.05em' }}>
                                    Z-Connect blog
                                </p>
                                <p style={{ cursor: 'pointer', marginTop: 16, color: "rgba(22, 26, 27, 0.7)", fontSize: 16, fontFamily: 'Mulish', lineHeight: "19.2px", fontWeight: 400, letterSpacing: '0.05em' }}>
                                    Pulses News
                                </p>
                                <p style={{ cursor: 'pointer', marginTop: 16, color: "rgba(22, 26, 27, 0.7)", fontSize: 16, fontFamily: 'Mulish', lineHeight: "19.2px", fontWeight: 400, letterSpacing: '0.05em' }}>
                                    Circulars/ Bulletin
                                </p>
                                <p style={{ marginTop: 16, color: "rgba(22, 26, 27, 0.7)", fontSize: 16, fontFamily: 'Mulish', lineHeight: "19.2px", fontWeight: 400, letterSpacing: '0.05em' }}>
                                    IPOs
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </Menu>
        )
    }

    const associateLogin = () => {
        const loginData = [
            {
                img: Associate,
                heading: "Backoffice Branch",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sit sagittis"
            },
            {
                img: User,
                heading: "Backoffice Client",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sit sagittis"
            },
            {
                img: Security,
                heading: "Remeshire",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sit sagittis"
            },

        ]

        const handleAssociateClose = () => {
            setAssociateOpen(false);
        }

        const loginCard = (data) => {
            return (
                <div style={{ boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)", borderRadius: 15, width: 222, height: 272 }}>
                    <div style={{ margin: "32px 32px 24px 32px", }}>
                        <img src={data.img} />
                        <p style={{ marginTop: 16, color: "#161A1B", fontSize: 18, fontFamily: 'Mulish', lineHeight: "21.6px", fontWeight: 'bold' }}>
                            {data.heading}
                        </p>
                        <p style={{ marginTop: 4, color: "rgba(22, 26, 27, 0.6)", fontSize: 12, fontFamily: 'Mulish', lineHeight: "18px", fontWeight: 400, maxWidth: 192 }}>
                            {data.text}
                        </p>
                        <button onClick={() => { setAssociateOpen(true) }} style={{ marginTop: 16, width: 120, height: 48, outline: 'none', border: '1px solid #2584F4', borderRadius: 8, color: "#2584F4", fontWeight: 700, fontSize: 16, backgroundColor: "inherit", cursor: 'pointer' }}>
                            Login
                        </button>
                    </div>
                </div>
            )
        }

        return (
            <Dialog
                open={associateOpen}
                onClose={handleAssociateClose}
                style={{ boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)', borderRadius: 15 }}
                maxWidth="md"
            >
                <div style={{ width: 732, height: 330, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: "40px 40px 36px 40px", }}>
                    <img src={cross} style={{ position: 'absolute', top: 24, right: 24, cursor: 'pointer', }} onClick={handleAssociateClose} />
                    <div style={{ width: "100%" }}>
                        <p style={{ marginTop: 0, color: "#161A1B", fontSize: 28, fontFamily: 'Mulish', lineHeight: "33.6px", fontWeight: 'bold', textAlign: 'center' }}>
                            Associate Login
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
                            {loginCard(loginData[0])}
                            {loginCard(loginData[1])}
                            {loginCard(loginData[2])}
                        </div>
                    </div>
                </div>
            </Dialog>
        )
    }

    

    const mobileNav = () => {
        const handleMobileNavClose = () => {
            setMobileNavOpen(false);
        }

        const handleOpenSignIn = () => {
            handleMobileNavClose();
            history.push("/login");
        }

        return (
            <Dialog
                open={mobileNavOpen}
                onClose={handleMobileNavClose}
                style={{ boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)', borderRadius: 15 }}
                maxWidth="xs"
            >
                <div style={{ width: 264, height: 498, background: 'white', margin: "32px 24px", }}>
                    <img src={cross} style={{ position: 'absolute', top: 16, right: 16, cursor: 'pointer', }} onClick={handleMobileNavClose} />
                    <div style={{ marginBottom: 16, display: 'flex' }}>
                        <p onClick={handleOpenSignIn} style={{ marginTop: 0, color: "#161A1B", fontSize: 14, fontFamily: 'Mulish', lineHeight: "22px", fontWeight: 400, }}>
                            Signup
                        </p>
                        <p style={{ marginTop: 0, color: "#161A1B", fontSize: 14, fontFamily: 'Mulish', lineHeight: "22px", fontWeight: 400, marginLeft: 72 }}>
                            Services
                        </p>
                    </div>
                    <div style={{ marginBottom: 16, display: 'flex' }}>
                        <p style={{ marginTop: 0, color: "#161A1B", fontSize: 14, fontFamily: 'Mulish', lineHeight: "22px", fontWeight: 400, }}>
                            Home
                        </p>
                        <p style={{ marginTop: 0, color: "#161A1B", fontSize: 14, fontFamily: 'Mulish', lineHeight: "22px", fontWeight: 400, marginLeft: 79 }}>
                            Tools
                        </p>
                    </div>
                    <div style={{ marginBottom: 16, display: 'flex' }}>
                        <p style={{ marginTop: 0, color: "#161A1B", fontSize: 14, fontFamily: 'Mulish', lineHeight: "22px", fontWeight: 400, }}>
                            About Us
                        </p>
                        <p style={{ marginTop: 0, color: "#161A1B", fontSize: 14, fontFamily: 'Mulish', lineHeight: "22px", fontWeight: 400, marginLeft: 57 }}>
                            Blogs/ Videos
                        </p>
                    </div>
                    <div style={{ marginBottom: 20, display: 'flex' }}>
                        <p style={{ marginTop: 0, color: "#161A1B", fontSize: 14, fontFamily: 'Mulish', lineHeight: "22px", fontWeight: 400, }}>
                            Market
                        </p>
                    </div>
                    <div style={{ border: "1px solid rgba(0, 0, 0, 0.15)" }} />
                    <div style={{ marginBottom: 16, display: 'flex', marginTop: 32 }}>
                        <p style={{ marginTop: 0, color: "#161A1B", fontSize: 14, fontFamily: 'Mulish', lineHeight: "22px", fontWeight: 600, }}>
                            Fund transfer
                        </p>
                        <p style={{ marginTop: 0, color: "#161A1B", fontSize: 14, fontFamily: 'Mulish', lineHeight: "22px", fontWeight: 600, marginLeft: 62 }}>
                            IPO
                        </p>
                    </div>
                    <div style={{ marginBottom: 32, display: 'flex', }}>
                        <p style={{ marginTop: 0, color: "#161A1B", fontSize: 14, fontFamily: 'Mulish', lineHeight: "22px", fontWeight: 600, }}>
                            Re-KYC
                        </p>
                        <p style={{ marginTop: 0, color: "#161A1B", fontSize: 14, fontFamily: 'Mulish', lineHeight: "22px", fontWeight: 600, marginLeft: 100 }}>
                            open an account
                        </p>
                    </div>
                    <div style={{ border: "1px solid rgba(0, 0, 0, 0.15)" }} />
                    <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: 32, justifyContent: 'space-between' }}>
                        <div style={{}}>
                            <p style={{ marginTop: 0, color: "#161A1B", fontSize: 18, fontFamily: 'Mulish', lineHeight: "21.6px", fontWeight: 600, letterSpacing: '0.05em' }}>
                                Utilities
                            </p>
                            <p style={{ cursor: 'pointer', marginTop: 16, color: "rgba(22, 26, 27, 0.7)", fontSize: 12, fontFamily: 'Mulish', lineHeight: "20px", fontWeight: 400, letterSpacing: '0.05em' }}>
                                Brokerage Calculator
                            </p>
                            <p style={{ cursor: 'pointer', marginTop: 16, color: "rgba(22, 26, 27, 0.7)", fontSize: 12, fontFamily: 'Mulish', lineHeight: "20px", fontWeight: 400, letterSpacing: '0.05em' }}>
                                Margin Calculator
                            </p>
                            <p style={{ cursor: 'pointer', marginTop: 16, color: "rgba(22, 26, 27, 0.7)", fontSize: 12, fontFamily: 'Mulish', lineHeight: "20px", fontWeight: 400, letterSpacing: '0.05em' }}>
                                Holiday Calendar
                            </p>
                        </div>

                        <div style={{ marginLeft: 0 }}>
                            <p style={{ marginTop: 0, color: "#161A1B", fontSize: 18, fontFamily: 'Mulish', lineHeight: "21.6px", fontWeight: 600, letterSpacing: '0.05em' }}>
                                Updates
                            </p>
                            <p style={{ cursor: 'pointer', marginTop: 16, color: "rgba(22, 26, 27, 0.7)", fontSize: 12, fontFamily: 'Mulish', lineHeight: "20px", fontWeight: 400, letterSpacing: '0.05em' }}>
                                Z-Connect blog
                            </p>
                            <p style={{ cursor: 'pointer', marginTop: 16, color: "rgba(22, 26, 27, 0.7)", fontSize: 12, fontFamily: 'Mulish', lineHeight: "20px", fontWeight: 400, letterSpacing: '0.05em' }}>
                                Pulses News
                            </p>
                            <p style={{ cursor: 'pointer', marginTop: 16, color: "rgba(22, 26, 27, 0.7)", fontSize: 12, fontFamily: 'Mulish', lineHeight: "20px", fontWeight: 400, letterSpacing: '0.05em' }}>
                                Circulars/ Bulletin
                            </p>
                            <p style={{ cursor: 'pointer', marginTop: 16, color: "rgba(22, 26, 27, 0.7)", fontSize: 12, fontFamily: 'Mulish', lineHeight: "20px", fontWeight: 400, letterSpacing: '0.05em' }}>
                                IPOs
                            </p>
                        </div>
                    </div>
                </div>
            </Dialog >
        )
    }

    return (
        <React.Fragment >
            {isMobile &&
                <div style={{ zIndex: 1000, padding: "0px 6.4%", display: 'flex', justifyContent: 'space-between', backgroundColor: "#0953AA", height: 45, alignItems: 'center' }}>
                    <p style={{ fontFamily: 'Mulish', fontWeight: 600, fontSize: 20, lineHeight: "25.1px", letterSpacing: "0.04em", color: "white" }}>
                        kk Securities
                    </p>
                    <img onClick={() => { setMobileNavOpen(true) }} src={MenuSymbol} />
                    {mobileNav()}
                </div>
            }
            {!isMobile &&

                <div className={classes.root} >
                    <div className={classes.navLinks}>
                        <p className={classes.navP}>
                            OPEN AN ACCOUNT
                        </p>
                        <p className={classes.navP}>
                            IPO
                        </p>
                        <p className={classes.navP}>
                            FUND TRANSFER
                        </p>
                        <p className={classes.navP}>
                            Re-KYC
                        </p>
                    </div>

                    <div className={classes.nifty}>
                        <div className={classes.shares}>
                            <div className={classes.name}>
                                NIFTY
                            </div>
                            <div className={classes.value}>
                                15784.10
                            </div>
                            <div className={classes.trend}>
                                <img src={TrendImage} alt="Trend Icon" style={{ width: '15.67px', height: '13.58px' }} /> 46.35(0.29%)
                            </div>
                        </div>
                        <div className={classes.shares}>
                            <div className={classes.name}>
                                SENSEX
                            </div>
                            <div className={classes.value}>
                                52.515.51
                            </div>
                            <div className={classes.trend}>
                                <img src={TrendImage} alt="Trend Icon" style={{ width: '15.67px', height: '13.58px' }} /> 215.04(0.41%)
                            </div>
                        </div>
                    </div>

                    <div >
                        <button onClick={handleSignShow} className={classes.signInButton}>
                            Sign In
                        </button>
                    </div>
                    {loginMenu()}
                    {associateLogin()}
                </div>
            }
        </React.Fragment>
    )
}
