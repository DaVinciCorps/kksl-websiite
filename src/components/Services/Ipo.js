import React, { useState } from 'react'
import cuate from "../../images/Debt/cuate.png"
import service1 from "../../images/ipo.svg"
import Tick from "../../images/Debt/Tick.png"
import 'react-dropdown/style.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import LoginSignupModal from '../LoginSignupModal';
import Expand from 'react-expand-animated';


function Demat() {
    const history = useHistory();
    const isMobile = useMediaQuery('(max-width:850px)');
    const is960 = useMediaQuery('(max-width:960px)');
    const isTab = useMediaQuery('(max-width:1100px)');
    const [selected, setSelected] = useState();
    const [selectedPara, setSelectedPara] = useState();
    const [loginOpen,setLoginOpen] = useState(false);
    const loginClose=()=>{
        setLoginOpen(false);
    }
    const handleIpoOpen=()=>{
        history.push("/IPO/home")
    }
    const topDiv = () => {
        return (
            <div style={{ maxWidth: isMobile ? 500 : 1440, display: 'flex', justifyContent: 'space-between', margin: isMobile ? "40px 6.2% 48px 6.2%" : is960 ? "80px 7.4% 20px 7.4%" : isTab ? "125px 7.4% 20px 7.4%" : "125px 14.4% 20px 14.4%", flexWrap: isMobile ? 'wrap-reverse' : "" }}>
                {isMobile &&
                    <div style={{ display: "flex", justifyContent: isMobile ? 'center' : "", margin: 'auto' }}>
                        <button onClick={handleIpoOpen} style={{ marginTop: isMobile ? 32 : 40, width: isMobile ? 160 : 257, height: isMobile ? 48 : 56, backgroundColor: '#2584F4', color: 'white', fontSize: isMobile ? 16 : 18, outline: 'none', border: 'none', borderRadius: 8, cursor: 'pointer' }}>
                            Get Started
                        </button>
                    </div>
                }
                <div>
                    <img style={{ marginTop: isMobile ? 24 : 0, width: "100%" }} src={service1} />
                </div>

                <div style={{ marginLeft: isMobile ? 0 : 50 }}>
                    <p style={{ fontWeight: 'bold', marginTop: 0, fontSize: isMobile ? 24 : 36, color: '#161A1B', lineHeight: isMobile ? "30.12px" : "43.2px", fontFamily: 'Mulish', textAlign: isMobile ? '' : "" }}>
                        IPO
                    </p>
                    <p style={{ fontWeight: 400, marginTop: isMobile ? 16 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400, textAlign: isMobile ? '' : '' }}>
                    An Initial Public Offer (IPO) is the selling of securities to the public on the primary stock market which also allows a company to raise capital from public investors. From an investor point of view, IPO gives a chance to buy shares of a company, directly from the company at the price of their choice (in bookbuild IPO`s).
                    </p>
                    {!isMobile &&
                        <div style={{ display: "flex", justifyContent: isMobile ? 'center' : "" }}>
                            <button onClick={handleIpoOpen} style={{ marginTop: isMobile ? 24 : 40, width: isMobile ? 160 : 257, height: isMobile ? 48 : 56, backgroundColor: '#2584F4', color: 'white', fontSize: isMobile ? 16 : 18, outline: 'none', border: 'none', borderRadius: 8, cursor: 'pointer' }}>
                                Get Started
                            </button>
                        </div>
                    }
                </div>

            </div>
        )
    }

    const makeYourFirstMove = () => {
        return (
            <div style={{ backgroundColor: "#F7F7F7", marginTop: isMobile ? 0 : 160, width: "100%" }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: isMobile ? 500 : '', margin: "auto" }}>
                    {!isMobile && <p style={{ marginTop: isMobile ? "40px" : isTab ? "88px" : "88px", textAlign: isMobile ? "left" : 'center', fontWeight: 'bold', fontSize: isMobile ? 20 : 36, color: '#161A1B', lineHeight: isMobile ? "24px" : "43.2px", fontFamily: 'Mulish' }}>The money you make is a symbol of the value you create</p>}
                    <div style={{ padding: isMobile ? "24px 6.2% 40px 6.2%" : isTab ? "48px 7.4% 88px 7.4%" : "48px 14.4% 88px 14.4%", display: 'flex', justifyContent: 'space-between', flexWrap: isMobile ? 'wrap' : '',width: '-webkit-fill-available' }}>
                        {isMobile && <p style={{ marginBottom: isMobile ? "24px" : isTab ? "88px" : "88px", textAlign: isMobile ? "left" : 'center', fontWeight: 'bold', fontSize: isMobile ? 20 : 36, color: '#161A1B', lineHeight: isMobile ? "24px" : "43.2px", fontFamily: 'Mulish' }}>The money you make is a symbol of the value you create</p>}
                        <div >
                            <div style={{ display: 'flex' }}>
                                <div>
                                    <img style={{ width: isMobile ? 20 : 44, height: isMobile ? 20 : 44 }} src={Tick} />
                                </div>
                                <div style={{ marginLeft: isMobile ? 14 : 28 }}>
                                    <p style={{ fontWeight: 700, fontSize: isMobile ? 16 : 20, color: '#161A1B', lineHeight: isMobile ? "19.2px" : "24px", fontFamily: 'Mulish', maxWidth: 400 }}>Get in on the Action early</p>
                                    <p style={{ fontWeight: 400, marginTop: isMobile ? 10 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400 }}>Enter the 'ground floor' of a company with a high growth potential. An IPO may be your window to rapid profit in a short time period.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', marginTop: isMobile ? 16 : 65 }}>
                                <div>
                                    <img style={{ width: isMobile ? 20 : 44, height: isMobile ? 20 : 44 }} src={Tick} />
                                </div>
                                <div style={{ marginLeft: isMobile ? 14 : 28 }}>
                                    <p style={{ fontWeight: 700, fontSize: isMobile ? 16 : 20, color: '#161A1B', lineHeight: isMobile ? "19.2px" : "24px", fontFamily: 'Mulish', maxWidth: 400 }}>More price Transparency</p>
                                    <p style={{ fontWeight: 400, marginTop: isMobile ? 10 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400 }}>The price per security issued is clearly mentioned in the IPO order document. So, you have access to the same information as bigger investors.</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginLeft: isMobile ? 0 : 20, marginTop: isMobile ? 16 : 0 }}>
                            <div style={{ display: 'flex' }}>
                                <div>
                                    <img style={{ width: isMobile ? 20 : 44, height: isMobile ? 20 : 44 }} src={Tick} />
                                </div>
                                <div style={{ marginLeft: isMobile ? 14 : 28 }}>
                                    <p style={{ fontWeight: 700, fontSize: isMobile ? 16 : 20, color: '#161A1B', lineHeight: isMobile ? "19.2px" : "24px", fontFamily: 'Mulish', maxWidth: 400 }}>Meet long-term Goals</p>
                                    <p style={{ fontWeight: 400, marginTop: isMobile ? 10 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400 }}>IPO investments are equity investments. So, they have the potential to bring in big returns in the long term. </p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', marginTop: isMobile ? 16 : 65 }}>
                                <div>
                                    <img style={{ width: isMobile ? 20 : 44, height: isMobile ? 20 : 44 }} src={Tick} />
                                </div>
                                <div style={{ marginLeft: isMobile ? 14 : 28 }}>
                                    <p style={{ fontWeight: 700, fontSize: isMobile ? 16 : 20, color: '#161A1B', lineHeight: isMobile ? "19.2px" : "24px", fontFamily: 'Mulish', maxWidth: 400 }}>Buy cheap, earn Big</p>
                                    <p style={{ fontWeight: 400, marginTop: isMobile ? 10 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400 }}>The IPO price is often the cheapest price if you invest in a small company that has the potential to grow big. That is because the company may offer a discounted rate.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const howItWorks = () => {
        return (
            <div style={{ margin: isMobile ? "48px 6.2% 0px 6.2%" : "160px 7.2% 0px 7.2%", maxWidth: isMobile ? 500 : 1440 }}>
                <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 0, fontSize: isMobile ? 20 : 36, color: '#161A1B', lineHeight: isMobile ? "25.1px" : "43.2px", fontFamily: 'Mulish', textAlign: 'center' }}>
                    How it Works
                </p>
                <div style={{ width: "100%", display: 'flex', justifyContent: 'center' }}>
                    <p style={{ fontWeight: 400, marginTop: 16, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400, textAlign: 'center', maxWidth: 498 }}>
                    Here’s how you can get hold of your IPOs in no time. Make investments, keep track, update and manage them, all at one place. 
                    </p>
                </div>
                <div style={{ marginTop: isMobile ? 32 : 56, display: 'flex', justifyContent: 'space-between', flexWrap: isMobile ? 'wrap' : '' }}>

                    <div style={{ marginLeft: 10, marginRight: 10, display: 'flex', flexDirection: isMobile ? 'row' : 'column', alignItems: isMobile ? 'center' : '' }}>
                        <div style={{ marginRight: isMobile ? 45 : 0 }}>
                            <p style={{ fontSize: isMobile ? 32 : 96, lineHeight: isMobile ? "38.4px" : "120%", fontWeight: 'bold', fontFamily: 'Mulish', color: "#2584F4", textAlign: 'center' }}>
                                1
                            </p>
                            <p style={{ minWidth: isMobile ? 109 : "", fontWeight: 600, marginTop: isMobile ? 8 : 16, fontSize: isMobile ? 18 : 20, color: '#161A1B', lineHeight: isMobile ? "21.6px" : "24px", fontFamily: 'Mulish', textAlign: 'center' }}>
                            Log-in to Account
                            </p>
                        </div>
                        <div style={{ maxWidth: isMobile ? "" : 284, marginTop: isMobile ? 0 : 32, border: "1px solid rgba(0, 0, 0, 0.15)", boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)", borderRadius: 15, }}>
                            <p style={{ fontWeight: 400, textAlign: "center", fontSize: isMobile ? 10 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', margin: isMobile ? "16px" : '24px 24px 52px 24px' }}>
                            Log-in to your bank account and head over to the IPO section under Investments.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginLeft: 10, marginRight: 10, display: 'flex', flexDirection: isMobile ? 'row' : 'column', alignItems: isMobile ? 'center' : '', marginTop: isMobile ? 32 : 0 }}>
                        <div style={{ marginRight: isMobile ? 45 : 0 }}>
                            <p style={{ fontSize: isMobile ? 32 : 96, lineHeight: isMobile ? "38.4px" : "120%", fontWeight: 'bold', fontFamily: 'Mulish', color: "#2584F4", textAlign: 'center' }}>
                                2
                            </p>
                            <p style={{ minWidth: isMobile ? 109 : "", fontWeight: 600, marginTop: isMobile ? 8 : 16, fontSize: isMobile ? 18 : 20, color: '#161A1B', lineHeight: isMobile ? "21.6px" : "24px", fontFamily: 'Mulish', textAlign: 'center' }}>
                            Select the IPO
                            </p>
                        </div>
                        <div style={{ maxWidth: isMobile ? "" : 284, marginTop: isMobile ? 0 : 32, border: "1px solid rgba(0, 0, 0, 0.15)", boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)", borderRadius: 15, }}>
                            <p style={{ fontWeight: 400, textAlign: "center", fontSize: isMobile ? 10 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', margin: isMobile ? "16px" : '24px 24px 52px 24px' }}>
                            On the following screen, select the IPO that best suits you. You can find that out by assessing all factors like financial goals, individual assets and risk capacity. 
                            </p>
                        </div>
                    </div>

                    <div style={{ marginLeft: 10, marginRight: 10, display: 'flex', flexDirection: isMobile ? 'row' : 'column', alignItems: isMobile ? 'center' : '', marginTop: isMobile ? 32 : 0 }}>
                        <div style={{ marginRight: isMobile ? 45 : 0 }}>
                            <p style={{ fontSize: isMobile ? 32 : 96, lineHeight: isMobile ? "38.4px" : "120%", fontWeight: 'bold', fontFamily: 'Mulish', color: "#2584F4", textAlign: 'center' }}>
                                3
                            </p>
                            <p style={{ minWidth: isMobile ? 109 : "", fontWeight: 600, marginTop: isMobile ? 8 : 16, fontSize: isMobile ? 18 : 20, color: '#161A1B', lineHeight: isMobile ? "21.6px" : "24px", fontFamily: 'Mulish', textAlign: 'center' }}>
                            Shares and Bid Price
                            </p>
                        </div>
                        <div style={{ maxWidth: isMobile ? "" : 284, marginTop: isMobile ? 0 : 32, border: "1px solid rgba(0, 0, 0, 0.15)", boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)", borderRadius: 15, }}>
                            <p style={{ fontWeight: 400, textAlign: "center", fontSize: isMobile ? 10 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', margin: isMobile ? "16px" : '24px 24px 52px 24px' }}>
                            Post selection of the best suited IPO, enter the number of Shares and the corresponding Bid price.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginLeft: 10, marginRight: 10, display: 'flex', flexDirection: isMobile ? 'row' : 'column', alignItems: isMobile ? 'center' : '', marginTop: isMobile ? 32 : 0 }}>
                        <div style={{ marginRight: isMobile ? 45 : 0 }}>
                            <p style={{ fontSize: isMobile ? 32 : 96, lineHeight: isMobile ? "38.4px" : "120%", fontWeight: 'bold', fontFamily: 'Mulish', color: "#2584F4", textAlign: 'center' }}>
                                4
                            </p>
                            <p style={{ minWidth: isMobile ? 109 : "", fontWeight: 600, marginTop: isMobile ? 8 : 16, fontSize: isMobile ? 18 : 20, color: '#161A1B', lineHeight: isMobile ? "21.6px" : "24px", fontFamily: 'Mulish', textAlign: 'center' }}>
                            Confirm Order
                            </p>
                        </div>
                        <div style={{ maxWidth: isMobile ? "" : 284, marginTop: isMobile ? 0 : 32, border: "1px solid rgba(0, 0, 0, 0.15)", boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)", borderRadius: 15, }}>
                            <p style={{ fontWeight: 400, textAlign: "center", fontSize: isMobile ? 10 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', margin: isMobile ? "16px" : '24px 24px 52px 24px' }}>
                            The final step is to confirm and place the order for the investment.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }


    const faq = () => {
        const faqCard = (ques, ans, id) => {
            return (
                <div style={{ backgroundColor: '#F7F7F7', border: '1px solid #E0E0E0', borderRadius: 8, padding: isMobile ? "12px" : "24px 32px", display: 'flex' }} >
                    <div style={{ marginRight: isMobile ? 10 : 48, flex: 1 }}>
                        <p onClick={() => { handleSelect(id) }} style={{ fontWeight: 400, marginTop: 0, fontSize: isMobile ? 12 : 18, color: '#161A1B', lineHeight: isMobile ? "18px" : "24px", fontFamily: 'Mulish', cursor: 'pointer' }}>
                            {ques}
                        </p>
                        <div >
                            <Expand
                                open={selected == id}
                                duration={400}
                            >
                                <p id={"p" + id} style={{ fontWeight: 400, marginRight: isMobile ? "-34px" : 0, fontSize: isMobile ? 12 : 16, color: 'rgba(22, 26, 27, 0.6)', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', marginTop: isMobile ? 12 : 25, }}>
                                    {ans}
                                </p>
                            </Expand>
                        </div>
                    </div>
                    {selected !== id &&
                        <div style={{ cursor: 'pointer' }} onClick={() => { handleSelect(id) }}>
                            <KeyboardArrowDownIcon />
                        </div>
                    }
                    {selected === id &&
                        <div style={{ cursor: 'pointer' }} onClick={() => { handleSelect(id) }}>
                            <KeyboardArrowUpIcon />
                        </div>
                    }
                </div>
            )
        }

        const handleSelect = (e) => {
            if (selected == e) {
                setSelected();
            }
            else {
                setSelected(e);
            }
        }

        return (
            <div style={{ maxWidth: isMobile ? 500 : 1440, margin: isMobile ? "48px 6.2%" : isTab ? "160px 7.4% 0px 7.4%" : '160px 14.2% 0px 14.2%' }}>
                <p style={{ fontWeight: 'bold', marginTop: 0, fontSize: isMobile ? 20 : 36, color: '#161A1B', lineHeight: isMobile ? "24px" : "43.2px", fontFamily: 'Mulish', textAlign: 'center' }}>
                    Frequently Asked Questions
                </p>
                <div style={{ marginTop: isMobile ? 24 : 48 }}  >
                    {faqCard('What is an IPO?', 'An Initial Public Offer (IPO) is the selling of securities to the public on the primary stock market which also allows a company to raise capital from public investors. Selling the company shares is like selling a portion of its stake to the investors for the company.', 0)}
                </div>
                <div style={{ marginTop: isMobile ? 16 : 48 }}>
                    {faqCard('Why does a company launch an IPO?', 'Companies use the IPO route to generate fresh equity capital for the company to further its business.', 1)}
                </div>
                <div style={{ marginTop: isMobile ? 16 : 48 }}>
                    {faqCard('Who can invest in an IPO?', 'Investors are divided into three main categories: 1. Qualified institutional buyers (QIB) QIB portion which comprises Mutual funds Domestic Financial Institutions: Banks, Financial Institutions and Insurance Companies Foreign Institutional Investors Others 2. Non-Institutional Investors NIIs comprise Corporates Individuals other than retail investors Others 3) Retail Individual Investors', 2)}
                </div>
                <div style={{ marginTop: isMobile ? 16 : 48 }} >
                    {faqCard('What is the difference between Primary Market and Secondary Market?', "Primary market is the market where investors can buy shares directly from the issuer company to raise their capital whereas Secondary market is the market where stocks are traded after they are initially offered to the investor in the primary market (IPO's etc.) and get listed on the stock exchange.", 3)}
                </div>
                <div style={{ marginTop: isMobile ? 16 : 48 }} >
                    {faqCard('Is it mandatory to have a PAN number to apply in an IPO? ', 'Yes, Since July 2006, SEBI made PAN number mandatory for all IPO applicants. Forms submitted without PAN number or wrong PAN numbers are by default considered as faulty. ', 4)}
                </div>
            </div>
        )
    }

    const investInStocks = () => {
        return (
            <div style={{ margin: isMobile ? "48px 6.2% " : isTab ? "160px 7.4%" : "160px 14.4% 160px 14.4%", maxWidth: isMobile ? 500 : 1440, }}>
                <div style={{ backgroundColor: "#0953AA", borderRadius: 15, display: 'flex', justifyContent: "space-between", padding: isMobile ? "40px 6.2%" : "125px 82px 100px 104px", flexWrap: isMobile ? "wrap" : '', backgroundImage: `url("/group8.png")`, backgroundRepeat: "no-repeat", backgroundPosition: "100% 0%", backgroundSize: isMobile ? "25%" : "" }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                        <p style={{ color: "white", fontFamily: 'Mulish', fontWeight: 'bold', fontSize: isMobile ? 20 : 40, lineHeight: isMobile ? "25.1px" : "52px", letterSpacing: "0.005em" }}>
                        Summon us Anywhere, <br />Anytime
                        </p>
                        <p style={{ color: 'white', marginTop: isMobile ? 16 : 25, fontFamily: 'Mulish', fontSize: isMobile ? 12 : 16, lineHeight: isMobile ? "18px" : "26px", maxWidth: 350 }}>
                        Our service is just one-click away.  From clearing your doubts to guiding you through your investment portfolio, we are present at every step.
                        </p>
                        <button onClick={()=>{setLoginOpen(true)}} style={{ width: isMobile ? 160 : 240, marginTop: 25, height: isMobile ? 48 : 56, backgroundColor: '#2584F4', color: 'white', fontSize: 16, outline: 'none', border: 'none', borderRadius: 8, cursor: 'pointer' }}>
                            Start Investing
                        </button>
                    </div>
                    <div style={{ marginLeft: isMobile ? 0 : 20, marginTop: isMobile ? 33.66 : 0 }}>
                        <img src={cuate} style={{ width: "100%", minWidth: isMobile ? "" : 220 }} />
                    </div>
                </div>

            </div>
        )
    }

    return (

        <div style={{ display: isMobile? 'flex':'', alignItems: "center", flexDirection: "column" }} >
            {topDiv()}
            {makeYourFirstMove()}
            {howItWorks()}
            {faq()}
            {investInStocks()}
            <LoginSignupModal open={loginOpen} handleClose={loginClose} />
        </div>

    );

}
export default Demat;