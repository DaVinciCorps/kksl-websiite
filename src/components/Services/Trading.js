import React, { useState } from 'react'
import Commodity from "../../images/commodity.svg";
import Equity from "../../images/equity.svg";
import Fno from "../../images/fno.svg";
import Currency from "../../images/currency.svg";
import Tick from "../../images/Debt/Tick.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useMediaQuery from '@mui/material/useMediaQuery';
import LoginSignupModal from '../LoginSignupModal';
import Expand from 'react-expand-animated';



function Trading() {
    const [val, setVal] = useState(0);
    const [selected, setSelected] = useState();
    const [selectedPara, setSelectedPara] = useState();
    const isMobile = useMediaQuery('(max-width:850px)');
    const isMac = useMediaQuery('(max-width:1200px)');
    const isTab = useMediaQuery('(max-width:1100px)');
    const is960 = useMediaQuery('(max-width:960px)');
    const [tabNo, setTabNo] = useState(0);
    const isLarge = useMediaQuery('(min-width:1440px)');
    const [loginOpen,setLoginOpen] = useState(false);
    const loginClose=()=>{
        setLoginOpen(false);
    }

    const heading = () => {
        return (
            <div style={{ maxWidth:isMobile?500: 1440, margin: isMobile ? "40px 6.2% 0px 6.2%" :is960?"88px 7.4% 0px 7.4%":isTab?"133px 7.4% 0px 7.4%": "133px 14.4% 0px 14.4%" }}>
                <p style={{ fontFamily: 'Mulish', fontSize: isMobile ? 24 : 48, lineHeight: isMobile ? "30.12px" : "57.2px", color: "#161A1B", fontWeight: 'bold', textAlign: 'center' }}>
                    Trading
                </p>
                <div style={{ width: "100%", display: 'flex', justifyContent: 'center', }}>
                    <p style={{ fontFamily: 'Mulish', fontSize: isMobile ? 12 : 16, lineHeight: isMobile ? "18px" : "26px", color: "rgba(22, 26, 27, 0.7)", fontWeight: 400, marginTop: 16, textAlign: 'center', maxWidth: 797 }}>
                        Fundamentally the exchange of goods and services between two entities, Trading is the base that constitutes all the core elements of all economic societies and financial activities. In financial markets, it refers to the buying and selling of securities, like the purchase of stock on the floor of the New York Stock Exchange (NYSE).
                    </p>
                </div>
            </div>
        )
    }

    const tabs = () => {
        const data = [
            {
                heading: 'Equity',
                content: 'With our team of experienced researchers and our belief in the ever growing Indian Economy, we make sure to invest your money to create wealth in the long term and also help you realise your short-term goals with strategic investments.',
                img: Equity
            },
            {
                heading: 'FnO',
                content: 'FnO, Futures and Options, represent derivatives of the stock market. They are traded in the share market and serve as a contract between two parties for trading a stock/index at a specific price at a future date.',
                img: Fno
            },
            {
                heading: 'Currency',
                content: ' The Currency market offers unmatched potential for profitable trading in any market condition or any stage of the business cycle, as  the global increase in trade and foreign investments has led to inter-connection of many national economies. ',
                img: Currency
            },
            {
                heading: "Commodity",
                content: 'A commodity market facilitates trading in various commodities. One of the best ways for investors as they can diversify their portfolios beyond traditional securities.',
                img: Commodity
            },

        ]
        const handleNavigate = (val) => {
            setVal(val);
            setTabNo(val);
        }
        const tabContent = (data) => {
            return (
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: isMobile ? "wrap-reverse" : "" }}>
                    <div style={{ padding: isMobile ? "16px 24px" : "44px 52px", boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.2), 0px 2px 10px rgba(0, 0, 0, 0.1)', marginTop: isMobile ? 16 : 0 }}>
                        <img src={data.img} style={{ width: "100%", }} alt="Data" />
                    </div>
                    <div style={{ marginLeft: isMobile ? 0 : 60 }}>
                        <p style={{ fontWeight: 'bold', fontSize: isMobile ? 20 : 36, color: '#161A1B', lineHeight: isMobile ? "24px" : "43.2px", textAlign: 'left', fontFamily: 'Mulish' }}>
                            {data.heading}
                        </p>
                        <p style={{ fontWeight: 400, marginTop: isMobile ? 16 : 24, fontSize: isMobile ? 12 : 16, color: 'rgba(22, 26, 27, 0.7)', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400 }}>
                            {data.content}
                        </p>
                    </div>
                </div>
            )
        }
        return (
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', maxWidth:isMobile?500: 1440, margin: isMobile ? "32px 10% 0px 10%" :isTab?"62px 7.4% 0px 7.4%": "62px 14.4% 0px 14.4%" }}>
                <div style={{ display: 'flex', margin: 'auto', }}>
                    <div style={{ cursor: 'pointer' }}>
                        <p onClick={() => { handleNavigate(0) }} style={{ color: val === 0 ? "#161A1B" : "rgba(22, 26, 27, 0.6)", fontWeight: val === 0 ? 'bold' : 400, margin: isMobile ? "0px 16px" : "0px 20px", fontFamily: 'Mulish', fontSize: isMobile ? 14 : 16, lineHeight: isMobile ? "17.7px" : "26px" }}>
                            Equity
                        </p>
                        {val === 0 &&
                            <div style={{ marginTop: isMobile ? 4 : 8, height: 4, backgroundColor: "#0953AA" }}></div>
                        }
                    </div>
                    <div style={{ marginRight: 0, cursor: 'pointer' }}>
                        <p onClick={() => { handleNavigate(1) }} style={{ color: val === 1 ? "#161A1B" : "rgba(22, 26, 27, 0.6)", fontWeight: val === 1 ? 'bold' : 400, margin: isMobile ? "0px 16px" : "0px 20px", fontFamily: 'Mulish', fontSize: isMobile ? 14 : 16, lineHeight: isMobile ? "17.7px" : "26px" }}>
                            FnO
                        </p>
                        {val === 1 &&
                            <div style={{ marginTop: isMobile ? 4 : 8, height: 4, backgroundColor: "#0953AA" }}></div>
                        }
                    </div>
                    <div style={{ marginRight: 0, cursor: 'pointer' }}>
                        <p onClick={() => { handleNavigate(2) }} style={{ color: val === 2 ? "#161A1B" : "rgba(22, 26, 27, 0.6)", fontWeight: val === 2 ? 'bold' : 400, margin: isMobile ? "0px 16px" : "0px 20px", fontFamily: 'Mulish', fontSize: isMobile ? 14 : 16, lineHeight: isMobile ? "17.7px" : "26px" }}>
                            Currency
                        </p>
                        {val === 2 &&
                            <div style={{ marginTop: isMobile ? 4 : 8, height: 4, backgroundColor: "#0953AA" }}></div>
                        }
                    </div>
                    <div style={{ marginRight: 0, cursor: 'pointer' }}>
                        <p onClick={() => { handleNavigate(3) }} style={{ color: val === 3 ? "#161A1B" : "rgba(22, 26, 27, 0.6)", fontWeight: val === 3 ? 'bold' : 400, margin: isMobile ? "0px 16px" : "0px 20px", fontFamily: 'Mulish', fontSize: isMobile ? 14 : 16, lineHeight: isMobile ? "17.7px" : "26px" }}>
                            Commodity
                        </p>
                        {val === 3 &&
                            <div style={{ marginTop: isMobile ? 4 : 8, height: 4, backgroundColor: "#0953AA" }}></div>
                        }
                    </div>


                </div>
                <div style={{ marginTop: isMobile ? 40 : 64, width: "100%" }}>
                    {tabContent(data[val])}
                </div>
            </div>
        )
    }

    const makeYourMove0 = () => {
        return (
            <div style={{ backgroundColor: '#F7F7F7', padding: isMobile ? "40px 6.2% 40px 6.2%" :isTab?"64px 7.4%  61px 7.4%": "64px 14.4%  61px 14.4%", marginTop: isMobile ? 48 : 160, display: 'flex', justifyContent:isMobile?'center': 'space-between', alignItems: isMac ? 'center' : '', flexWrap: isMobile ? "wrap-reverse" : '' }}>
                <div style={{ width: isMobile ? "100%" : isMac ? 380 : 500, height: isMobile ? 327 : isMac ? 380 : 500, backgroundColor: "#E5FAF5", display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: isMobile ? 28 : isMac ? 0 : 122, marginBottom: isMac ? 0 : 65, marginRight: isMobile ? 0 : 52 }}>
                    <div style={{ backgroundColor: "#B4EDDD", margin: isMobile ? "63.5px 29px" : isMac ? "55px 55px" : "90px 40px", width: isMobile ? "100%" : isMac ? 269 : 420, height: isMobile ? 200 : isMac ? 269 : 315 }}></div>
                </div>
                <div >
                    <p style={{ display:val==0?'':'none' ,marginLeft: isMobile ? 0 : 72, fontWeight: 'bold', marginTop: 0, fontSize: isMobile ? 20 : 36, color: '#161A1B', lineHeight: isMobile ? "24px" : "43.2px", fontFamily: 'Mulish' }}>Make your first move with confidence</p>
                    <p style={{ display:val==1?'':'none' ,marginLeft: isMobile ? 0 : 72, fontWeight: 'bold', marginTop: 0, fontSize: isMobile ? 20 : 36, color: '#161A1B', lineHeight: isMobile ? "24px" : "43.2px", fontFamily: 'Mulish' }}>The future depends on what you do today</p>
                    <p style={{ display:val==2?'':'none' ,marginLeft: isMobile ? 0 : 72, fontWeight: 'bold', marginTop: 0, fontSize: isMobile ? 20 : 36, color: '#161A1B', lineHeight: isMobile ? "24px" : "43.2px", fontFamily: 'Mulish' }}>Assessing probabilities, not certainties.</p>
                    <p style={{ display:val==3?'':'none' ,marginLeft: isMobile ? 0 : 72, fontWeight: 'bold', marginTop: 0, fontSize: isMobile ? 20 : 36, color: '#161A1B', lineHeight: isMobile ? "24px" : "43.2px", fontFamily: 'Mulish' }}>Time is the greatest commodity</p>
                    <div style={{ display: 'flex', marginTop: isMobile ? 24 : 48, justifyContent: 'space-between' }}>
                        <div >
                            <div style={{ display: 'flex' }}>
                                <div>
                                    <img style={{ width: isMobile ? 20 : 44, height: isMobile ? 20 : 44 }} src={Tick} alt="Tick" />
                                </div>
                                <div style={{ marginLeft: isMobile ? 14 : 28 }}>
                                    <p style={{ display:val==0?'':'none' ,fontWeight: 700, fontSize: isMobile ? 16 : 20, color: '#161A1B', lineHeight: isMobile ? "19.2px" : "24px", fontFamily: 'Mulish', maxWidth: 400 }}>Get Real-Time Updates</p>
                                    <p style={{ display:val==1?'':'none' ,fontWeight: 700, fontSize: isMobile ? 16 : 20, color: '#161A1B', lineHeight: isMobile ? "19.2px" : "24px", fontFamily: 'Mulish', maxWidth: 400 }}>Margin and Leverage</p>
                                    <p style={{ display:val==2?'':'none' ,fontWeight: 700, fontSize: isMobile ? 16 : 20, color: '#161A1B', lineHeight: isMobile ? "19.2px" : "24px", fontFamily: 'Mulish', maxWidth: 400 }}>Lower Transaction Cost and Margin</p>
                                    <p style={{ display:val==3?'':'none' ,fontWeight: 700, fontSize: isMobile ? 16 : 20, color: '#161A1B', lineHeight: isMobile ? "19.2px" : "24px", fontFamily: 'Mulish', maxWidth: 400 }}>Diversification</p>
                                    
                                    <p style={{ display:val==0?'':'none' ,fontWeight: 400, marginTop: isMobile ? 10 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400 }}>
                                        Get real-time updates about the performance of all the stocks out there. Instant gratification is one of the advantages of online trading.
                                    </p>
                                    <p style={{ display:val==1?'':'none' ,fontWeight: 400, marginTop: isMobile ? 10 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400 }}>
                                        Unlike buying equity, one need not pay the entirety to buy futures. One needs to pay only a percentage of the total contract value to buy or sell in futures (margin).
                                    </p>
                                    <p style={{ display:val==2?'':'none' ,fontWeight: 400, marginTop: isMobile ? 10 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400 }}>
                                        Not only is the stamp duty on the products that get traded on exchange low, the margin also usually lies in the range of 2.5-5% depending on the currency pair.
                                    </p>
                                    <p style={{ display:val==3?'':'none' ,fontWeight: 400, marginTop: isMobile ? 10 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400 }}>
                                        Commodity returns have a low correlation to returns from other assets like stocks. As an individual asset class, raw materials, commodities can be considered to diversify the investment portfolio.
                                    </p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', marginTop: 32 }}>
                                <div>
                                    <img style={{ width: isMobile ? 20 : 44, height: isMobile ? 20 : 44 }} src={Tick} alt="Tick" />
                                </div>
                                <div style={{ marginLeft: isMobile ? 14 : 28 }}>
                                    <p style={{ display:val==0?'':'none' ,fontWeight: 700, fontSize: isMobile ? 16 : 20, color: '#161A1B', lineHeight: isMobile ? "19.2px" : "24px", fontFamily: 'Mulish', maxWidth: 400 }}>Earn Dividends</p>
                                    <p style={{ display:val==1?'':'none' ,fontWeight: 700, fontSize: isMobile ? 16 : 20, color: '#161A1B', lineHeight: isMobile ? "19.2px" : "24px", fontFamily: 'Mulish', maxWidth: 400 }}>Flexibility in Expiration</p>
                                    <p style={{ display:val==2?'':'none' ,fontWeight: 700, fontSize: isMobile ? 16 : 20, color: '#161A1B', lineHeight: isMobile ? "19.2px" : "24px", fontFamily: 'Mulish', maxWidth: 400 }}>Higher Leverage</p>
                                    <p style={{ display:val==3?'':'none' ,fontWeight: 700, fontSize: isMobile ? 16 : 20, color: '#161A1B', lineHeight: isMobile ? "19.2px" : "24px", fontFamily: 'Mulish', maxWidth: 400 }}>Protection Against Inflation</p>


                                    <p style={{ display:val==0?'':'none' ,fontWeight: 400, marginTop: isMobile ? 10 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400 }}>Investing your money wisely in the stock market is the perfect way to earn intelligent returns.</p>
                                    <p style={{ display:val==1?'':'none' ,fontWeight: 400, marginTop: isMobile ? 10 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400 }}>Like all derivatives products, Futures and options have the shelf life in the form of an official expiration date. Upon expiry, a contract is taken off the board and becomes untradable.</p>
                                    <p style={{ display:val==2?'':'none' ,fontWeight: 400, marginTop: isMobile ? 10 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400 }}>Since the margin is low, leverage can go as high as one may imagine (even 30-40x at times).</p>
                                    <p style={{ display:val==3?'':'none' ,fontWeight: 400, marginTop: isMobile ? 10 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400 }}>Their prices tend to rise during periods of high demand, which helps maintain the purchasing power parity.</p>

                                </div>
                            </div>
                            <div style={{ display: 'flex', marginTop: 32 }}>
                                <div>
                                    <img style={{ width: isMobile ? 20 : 44, height: isMobile ? 20 : 44 }} src={Tick} alt="Tick" />
                                </div>
                                <div style={{ marginLeft: isMobile ? 14 : 28 }}>
                                    <p style={{ display:val==0?'':'none' ,fontWeight: 700, fontSize: isMobile ? 16 : 20, color: '#161A1B', lineHeight: isMobile ? "19.2px" : "24px", fontFamily: 'Mulish', maxWidth: 400 }}>Remove the Middleman</p>
                                    <p style={{ display:val==1?'':'none' ,fontWeight: 700, fontSize: isMobile ? 16 : 20, color: '#161A1B', lineHeight: isMobile ? "19.2px" : "24px", fontFamily: 'Mulish', maxWidth: 400 }}>Market is open to Investors</p>
                                    <p style={{ display:val==2?'':'none' ,fontWeight: 700, fontSize: isMobile ? 16 : 20, color: '#161A1B', lineHeight: isMobile ? "19.2px" : "24px", fontFamily: 'Mulish', maxWidth: 400 }}>Longer Trading Hours</p>
                                    <p style={{ display:val==3?'':'none' ,fontWeight: 700, fontSize: isMobile ? 16 : 20, color: '#161A1B', lineHeight: isMobile ? "19.2px" : "24px", fontFamily: 'Mulish', maxWidth: 400 }}>Complete Transparency</p>


                                    <p style={{  display:val==0?'':'none' ,fontWeight: 400, marginTop: isMobile ? 12 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400 }}>A middleman can add a great deal of cost to trade, since it is a complex process.</p>
                                    <p style={{  display:val==1?'':'none' ,fontWeight: 400, marginTop: isMobile ? 12 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400 }}>Futures contracts are useful for risk-tolerant investors as they get to participate in markets they would otherwise not have access to.</p>
                                    <p style={{  display:val==2?'':'none' ,fontWeight: 400, marginTop: isMobile ? 12 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400 }}>The market is open from 9 am to 5 pm, thus one gets more time to react and trade as per various currency pairs.</p>
                                    <p style={{  display:val==3?'':'none' ,fontWeight: 400, marginTop: isMobile ? 12 : 24, fontSize: isMobile ? 12 : 16, color: '#161A1B', lineHeight: isMobile ? "18px" : "26px", fontFamily: 'Mulish', maxWidth: 400 }}>Trades in commodities are now conducted on an electronic trading platform accessible to all participants in the market.</p>

                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: isMobile ? "center" : "" }}>
                                <button onClick={()=>{setLoginOpen(true)}} style={{ marginTop: isMobile ? 24 : 66, marginLeft: isMobile ? "0" : 72, width: isMobile ? 120 : 257, height: isMobile ? 44 : 56, backgroundColor: '#2584F4', color: 'white', fontSize: isMobile ? 14 : 18, outline: 'none', border: 'none', borderRadius: 8, cursor: 'pointer' }}>
                                    Get Started
                                </button>
                            </div>
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
                <div style={{ display:val==0?'':'none',marginTop: isMobile ? 24 : 48 }}  >
                    {faqCard('What is equity?', 'Equity is a stock or share or any other security that represents an ownership interest in a company. Hence when you own a company’s share, you are a part owner of that company. ', 0)}
                </div>
                <div style={{ display:val==1?'':'none',marginTop: isMobile ? 24 : 48 }}  >
                    {faqCard('What are Derivatives?', 'Derivative implies that it has no independent value, its value is entirely derived from the value of the underlying asset.', 0)}
                </div>
                <div style={{ display:val==2?'':'none',marginTop: isMobile ? 24 : 48 }}  >
                    {faqCard('What is currency trading?', 'Currency Trading fundamentally is the simultaneous buying and selling of one currency against other. For example, USD vs INR.', 0)}
                </div>
                <div style={{ display:val==3?'':'none',marginTop: isMobile ? 24 : 48 }}  >
                    {faqCard(' What is a commodity? ', 'A commodity is a basic good used in commerce/finance that is interchangeable with other goods of the same type. Conventional examples of commodities include grains, gold, oil, and natural gas. ', 0)}
                </div>



                <div style={{ display:val==0?'':'none',marginTop: isMobile ? 16 : 48 }}>
                    {faqCard('What is an equity fund?', 'It is a type of mutual fund that buys shares of companies in the stock market. The goal of an equity fund is to invest in businesses that will grow, thereby increasing the value of the fund over time.', 1)}
                </div>
                <div style={{ display:val==1?'':'none',marginTop: isMobile ? 16 : 48 }}>
                    {faqCard('What is a Futures Contract?', 'Futures Contract means a legally binding agreement for buying and selling of standardized financial instruments or physical commodities (underlying security) on a future date.', 1)}
                </div>
                <div style={{ display:val==2?'':'none',marginTop: isMobile ? 16 : 48 }}>
                    {faqCard('Who is eligible to trade in Currency Derivatives?', 'All Indians residing in India, as defined in section 2(v) of the Foreign Exchange Management Act, 1999 (FEMA, Act 42 of 1999) are eligible to trade in the Currency Derivatives segment.', 1)}
                </div>
                <div style={{ display:val==3?'':'none',marginTop: isMobile ? 16 : 48 }}>
                    {faqCard('What is the cash price of a commodity?', 'The spot or cash price of a commodity is the actual amount of money exchanged when the commodities are purchased.', 1)}
                </div>




                <div style={{ display:val==0?'':'none',marginTop: isMobile ? 16 : 48 }}>
                    {faqCard('How can I begin investing in equities?', 'You can open a demat account with a broker firm to invest in the stock market. You can even approach a financial advisor who will guide you on what to buy, and then purchase the funds for you. Another option is to purchase/use equity funds from a fund house directly.', 2)}
                </div>
                <div style={{ display:val==1?'':'none',marginTop: isMobile ? 16 : 48 }}>
                    {faqCard('What is an Option contract?', 'Options Contract gives the buyer/holder of the contract the right to buy/sell the underlying asset at a pre-planned price within or at the end of a specified period.', 2)}
                </div>
                <div style={{ display:val==2?'':'none',marginTop: isMobile ? 16 : 48 }}>
                    {faqCard('What is Exchange Traded Currency Futures and Options? ', 'Exchange Traded Currency Futures and Options is like any other derivatives contract (like NIFTY), which gets traded having expiry date and contract size.', 2)}
                </div>
                <div style={{ display:val==3?'':'none',marginTop: isMobile ? 16 : 48 }}>
                    {faqCard('What are actuals? ', 'Actuals are the physical commodities being bought and sold.', 2)}
                </div>




                <div style={{ display:val==0?'':'none',marginTop: isMobile ? 16 : 48 }} >
                    {faqCard('What are the risks of investing in equities?', 'The biggest risk of investing in equities is that the price of your holding can fall anytime. Naturally, if you sell at that time, you incur a loss. However, if you are a long term investor, this risk becomes lower. ', 3)}
                </div>
                <div style={{ display:val==1?'':'none',marginTop: isMobile ? 16 : 48 }} >
                    {faqCard('Can I trade on options of any stock or Index?', 'No, exchanges select companies and Indexes whose Options can be traded on. Thus, the options of new companies or Indexes are allowed to trade from time to time.', 3)}
                </div>
                <div style={{ display:val==2?'':'none',marginTop: isMobile ? 16 : 48 }} >
                    {faqCard('How is Currency Futures trading different from Equity Derivatives trading?', 'Equities Derivatives trading allows you to trade in Stocks and Index whereas Currency Derivatives trading allow you to trade in currencies.', 3)}
                </div>
                <div style={{ display:val==3?'':'none',marginTop: isMobile ? 16 : 48 }} >
                    {faqCard('What is a Future Contract?', 'Futures are exchanged or traded contracts for buying and selling of standardized financial instruments or physical commodities for delivery on a specified future date at an agreed price.', 3)}
                </div>




                <div style={{ display:val==0?'':'none',marginTop: isMobile ? 16 : 48 }} >
                    {faqCard('How can I lower equity risks?', 'Answer', 4)}
                </div>
                <div style={{ display:val==1?'':'none',marginTop: isMobile ? 16 : 48 }} >
                    {faqCard('How can I lower equity risks?', 'Answer', 4)}
                </div>
                <div style={{ display:val==2?'':'none',marginTop: isMobile ? 16 : 48 }} >
                    {faqCard('How can I lower equity risks?', 'Answer', 4)}
                </div>
                <div style={{ display:val==3?'':'none',marginTop: isMobile ? 16 : 48 }} >
                    {faqCard('How can I lower equity risks?', 'Answer', 4)}
                </div>
            </div>
        )
    }

    const openAccount = () => {
        return (
            <div style={{ maxWidth: 1024, margin: isLarge ? "160px auto" :isTab?"160px 7.4% 160px 7.4%": '160px 14.2% 160px 14.2%' }}>
                <div style={{borderRadius: 15, backgroundImage: `url("/Frame.png")`, display: 'flex', justifyContent: 'center', backgroundRepeat: 'no-repeat' }}>
                    <div style={{ margin: "60px 25px 120px 25px", }}>
                        <p style={{ fontWeight: 700, marginTop: 0, fontSize: 28, color: '#161A1B', lineHeight: "36.4px", fontFamily: 'Mulish', maxWidth: 371 }}>
                            Open a free Demat account on KKsecurties
                        </p>
                        <p style={{ fontWeight: 400, marginTop: 16, fontSize: 16, color: '#161A1B', lineHeight: "26px", fontFamily: 'Mulish', maxWidth: 477 }}>
                        What are you waiting for?! <br />Go on and open your free Demat account at KK Securities to enjoy seamless trading and added benefits. 
                        </p>
                        <button onClick={()=>{setLoginOpen(true)}} style={{ marginTop: 40, width: 240, height: 56, backgroundColor: '#2584F4', color: 'white', fontSize: 18, outline: 'none', border: 'none', borderRadius: 8, cursor: 'pointer' }}>
                            Open Account Now
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div style={{display: isMobile? 'flex':'', flexDirection: 'column', alignItems: 'center'}}>
            {heading()}
            {tabs()}
            {makeYourMove0()}
            {faq()}
            {!isMobile && openAccount()}
            <LoginSignupModal open={loginOpen} handleClose={loginClose} />
        </div>
    )
}

export default Trading
