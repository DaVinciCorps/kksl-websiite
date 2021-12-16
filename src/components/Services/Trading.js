import React,{useState} from 'react'
import Commodity from "../../images/Services/Group 28.png";
import Equity from "../../images/Services/Group 2373.png";
import Fno from "../../images/Services/Group 2703.png";
import Currency from "../../images/Services/Group 2704.png";
import Tick from "../../images/Debt/Tick.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useMediaQuery from '@mui/material/useMediaQuery';



function Trading() {
    const [val,setVal] = useState(0);
    const [selected,setSelected] = useState();
    const isMobile = useMediaQuery('(max-width:600px)');
    const isMac = useMediaQuery('(max-width:1200px)');
    const isLarge = useMediaQuery('(min-width:1440px)');
    const heading=()=>{
        return  (
            <div style={{ maxWidth: 1440, margin:isMobile?"40px 6.2% 0px 6.2%": "88px 14.4% 0px 14.4%"}}>
                <p style={{fontFamily: 'Mulish', fontSize:isMobile?24: 48, lineHeight:isMobile?"30.12px": "57.2px",color: "#161A1B", fontWeight: 'bold', textAlign: 'center'}}>
                    Trading
                </p>
                <div style={{width: "100%", display: 'flex', justifyContent: 'center', }}>
                    <p style={{fontFamily: 'Mulish', fontSize:isMobile?12: 16, lineHeight:isMobile?"18px": "26px",color: "rgba(22, 26, 27, 0.7)", fontWeight: 400, marginTop: 16, textAlign: 'center', maxWidth: 797}}>
                        Fundamentally the exchange of goods and services between two entities, Trading is the base that constitutes all the core elements of all economic societies and financial activities. In financial markets, it refers to the buying and selling of securities, like the purchase of stock on the floor of the New York Stock Exchange (NYSE).
                    </p>
                </div>
            </div>
        )
    }

    const tabs=()=>{
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
        const handleNavigate=(val)=>{
            setVal(val);
        }
        const tabContent = (data) =>{
            return(
                <div style={{display: 'flex',alignItems: 'flex-start', justifyContent: 'space-between', flexWrap:isMobile? "wrap-reverse":""}}>
                    <div style={{padding:isMobile?"16px 24px": "44px 52px",boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.2), 0px 2px 10px rgba(0, 0, 0, 0.1)',marginTop: isMobile?16:0}}>
                        <img src={data.img} style={{width: "100%", }} alt="Data" />
                    </div>
                    <div style={{marginLeft:isMobile?0: 30}}>
                        <p style={{fontWeight: 'bold', fontSize:isMobile?20: 36, color: '#161A1B', lineHeight:isMobile?"24px": "43.2px", textAlign: 'left', fontFamily: 'Mulish'}}>
                            {data.heading}
                        </p>
                        <p style={{fontWeight: 400,marginTop:isMobile?16: 24,  fontSize:isMobile?12: 16, color: 'rgba(22, 26, 27, 0.7)', lineHeight:isMobile?"18px": "26px",fontFamily: 'Mulish', maxWidth: 400}}>
                            {data.content}
                        </p>
                    </div>
                </div>
            )
        }
        return(
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column',maxWidth: 1440, margin:isMobile?"32px 10% 0px 10%   ": "62px 14.4% 0px 14.4%" }}>
                <div style={{display: 'flex', margin: 'auto',}}>
                    <div style={{ cursor: 'pointer'}}>
                        <p  onClick={()=>{handleNavigate(0)}} style={{color: val===0? "#161A1B":"rgba(22, 26, 27, 0.6)",fontWeight: val===0?'bold':400,margin:isMobile?"0px 16px": "0px 20px", fontFamily: 'Mulish', fontSize:isMobile?14: 16, lineHeight:isMobile?"17.7px": "26px"}}>
                            Equity
                        </p>
                        {val === 0 &&  
                            <div style={{marginTop: isMobile?4:8, height: 4,backgroundColor: "#0953AA"}}></div>
                        }
                    </div>
                    <div style={{marginRight: 0, cursor: 'pointer'}}>
                        <p  onClick={()=>{handleNavigate(1)}} style={{color: val===1? "#161A1B":"rgba(22, 26, 27, 0.6)",fontWeight: val===1?'bold':400,margin:isMobile?"0px 16px": "0px 20px", fontFamily: 'Mulish', fontSize:isMobile?14: 16, lineHeight:isMobile?"17.7px": "26px" }}>
                            FnO
                        </p>
                        {val === 1 &&  
                            <div style={{marginTop:isMobile?4: 8, height: 4,backgroundColor: "#0953AA"}}></div>
                        }
                    </div>
                    <div style={{marginRight: 0, cursor: 'pointer'}}>
                        <p  onClick={()=>{handleNavigate(2)}} style={{color: val===2? "#161A1B":"rgba(22, 26, 27, 0.6)",fontWeight: val===2?'bold':400,margin:isMobile?"0px 16px": "0px 20px", fontFamily: 'Mulish', fontSize:isMobile?14: 16, lineHeight:isMobile?"17.7px": "26px"}}>
                            Currency
                        </p>
                        {val === 2 &&  
                            <div style={{marginTop: isMobile?4:8, height: 4,backgroundColor: "#0953AA"}}></div>
                        }
                    </div>
                    <div style={{marginRight:0, cursor: 'pointer'}}>
                        <p  onClick={()=>{handleNavigate(3)}} style={{color: val===3? "#161A1B":"rgba(22, 26, 27, 0.6)",fontWeight: val===3?'bold':400,margin:isMobile?"0px 16px": "0px 20px", fontFamily: 'Mulish', fontSize:isMobile?14: 16, lineHeight:isMobile?"17.7px": "26px"}}>
                            Commodity
                        </p>
                        {val === 3 &&  
                            <div style={{marginTop: isMobile?4:8, height: 4,backgroundColor: "#0953AA"}}></div>
                        }
                    </div>
                    
                    
                </div>
                <div style={{marginTop:isMobile?40: 64, width: "100%"}}>
                        {tabContent(data[val])}
                    </div>
            </div>
        )
    }

    const makeYourMove=()=>{
        return (
            <div style={{backgroundColor: '#F7F7F7', padding:isMobile?"40px 6.2% 40px 6.2%": "64px 14.4%  61px 14.4%", marginTop:isMobile?48: 160, display: 'flex', justifyContent: 'space-between',alignItems:isMac?'center':'', flexWrap: isMobile?"wrap-reverse":''}}>
                <div style={{width:isMobile?327:isMac?380: 500, height:isMobile?327:isMac?380: 500, backgroundColor: "#E5FAF5",display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: isMobile?28:isMac?0:122, marginBottom:isMac?0: 65, marginRight:isMobile?0: 52 }}>
                    <div style={{backgroundColor: "#B4EDDD",margin:isMobile?"63.5px 29px":isMac?"55px 55px":"90px 40px", width:isMobile?263:isMac?269: 420, height:isMobile?200:isMac?269: 315}}></div>
                </div>
                <div >
                    <p style={{marginLeft:isMobile?0: 72, fontWeight: 'bold',marginTop: 0,  fontSize:isMobile?20: 36, color: '#161A1B', lineHeight:isMobile?"24px": "43.2px",fontFamily: 'Mulish'}}>Make your first move with confidence</p>
                    <div style={{display: 'flex', marginTop:isMobile?24:48, justifyContent: 'space-between'}}>
                        <div >
                            <div style={{display: 'flex'}}>
                                <div>
                                    <img style={{width: isMobile?20:44, height: isMobile?20:44}} src={Tick} alt="Tick"/>
                                </div>
                                <div style={{marginLeft: isMobile?14:28}}>
                                    <p style={{fontWeight: 700,  fontSize:isMobile?16: 20, color: '#161A1B', lineHeight:isMobile?"19.2px": "24px",fontFamily: 'Mulish', maxWidth: 400}}>Margin and Leverage</p>
                                    <p style={{fontWeight: 400,marginTop:isMobile?10: 24,  fontSize:isMobile?12: 16, color: '#161A1B', lineHeight:isMobile?"18px": "26px",fontFamily: 'Mulish', maxWidth: 400}}>
                                    Unlike buying equity, one need not pay the entirety to buy futures. One needs to pay only a percentage of the total contract value to buy or sell in futures (margin).    
                                    </p>
                                </div>
                            </div>
                            <div style={{display: 'flex', marginTop: 32}}>
                                <div> 
                                    <img style={{width: isMobile?20:44, height: isMobile?20:44}} src={Tick} alt="Tick"/>
                                </div>
                                <div style={{marginLeft:isMobile?14: 28}}>
                                    <p style={{fontWeight: 700,  fontSize:isMobile?16: 20, color: '#161A1B', lineHeight:isMobile?"19.2px": "24px",fontFamily: 'Mulish', maxWidth: 400}}>Flexibility in Expiration</p>
                                    <p style={{fontWeight: 400,marginTop:isMobile?10: 24,  fontSize:isMobile?12: 16, color: '#161A1B', lineHeight:isMobile?"18px": "26px",fontFamily: 'Mulish', maxWidth: 400}}>Like all derivatives products, Futures and options have the shelf life in the form of an official expiration date. Upon expiry, a contract is taken off the board and becomes untradable.</p>
                                </div>
                            </div>
                            <div style={{display: 'flex', marginTop: 32}}>
                                <div>
                                    <img style={{width: isMobile?20:44, height: isMobile?20:44}} src={Tick} alt="Tick"/>
                                </div>
                                <div style={{marginLeft:isMobile?14: 28}}>
                                    <p style={{fontWeight: 700,  fontSize:isMobile?16: 20, color: '#161A1B', lineHeight:isMobile?"19.2px": "24px",fontFamily: 'Mulish', maxWidth: 400}}>Market is open to Investors</p>
                                    <p style={{fontWeight: 400,marginTop:isMobile?12: 24,  fontSize:isMobile?12: 16, color: '#161A1B', lineHeight: isMobile?"18px":"26px",fontFamily: 'Mulish', maxWidth: 400}}>Futures contracts are useful for risk-tolerant investors as they get to participate in markets they would otherwise not have access to.</p>
                                </div>
                            </div>
                            <div style={{display: 'flex', justifyContent: isMobile?"center":""}}>
                                <button style={{marginTop:isMobile?24: 66, marginLeft:isMobile?"0": 72, width:isMobile?120: 257, height:isMobile?44: 56, backgroundColor: '#2584F4', color: 'white', fontSize:isMobile?14: 18, outline: 'none', border: 'none', borderRadius: 8, cursor: 'pointer'}}>
                                    Get Started
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }

    const faq=()=>{
        const ques = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi massa lorem lacus, sed orci hendrerit?";
        const ans = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc velit quam sollicitudin augue non aliquet faucibus. At faucibus amet mattis nunc. Magnis augue cras massa bibendum massa in feugiat. Ullamcorper morbi eu id non interdum dictumst. At faucibus ut sit elit egestas vel, risus nibh amet. Facilisi faucibus a morbi id risus vel sed. Pellentesque vitae orci aliquet sed fringilla molestie. Vitae ipsum mattis amet nisl. Fringilla diam eu lectus nulla neque bibendum bibendum."
        const faqCard=(ques,ans,id)=>{
            return(
                <div style={{backgroundColor: '#F7F7F7',border: '1px solid #E0E0E0', borderRadius: 8, padding:isMobile?"12px": "24px 32px", display: 'flex'}} >
                    <div style={{marginRight:isMobile?10: 48, flex:1}}>
                        <p onClick={()=>{handleSelect(id)}} style={{fontWeight: 400,marginTop: 0,  fontSize:isMobile?12: 18, color: '#161A1B', lineHeight:isMobile?"18px": "24px",fontFamily: 'Mulish',cursor: 'pointer'}}>
                            {ques}
                        </p>
                        {selected === id &&
                            <p style={{fontWeight: 400 ,marginRight: isMobile?"-34px":0,fontSize:isMobile?12: 16, color: 'rgba(22, 26, 27, 0.6)', lineHeight:isMobile?"18px": "26px",fontFamily: 'Mulish', marginTop:isMobile?12: 25, }}>
                                {ans}
                            </p>
                        }
                    </div>
                    {selected !==id && 
                        <div style={{cursor: 'pointer'}} onClick={()=>{handleSelect(id)}}>
                            <KeyboardArrowDownIcon />
                        </div>
                    }
                    {selected === id && 
                        <div style={{cursor: 'pointer'}} onClick={()=>{handleSelect(id)}}>
                            <KeyboardArrowUpIcon />
                        </div>
                    }
                </div>
            )
        }

        const handleSelect=(e)=>{
            if(selected === e){
                setSelected();
            }
            else{
                setSelected(e);
            }
        }

        return(
            <div style={{maxWidth: 1440, margin:isMobile?"48px 6.2%": '160px 14.2% 0px 14.2%'}}>
                <p style={{fontWeight: 'bold',marginTop: 0,  fontSize:isMobile?20: 36, color: '#161A1B', lineHeight:isMobile?"24px": "43.2px",fontFamily: 'Mulish', textAlign: 'center'}}>
                    Frequently Asked Questions
                </p>
                <div style={{marginTop:isMobile?24: 48}}  >
                    {faqCard(ques,ans,0)}
                </div>
                <div style={{marginTop:isMobile?16: 48}}>
                    {faqCard(ques,ans,1)}
                </div>
                <div style={{marginTop:isMobile?16: 48}}>
                    {faqCard(ques,ans,2)}
                </div>
                <div style={{marginTop:isMobile?16: 48}} >
                    {faqCard(ques,ans,3)}
                </div>
                <div style={{marginTop:isMobile?16: 48}} >
                    {faqCard(ques,ans,4)}
                </div>
            </div>
        )
    }

    const openAccount=()=>{
        return(
            <div style={{maxWidth: 1024, margin:isLarge?"160px auto": '160px 14.2% 160px 14.2%'}}>
                <div style={{backgroundImage: `url("/Frame.png")`, display: 'flex', justifyContent: 'center', backgroundRepeat: 'no-repeat'}}>
                    <div style={{margin: "60px 25px 120px 25px",}}>
                        <p style={{fontWeight: 700,marginTop: 0,  fontSize: 28, color: '#161A1B', lineHeight: "36.4px",fontFamily: 'Mulish', maxWidth: 371}}>
                            Open a free Demat account on KKsecurties
                        </p>
                        <p style={{ fontWeight: 400,marginTop: 16,  fontSize: 16, color: '#161A1B', lineHeight: "26px",fontFamily: 'Mulish', maxWidth: 477}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque faucibus elementum nuncegestas ut condimentum lobortis sed. Et auctor neque ut sit morbi ornare massa elit mauris.
                        </p>
                        <button style={{marginTop: 40,width: 240, height: 56, backgroundColor: '#2584F4', color: 'white', fontSize: 18, outline: 'none', border: 'none', borderRadius: 8, cursor: 'pointer'}}>
                            Open Account Now
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div style={{}}>
            {heading()}
            {tabs()}
            {makeYourMove()}
            {faq()}
            {!isMobile && openAccount()}
        </div>
    )
}

export default Trading
