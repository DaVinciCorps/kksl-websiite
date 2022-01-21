import React, { useState } from 'react'
import cuate from "../../images/Debt/cuate.png"
import service1 from "../../images/ii.svg"
import Tick from "../../images/Debt/Tick.png"
import 'react-dropdown/style.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useMediaQuery from '@mui/material/useMediaQuery';
import InternationModal from '../InternationalModal.js';
import LoginSignupModal from '../LoginSignupModal';
import Expand from 'react-expand-animated';


function Demat() {
    const isMobile = useMediaQuery('(max-width:850px)');
    const is960 = useMediaQuery('(max-width:960px)');
    const isTab = useMediaQuery('(max-width:1100px)');
    const [selected, setSelected] = useState();
    const [selectedPara, setSelectedPara] = useState();
    const [open,setOpen] = useState(false);
    const handleClose=()=>{
        setOpen(false);
    }
    const [loginOpen,setLoginOpen] = useState(false);
    const loginClose=()=>{
        setLoginOpen(false);
    }

    const topDiv = () => {
        return (
            <div style={{ maxWidth: isMobile ? 500 : 1440, display: 'flex', justifyContent: 'space-between', margin: isMobile ? "40px 6.2% 48px 6.2%" : is960 ? "80px 7.4% 20px 7.4%" : isTab ? "125px 7.4% 20px 7.4%" : "125px 14.4% 20px 14.4%", flexWrap: isMobile ? 'wrap-reverse' : "" }}>
                {isMobile &&
                    <div style={{ display: "flex", justifyContent: isMobile ? 'center' : "", margin: 'auto' }}>
                        <button onClick={()=>{setOpen(true)}} style={{ marginTop: isMobile ? 32 : 40, width: isMobile ? 160 : 257, height: isMobile ? 48 : 56, backgroundColor: '#2584F4', color: 'white', fontSize: isMobile ? 16 : 18, outline: 'none', border: 'none', borderRadius: 8, cursor: 'pointer' }}>
                            Get Started
                        </button>
                    </div>
                }
                <div>
                    <img style={{ marginTop: isMobile ? 24 : 0, width: "100%" }} src={service1} />
                </div>

                <div style={{ marginLeft: isMobile ? 0 : 50 }}>
                    <p style={{ fontWeight: 'bold', marginTop: 0, fontSize: isMobile ? 24 : 36, color: '#161A1B', lineHeight: isMobile ? "30.12px" : "43.2px", fontFamily: 'Mulish', textAlign: isMobile ? '' : "" }}>
                        International Investments
                    </p>
                    <p style={{ fontWeight: 400, marginTop: isMobile ? 16 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400, textAlign: isMobile ? '' : '' }}>International Equity markets not only ensure a wide variety of participation but also offer global economies to prosper. Here, trading is done in the market with stocks of companies based out of the U.S.</p>
                    {!isMobile &&
                        <div style={{ display: "flex", justifyContent: isMobile ? 'center' : "" }}>
                            <button onClick={()=>{setOpen(true)}} style={{ marginTop: isMobile ? 24 : 40, width: isMobile ? 160 : 257, height: isMobile ? 48 : 56, backgroundColor: '#2584F4', color: 'white', fontSize: isMobile ? 16 : 18, outline: 'none', border: 'none', borderRadius: 8, cursor: 'pointer' }}>
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
                    {!isMobile && <p style={{ marginTop: isMobile ? "40px" : isTab ? "88px" : "88px", textAlign: isMobile ? "left" : 'center', fontWeight: 'bold', fontSize: isMobile ? 20 : 36, color: '#161A1B', lineHeight: isMobile ? "24px" : "43.2px", fontFamily: 'Mulish' }}>Invest today for a secured tomorrow</p>}
                    <div style={{ padding: isMobile ? "24px 6.2% 40px 6.2%" : isTab ? "48px 7.4% 88px 7.4%" : "48px 14.4% 88px 14.4%", display: 'flex', justifyContent: 'space-between', flexWrap: isMobile ? 'wrap' : '',width: '-webkit-fill-available' }}>
                        {isMobile && <p style={{ marginBottom: isMobile ? "24px" : isTab ? "88px" : "88px", textAlign: isMobile ? "left" : 'center', fontWeight: 'bold', fontSize: isMobile ? 20 : 36, color: '#161A1B', lineHeight: isMobile ? "24px" : "43.2px", fontFamily: 'Mulish' }}>Invest today for a secured tomorrow</p>}
                        <div >
                            <div style={{ display: 'flex' }}>
                                <div>
                                    <img style={{ width: isMobile ? 20 : 44, height: isMobile ? 20 : 44 }} src={Tick} />
                                </div>
                                <div style={{ marginLeft: isMobile ? 14 : 28 }}>
                                    <p style={{ fontWeight: 700, fontSize: isMobile ? 16 : 20, color: '#161A1B', lineHeight: isMobile ? "19.2px" : "24px", fontFamily: 'Mulish', maxWidth: 400 }}>Exposure</p>
                                    <p style={{ fontWeight: 400, marginTop: isMobile ? 10 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400 }}>Exposure to global leaders like Sony, Google and Facebook.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', marginTop: isMobile ? 16 : 65 }}>
                                <div>
                                    <img style={{ width: isMobile ? 20 : 44, height: isMobile ? 20 : 44 }} src={Tick} />
                                </div>
                                <div style={{ marginLeft: isMobile ? 14 : 28 }}>
                                    <p style={{ fontWeight: 700, fontSize: isMobile ? 16 : 20, color: '#161A1B', lineHeight: isMobile ? "19.2px" : "24px", fontFamily: 'Mulish', maxWidth: 400 }}>Wide Range</p>
                                    <p style={{ fontWeight: 400, marginTop: isMobile ? 10 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400 }}>Here, you get a massive amount of investment options from international equities.</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginLeft: isMobile ? 0 : 20, marginTop: isMobile ? 16 : 0 }}>
                            <div style={{ display: 'flex' }}>
                                <div>
                                    <img style={{ width: isMobile ? 20 : 44, height: isMobile ? 20 : 44 }} src={Tick} />
                                </div>
                                <div style={{ marginLeft: isMobile ? 14 : 28 }}>
                                    <p style={{ fontWeight: 700, fontSize: isMobile ? 16 : 20, color: '#161A1B', lineHeight: isMobile ? "19.2px" : "24px", fontFamily: 'Mulish', maxWidth: 400 }}>Diversification</p>
                                    <p style={{ fontWeight: 400, marginTop: isMobile ? 10 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400 }}>A diversified portfolio fundamentally acts as a source of stability during market volatility.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', marginTop: isMobile ? 16 : 65 }}>
                                <div>
                                    <img style={{ width: isMobile ? 20 : 44, height: isMobile ? 20 : 44 }} src={Tick} />
                                </div>
                                <div style={{ marginLeft: isMobile ? 14 : 28 }}>
                                    <p style={{ fontWeight: 700, fontSize: isMobile ? 16 : 20, color: '#161A1B', lineHeight: isMobile ? "19.2px" : "24px", fontFamily: 'Mulish', maxWidth: 400 }}>Fractional Investments</p>
                                    <p style={{ fontWeight: 400, marginTop: isMobile ? 10 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400 }}>You can buy fractions of the stocks of the companies in case you are short of budget or have a strategy in mind. With time you can keep building the fractions. </p>
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
                    Here’s how you can get hold of your International Fund investments in no time. Make investments, keep track, update and manage them, all at one place. 
                    </p>
                </div>
                <div style={{ marginTop: isMobile ? 32 : 56, display: 'flex', justifyContent: 'space-between', flexWrap: isMobile ? 'wrap' : '' }}>

                    <div style={{ marginLeft: 10, marginRight: 10, display: 'flex', flexDirection: isMobile ? 'row' : 'column', alignItems: isMobile ? 'center' : '' }}>
                        <div style={{ marginRight: isMobile ? 45 : 0 }}>
                            <p style={{ fontSize: isMobile ? 32 : 96, lineHeight: isMobile ? "38.4px" : "120%", fontWeight: 'bold', fontFamily: 'Mulish', color: "#2584F4", textAlign: 'center' }}>
                                1
                            </p>
                            <p style={{ minWidth: isMobile ? 109 : "", fontWeight: 600, marginTop: isMobile ? 8 : 16, fontSize: isMobile ? 18 : 20, color: '#161A1B', lineHeight: isMobile ? "21.6px" : "24px", fontFamily: 'Mulish', textAlign: 'center' }}>
                            Create/Log-in to Account
                            </p>
                        </div>
                        <div style={{ maxWidth: isMobile ? "" : 284, marginTop: isMobile ? 0 : 32, border: "1px solid rgba(0, 0, 0, 0.15)", boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)", borderRadius: 15, }}>
                            <p style={{ fontWeight: 400, textAlign: "center", fontSize: isMobile ? 10 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', margin: isMobile ? "16px" : '24px 24px 52px 24px' }}>
                            The first and foremost step is to create or Log-in to your investment account and calculate the risk tolerance/capacity. 
                            </p>
                        </div>
                    </div>

                    <div style={{ marginLeft: 10, marginRight: 10, display: 'flex', flexDirection: isMobile ? 'row' : 'column', alignItems: isMobile ? 'center' : '', marginTop: isMobile ? 32 : 0 }}>
                        <div style={{ marginRight: isMobile ? 45 : 0 }}>
                            <p style={{ fontSize: isMobile ? 32 : 96, lineHeight: isMobile ? "38.4px" : "120%", fontWeight: 'bold', fontFamily: 'Mulish', color: "#2584F4", textAlign: 'center' }}>
                                2
                            </p>
                            <p style={{ minWidth: isMobile ? 109 : "", fontWeight: 600, marginTop: isMobile ? 8 : 16, fontSize: isMobile ? 18 : 20, color: '#161A1B', lineHeight: isMobile ? "21.6px" : "24px", fontFamily: 'Mulish', textAlign: 'center' }}>
                            Fill Required Details
                            </p>
                        </div>
                        <div style={{ maxWidth: isMobile ? "" : 284, marginTop: isMobile ? 0 : 32, border: "1px solid rgba(0, 0, 0, 0.15)", boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)", borderRadius: 15, }}>
                            <p style={{ fontWeight: 400, textAlign: "center", fontSize: isMobile ? 10 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', margin: isMobile ? "16px" : '24px 24px 52px 24px' }}>
                            Fill all the essential details and information required for you to invest in international funds.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginLeft: 10, marginRight: 10, display: 'flex', flexDirection: isMobile ? 'row' : 'column', alignItems: isMobile ? 'center' : '', marginTop: isMobile ? 32 : 0 }}>
                        <div style={{ marginRight: isMobile ? 45 : 0 }}>
                            <p style={{ fontSize: isMobile ? 32 : 96, lineHeight: isMobile ? "38.4px" : "120%", fontWeight: 'bold', fontFamily: 'Mulish', color: "#2584F4", textAlign: 'center' }}>
                                3
                            </p>
                            <p style={{ minWidth: isMobile ? 109 : "", fontWeight: 600, marginTop: isMobile ? 8 : 16, fontSize: isMobile ? 18 : 20, color: '#161A1B', lineHeight: isMobile ? "21.6px" : "24px", fontFamily: 'Mulish', textAlign: 'center' }}>
                            Complete KYC
                            </p>
                        </div>
                        <div style={{ maxWidth: isMobile ? "" : 284, marginTop: isMobile ? 0 : 32, border: "1px solid rgba(0, 0, 0, 0.15)", boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)", borderRadius: 15, }}>
                            <p style={{ fontWeight: 400, textAlign: "center", fontSize: isMobile ? 10 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', margin: isMobile ? "16px" : '24px 24px 52px 24px' }}>
                            The imperative step towards investment is to complete the KYC either offline or via e-KYC. The process usually does not take much time.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginLeft: 10, marginRight: 10, display: 'flex', flexDirection: isMobile ? 'row' : 'column', alignItems: isMobile ? 'center' : '', marginTop: isMobile ? 32 : 0 }}>
                        <div style={{ marginRight: isMobile ? 45 : 0 }}>
                            <p style={{ fontSize: isMobile ? 32 : 96, lineHeight: isMobile ? "38.4px" : "120%", fontWeight: 'bold', fontFamily: 'Mulish', color: "#2584F4", textAlign: 'center' }}>
                                4
                            </p>
                            <p style={{ minWidth: isMobile ? 109 : "", fontWeight: 600, marginTop: isMobile ? 8 : 16, fontSize: isMobile ? 18 : 20, color: '#161A1B', lineHeight: isMobile ? "21.6px" : "24px", fontFamily: 'Mulish', textAlign: 'center' }}>
                            Choose Investment
                            </p>
                        </div>
                        <div style={{ maxWidth: isMobile ? "" : 284, marginTop: isMobile ? 0 : 32, border: "1px solid rgba(0, 0, 0, 0.15)", boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)", borderRadius: 15, }}>
                            <p style={{ fontWeight: 400, textAlign: "center", fontSize: isMobile ? 10 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', margin: isMobile ? "16px" : '24px 24px 52px 24px' }}>
                            Select International Mutual Funds under the Equities based on the various factors like your financial goals, budget, risk capacity, etc. Finally, invest in the international funds via One-Time or SIP.
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
                    {faqCard('What are international equities?', 'International equity funds are the funds that purchase only stocks of companies based out of the United States. It is an opportunity for you as an investor to diversify your portfolios with a wide range of options.', 0)}
                </div>
                <div style={{ marginTop: isMobile ? 16 : 48 }}>
                    {faqCard('What are the basic rules or limitations for Indians to invest in international equity?', 'As per the rules of Reserve Bank of India (RBI), under the Liberalized Remittance Scheme (LRS), any resident of India may invest up to US $2,50,000 per year in global equity markets.', 1)}
                </div>
                <div style={{ marginTop: isMobile ? 16 : 48 }}>
                    {faqCard('How to choose international funds?', 'It’s advisable to invest in developed countries that are currently performing well and have a lower correlation to emerging markets like India. The U.S. is currently on a cycle of growth and the country’s markets have listed the best performing global companies such as Amazon, Facebook, and Netflix making it one of the best markets to invest in.', 2)}
                </div>
                <div style={{ marginTop: isMobile ? 16 : 48 }} >
                    {faqCard('What is currency trading?', 'Currency trading is when the investor buys and sells currency on the foreign exchange (or Forex) market with the intent of benefiting financially from the fluctuation in exchange rates.', 3)}
                </div>
                <div style={{ marginTop: isMobile ? 16 : 48 }} >
                    {faqCard('What are withholding taxes?', 'Countries generally impose withholding taxes on the dividends paid to foreign investors. Many countries including the U.S. offer a dollar-for-dollar tax credit for the amount withheld to avoid double taxation of those funds.', 4)}
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
            <InternationModal open={open} handleClose = {handleClose} />
            <LoginSignupModal open={loginOpen} handleClose={loginClose} />
        </div>

    );

}
export default Demat;