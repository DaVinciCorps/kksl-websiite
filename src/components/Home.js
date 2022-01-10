import React,{useState,useRef, useEffect} from 'react'
import { makeStyles, } from '@mui/styles';
import HeroSectionImage from '../images/HeroSection1.png'
import Bar from "../images/BarChart.png";
import Earth from "../images/Earth.png";
import Person from "../images/Person1.png";
import Equity from '../images/equity.png'
import Derivatives from '../images/derivative.png'
import MutualFund from '../images/mutualfunds.png'
import EquityImage from '../images/Group 626240.png'
import DerivateImage from '../images/Group 626241.png'
import CommodityImage from '../images/Group 626242.png'
import MutualFundImage from '../images/Group 626243.png'
import Trust1 from '../images/Trust1.png'
import Carbon from '../images/carbon_security.png'
import Codicon from '../images/codicon_sync.png'
import Arrow1 from '../images/Arrow 1 (1).png'
import Android from '../images/ic_baseline-phone-android.png'
import Iphone from '../images/fluent_phone-12-regular.png'
import Laptop from '../images/bx_bx-laptop.png';
import RightArrow from "../images/Vector (11).png";
import LeftArrow from "../images/Vector (12).png";
import Pattern from "../images/Pattern.png";
import Vector1 from "../images/Vector (13).png";
import Vector2 from "../images/Vector (14).png";
import useMediaQuery from '@mui/material/useMediaQuery';
import star from '../images/star.png'
import axios from 'axios';
import { url } from "./Helper";



const useStyles = makeStyles(() => ({
    imgDiv:{
        display: 'flex',
        width: 80,
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginRight: 20,
        borderRadius: "100%",
        minWidth: 80,
        ['@media (max-width:850px)']: {
            width: 40,
            height: 40,
            minWidth: 40,
        }
    },
    imgHead:{
        fontFamily: 'Rubik',
        fontSize: '40px',
        lineHeight: '150%',
        color: '#86BBF9',
        ['@media (max-width:850px)']: {
            marginTop: 16,
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "16.59px"
        }
    },
    imgText:{
        fontFamily: 'Rubik',
        fontSize: '16px',
        lineHeight: '28px',
        color: '#FFFFFF',
        ['@media (max-width:850px)']: {
            marginTop: 2,
            fontWeight: 400,
            fontSize: 10,
            lineHeight: "11.85px"
        }
    },
    img:{
        ['@media (max-width:850px)']: {
            width: 20,
            height: 20
        }
    }
    
    
}));

export default function Home() {
    const scrollRef = useRef();
    const isMobile = useMediaQuery('(max-width:850px)');
    const isTab = useMediaQuery('(max-width:1100px)')
    const is960 = useMediaQuery('(max-width:960px)')
    const isLarge = useMediaQuery('(max-width:1400px)');
    const classes = useStyles();
    const [side,setSide] = useState("Equity");
    const [data,setData] = useState({
        heading: "Equity",
        subHeading: `“The value of ownership in a business.”`,
        body: 'Our stronghold in the secondary market with our reliable relationship managers gives you complete autonomy over your investment choices. ',
        img: EquityImage
    });
    const [leftArrowActive,setLeftArrowActive] = useState(false);
    const [rightArrowActive,setRightArrowActive] = useState(true);
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        document.getElementById("cont").addEventListener("scroll",handleActiveArrows)
    })

    useEffect(()=>{
        axios({
            method: 'get',
            url: url + "review/",
        })
        .then(res => {
            console.log(res);
            setReviews(res.data);
        })
        .catch(err=> {
            console.log(err);
        })
    },[])
    
    const section1=()=>{
        return(
            <div style={{margin: 'auto', width: "100%", display: 'flex', justifyContent: 'center'}}>
            <div style={{marginTop:isMobile?40:is960?105: 185,overflowX: "hidden", marginLeft:isMobile?"6.2%":isTab?"7.4%": '14.4%', display: 'flex',maxWidth:isMobile?500: 1440,flexWrap:isMobile? 'wrap':'',marginRight: isMobile?"6.2%":'', }}>
                <div style={{display: 'flex', flexDirection: 'column',alignItems:isMobile? 'center': ''}}>
                    <p style={{fontFamily: 'Mulish', fontWeight: 'bold', fontSize: isMobile?28:isTab?"48px": 62, lineHeight:isMobile? "34px": '120%', color: "#161A1B",marginBottom: 25,  textAlign: isMobile?'center':'left',maxWidth: isMobile?231: "", width:isTab?"": 510 }}>Build Your Future With Investment</p>
                    <p style={{fontFamily: 'Mulish', fontWeight: 400, fontSize:isMobile?12: 16, lineHeight: "20px", color: "#161A1B", marginRight: isMobile?"6.2%":'',textAlign: isMobile?'center':'left'  }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas sed fermentum aliquet est.</p>
                    <button style={{marginBottom: 30,outline: 'none', border: 'none',width: 140, height:50, backgroundColor: '#2584F4', marginTop: 48, borderRadius: 8, cursor: 'pointer'}}>
                        <p style={{fontSize: 16,fontWeight: 700,fontFamily: 'Mulish', color: 'white'}}>
                            Try For Free
                        </p>
                    </button>
                </div>
                <div style={{marginLeft: isMobile?"-6.2%":'',marginRight: isMobile?"-6.2%":''}}>
                    <img src={HeroSectionImage} style={{ marginTop: isMobile? 47:0,width: isLarge?"100%":"" }} ></img>
                </div>
            </div>
            </div>
        )
    }

    const section2=()=>{

        const data = [
            {
                img: Bar,
                text: '$30B',
                para: "Digital Currency Exchanged"
            },
            {
                img: Person,
                text: '10M+',
                para: "Trusted Wallets Investor"
            },
            {
                img: Earth,
                text: '195',
                para: "Countries Supported"
            }
        ]

        return(
            <div style={{background: '#0953AA',display: 'flex', justifyContent: 'center'}}>
                <div style={{marginLeft:isMobile?"10.6%":isTab?"7.4%": '10.6%',paddingTop: 32, paddingBottom: 44, display: 'flex',marginRight:isMobile?"10.6%":isTab?"7.4%": "10.6%", justifyContent: 'space-between',maxWidth: isMobile?500:'',width: '100%' }}  >
                    {data.map(i=>
                            
                        <div style={{display: 'flex', flexWrap: isMobile?"wrap":'', maxWidth:isMobile? 78:""}}>
                            <div className={classes.imgDiv}>
                            <img src={i.img} alt="Bar" className={classes.img} />
                            </div>
                            <div>
                                <p className={classes.imgHead}>
                                    {i.text}
                                </p>
                                <p className={classes.imgText}>
                                    {i.para}
                                </p>
                            </div>
                        </div>
                    )}
                </div>  
            </div>
        )

    }

    const section3=()=>{
        
        const data1 = {
            heading: "Equity",
            subHeading: `“The value of ownership in a business.”`,
            body: 'Our stronghold in the secondary market with our reliable relationship managers gives you complete autonomy over your investment choices. ',
            img: EquityImage
        }
        const data2 = {
            heading: "Derivatives",
            subHeading: `"Wise men put their trust in ideas, not circumstances."`,
            body: 'To build a long-term direct fixed income portfolio, we identify diverse options for you to choose in the primary and secondary bond market',
            img: DerivateImage
        }
        const data3 = {
            heading: "Commodities",
            subHeading: `“Commodities tend to zig when the equity markets zag.”`,
            body: 'Enjoy transparent and low margin trades via fair price discovery in commodity future trades while witnessing the rise in participation and low counterparty risks with the evolving online trading.',
            img: CommodityImage
        }
        const data4 = {
            heading: "Mutual Fund",
            subHeading: `“Price is what you pay. Value is what you get.” `,
            body: 'Handpick the best values for your investments with a diverse set of options, professional management and flexibility via well regulated Mutual Funds.',
            img: MutualFundImage
        }
        const handleSide=(e)=>{
            setSide(e);
            if(e=='Equity'){
                setData(data1);
            }
            else if(e=='Derivatives'){
                setData(data2);
            }
            else if(e=='Commodities'){
                setData(data3);
            }
            else if(e=='Mutual Fund'){
                setData(data4);
            }
        }

        const sideTab=(img,text)=>{
            return(
                <div onClick={()=>{handleSide(text)}} style={{display: 'flex',flexDirection: 'column',justifyContent: 'space-between',  width:isMobile?156: 205, height: isMobile?84:155, borderRadius: 8, boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)', background:side==text? '#86BBF9':'#FFFFFF', cursor: 'pointer'}}>
                    <div style={{margin:isMobile?16: 24,display: 'flex',flexDirection: 'column',justifyContent: 'space-between', flex: 1, }}>
                        <img src={img} style={{width:isMobile?24: 40, height:isMobile?24: 40}}></img>
                        <p style={{fontFamily: 'Rubik', fontWeight: 500, fontSize: 18,lineHeight: '150%', color: '#161A1B',}}>{text}</p>
                    </div>
                </div>
            )
        }

        const midTab=(data)=>{
            return(
                <div style={{marginLeft: isMobile?0:"138px", display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <div>
                        {!isMobile && <p style={{color: '#161A1B', fontSize: 40,fontWeight: 'bold',fontFamily: "Mulish"}}>{data.heading}</p>}
                        <p style={{color: 'rgba(22, 26, 27, 0.7)', fontSize:isMobile?12: 16,fontWeight: 'bold',fontFamily: "Mulish", marginTop: 24, lineHeight:isMobile?"20px": "120%", maxWidth: 515}}>{data.subHeading}</p>
                        <p style={{color: '#161A1B', fontSize:isMobile?12: 16,fontFamily: "Mulish", lineHeight:isMobile?"20px": "26px",maxWidth: 515, marginTop: 5,letterSpacing: '0.005em'}}>{data.body}</p>
                    </div>
                        <img style={{   marginTop:isMobile?24:25, width:isMobile?"100%": "100%", maxWidth: 681}} src={data.img} />
                </div>
            )
        }

        return(
            <div style={{display: "flex",justifyContent: 'center'}}>
            <div style={{margin:isMobile?"48px 6.2%":isTab?"120px 7.4%": "120px 14.4%", maxWidth:isMobile?500: 1440,display:isMobile?"": 'flex',justifyContent: 'center'}}>
                {isMobile && <p style={{marginBottom: 24, fontFamily: 'Mulish', fontSize: 20, lineHeight: "24px",fontWeight: 700}}>{data.heading}</p>}
                <div style={{display: 'flex',flexWrap:isMobile?'wrap':"" }}>
                    <div style={{display: 'flex', flexDirection: isMobile? 'row':'column', flexWrap: isMobile?'wrap':'', justifyContent:isMobile?'space-between':''}}>
                        <div style={{marginBottom:isMobile?16: 24}}>
                            {sideTab(Equity, "Equity")}
                        </div>
                        <div style={{marginBottom:isMobile?16: 24}}>
                            {sideTab(Derivatives, "Derivatives")}
                        </div>
                        <div style={{marginBottom:isMobile?16: 24}}>
                            {sideTab(Equity, "Commodities")}
                        </div>
                        <div style={{marginBottom:isMobile?16: 24}}>
                            {sideTab(MutualFund, "Mutual Fund")}
                        </div>
                    </div>
                    <div>
                        {midTab(data)}
                    </div>
                </div>
            </div>
            </div>
        )
    }

    const section4=()=>{
        return (
            <div style={{backgroundColor: '#0953AA', backgroundImage: `url("/group8.png")`, backgroundRepeat: "no-repeat", backgroundPosition: "100% 0%", backgroundSize: isMobile?"25%":"", display: 'flex', justifyContent: 'center'}}>
                <div style={{marginLeft:isMobile?"6.2%":isTab?"7.4%": "14.4%", marginRight:isMobile?"6.2%":isTab?"7.4%": '14.4%', paddingTop:isMobile?48: 183, paddingBottom:isMobile?48: 137, display: 'flex', alignItems: 'end', flexWrap: isMobile?"wrap": '', maxWidth: isMobile?500: ''}}>
                    <div style={{marginTop: 10}}>
                        <p style={{fontFamily: 'Mulish',fontWeight: 'bold',fontSize:isMobile?20: 56,color: "white"}}>
                        Purpose driven with Trust
                        </p>
                        <p style={{fontFamily: 'Mulish',fontWeight: 400,fontSize:isMobile?12: 18,color: "white",marginTop: 26, maxWidth: 500,  lineHeight: "28px"}}>
                        “We invest your money like we do our own with utmost transparency in the process.”
                        </p>
                        <p style={{fontFamily: 'Mulish',fontWeight: 400,fontSize:isMobile?12: 18,color: "white", marginTop: 26, maxWidth: 500, lineHeight: "28px"}}>
                        Our forty years of legacy carrying unparalleled trust and transparency ensures the closest trading experience one can imagine. Our best in-class research and cutting edge featured platform ensures security in smooth functioning.
                        </p>
                    </div >
                    <img style={{marginLeft:isMobile?0: 44, width: "100%", maxWidth: 420,marginTop: isMobile?40:0,}} src={Trust1}></img>
                </div> 
            </div>
        )
    }

    const section5=()=>{


        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{ maxWidth:isMobile?500: 1440,padding: isMobile?"48px 6.2% 48px 6.2%":isTab?"160px 7.4% 120px 7.4%":"160px 14.4% 120px 14.4%",}}>
                
                <p style={{fontSize:isMobile?20: 36,color: '#161A1B', lineHeight:isMobile?"24px": "43.2px",fontWeight: 700}}>
                    Invest On the Go.
                </p>
                <div style={{marginTop:isMobile?16: 32, display: 'flex',justifyContent: 'space-between', alignItems: 'end', flexWrap: isMobile?'wrap':''}}>
                    <div >
                        <p style={{fontFamily: 'Mulish', fontWeight: 400,fontSize:isMobile?12: 16, lineHeight:isMobile?"18px": '26px', color: 'rgba(22, 26, 27, 0.7)', maxWidth: 504}}>
                        Gone are the days where you had to log on to your desktop to check for the current market trends or to track your investments. Now, enjoy all the benefits of a single platform on every device you own. Yes, we are there for you everywhere, anytime.
                        </p>
                        <div style={{marginTop:isMobile?24: 53, display: 'flex', alignItems: 'center'}}>
                            <img src={Carbon} style={{marginRight:isMobile?16: 62,width: 48, height: 48}} />
                            <div>
                                <p style={{fontFamily: 'Mulish', color: "#161A1B", fontSize:isMobile?14: 20, lineHeight:isMobile?"16.8px" :"120%"}}>
                                Stay in Control
                                </p>
                                <p style={{fontFamily: 'Mulish', color: "rgba(22, 26, 27, 0.7)", fontSize:isMobile?12: 16, lineHeight:isMobile?"16px": "26px", marginTop:isMobile?8: 16, maxWidth: 250}}>
                                Track your investments on all the devices you own. 
                                </p>
                            </div>
                        </div>
                        <div style={{marginTop:isMobile?16: 64, display: 'flex', alignItems: 'center'}}>
                            <img src={Codicon} style={{marginRight:isMobile?16: 62,width: 48, height: 48}} />
                            <div>
                                <p style={{fontFamily: 'Mulish', color: "#161A1B", fontSize: isMobile?14:20, lineHeight:isMobile?"16.8px": "120%"}}>
                                Prioritize your Goals 
                                </p>
                                <p style={{fontFamily: 'Mulish', color: "rgba(22, 26, 27, 0.7)", fontSize:isMobile?12: 16, lineHeight:isMobile?"16px": "26px", marginTop:isMobile?8: 16, maxWidth: 250}}>
                                Maintain your focus with our one-stop added benefits. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={{marginLeft: isMobile?0:30}}>
                        <div style={{marginTop:isMobile?32: 0,borderRadius: '0px 56px', backgroundColor: '#D8E9FD', display: 'flex',justifyContent: 'space-between',alignItems: 'center',  padding: isMobile?"21.67px 32.33px": "34.33px 43px 34.33px 67px"}}>
                            <img src={Android} style={{width: isMobile?40:"56px"}} />
                            <p style={{fontWeight: 600, fontFamily: 'Mulish', fontSize:isMobile?18: 24,lineHeight:isMobile?"21.6px": "28.8px", color: '#161A1B',marginLeft: 27.67, marginRight: 27}}>
                            Android App
                            </p>
                            <img src={Arrow1} />
                        </div>
                        <div style={{marginTop:isMobile?32: 40,borderRadius: '0px 56px', backgroundColor: '#C1F6E6', display: 'flex',justifyContent: 'space-between',alignItems: 'center',  padding: isMobile?"21.67px 32.33px": "34.33px 43px 34.33px 67px"}}>
                            <img src={Iphone} style={{width: isMobile?40:"56px"}}/>
                            <p style={{fontWeight: 600, fontFamily: 'Mulish', fontSize:isMobile?18: 24,lineHeight:isMobile?"21.6px": "28.8px", color: '#161A1B',marginLeft: 27.67, marginRight: 27}}>
                            IOS App
                            </p>
                            <img src={Arrow1} />
                        </div>
                        <div style={{marginTop:isMobile?32: 40,borderRadius: '0px 56px', backgroundColor: '#D8E9FD', display: 'flex',justifyContent: 'space-between',alignItems: 'center',  padding: isMobile?"21.67px 32.33px": "34.33px 43px 34.33px 67px"}}>
                            <img src={Laptop} style={{width: isMobile?40:"56px"}}/>
                            <p style={{fontWeight: 600, fontFamily: 'Mulish', fontSize:isMobile?18: 24,lineHeight:isMobile?"21.6px": "28.8px", color: '#161A1B',marginLeft: 27.67, marginRight: 27}}>
                            Web App
                            </p>
                            <img src={Arrow1} />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
    const handleActiveArrows=()=>{
        const div = document.getElementById("cont");
        const clientWidth  = div.clientWidth;
        const scrollLeft = div.scrollLeft;
        const scrollWidth = div.scrollWidth;
        if(scrollLeft==0){
            setLeftArrowActive(false);
        }
        else{
            setLeftArrowActive(true);
        }
        if(scrollWidth - scrollLeft == clientWidth){
            setRightArrowActive(false);
        }
        else{
            setRightArrowActive(true);
        }
    }
    const section6=()=>{

        const handleScroll=()=>{
            
            var dist;
            if(isMobile){
                // dist = 0.96*window.innerWidth;
                dist = 360
            }
            else{
                // dist = window.innerWidth;
                dist = 565
            }
            sideScroll('right',25,dist,30);
        }
        const handleScroll_left=()=>{
            var dist;
            if(isMobile){
                dist = 360;
            }
            else{
                dist = 565
            }
            sideScroll('left',25,dist,30);
        }
        function sideScroll(direction,speed,distance,step){
            var scrollAmount = 0;
            var slideTimer = setInterval(function(){
                if(direction == 'left'){
                    scrollRef.current.scrollLeft -= step;
                } else {
                    scrollRef.current.scrollLeft += step;
                }
                scrollAmount += step;
                if(scrollAmount >= distance){
                    window.clearInterval(slideTimer);
                }
                handleActiveArrows();
            }, speed);
            
        }
        
        const feedbackCard=(data,index)=>{
            return(
                <div id={`card-${index}`} style={{zIndex: 100,backgroundColor: "#E7F1FE",boxShadow: "0px 20px 26px rgba(54, 53, 53, 0.3)",borderRadius: 15, margin:isMobile?"96px 20px 40.88px 20px": "138px 120px 78px 25px",minWidth:isMobile?327: 420}}>
                    <div style={{margin: "0px 32px 32px 32px", }}>
                        <img src={data.image} style={{position: "relative", borderRadius: "100%",bottom: 56, width:'112px', height:'112px' }} />
                        <div style={{marginTop: -35, display:data.rating===1 ? '':'none',}}>
                            <img src={star} ></img>
                        </div>
                        <div style={{marginTop: -35, display:data.rating===2 ? '':'none', }}>
                            <img src={star} style={{paddingRight:'12px'}}></img> 
                            <img src={star} ></img>
                        </div>
                        <div style={{marginTop: -35, display:data.rating===3 ? '':'none', }}>
                            <img src={star} style={{paddingRight:'12px'}}></img> 
                            <img src={star} style={{paddingRight:'12px'}}></img>
                            <img src={star} ></img>
                        </div>
                        <div style={{marginTop: -35, display:data.rating===4 ? '':'none', }}>
                            <img src={star} style={{paddingRight:'12px'}}></img> 
                            <img src={star} style={{paddingRight:'12px'}}></img>
                            <img src={star} style={{paddingRight:'12px'}}></img>
                            <img src={star} ></img>
                        </div>
                        <div style={{marginTop: -35, display:data.rating===5 ? '':'none', }}>
                            <img src={star} style={{paddingRight:'12px'}}></img> 
                            <img src={star} style={{paddingRight:'12px'}}></img>
                            <img src={star} style={{paddingRight:'12px'}}></img>
                            <img src={star} style={{paddingRight:'12px'}}></img>
                            <img src={star} ></img>
                        </div>
                        <p style={{fontFamily: 'Mulish', fontSize: 12, lineHeight:isMobile?"20px": "24px", color: 'black',marginTop: 24, maxWidth:isMobile?263: 356,height:isMobile?80:73}}>
                            {data.content.substring(0,170)}{data.content.length>170?"...":''}
                        </p>
                        <p style={{fontFamily: 'Mulish', fontSize: 16,fontWeight: 700, lineHeight:isMobile?"20.8px": "24px", color: 'black',marginTop: 16}} >
                            {data.name}
                        </p>
                        <p style={{fontFamily: 'Mulish', fontSize:isMobile?12: 14,fontWeight: 500, lineHeight:isMobile?"15.06px": "21px", color: 'black',marginTop: isMobile?4:8}} >
                            {data.designation}
                        </p>
                    </div>
                </div>
            )
        }
        const leftInActive=()=>{
            return(
                <img onClick={handleScroll_left} src = {LeftArrow} style={{marginRight:isMobile?32: 40, cursor: "pointer"}}/>
            )
        }
        const leftActive=()=>{
            return(
                <img onClick={handleScroll_left} src = {RightArrow} style={{marginRight:isMobile?32: 40, cursor: "pointer", WebkitTransform: "scaleX(-1)",transform:"scaleX(-1)"}}/>
            )
        }
        const rightInActive=()=>{
            return(
                <img onClick={handleScroll} src = {LeftArrow} style={{ cursor: "pointer",WebkitTransform: "scaleX(-1)",transform:"scaleX(-1)"}}/>
            )
        }
        const rightActive=()=>{
            return(
                <img onClick={handleScroll} src = {RightArrow} style={{cursor: "pointer"}}/>
            )
        }

        return(
            <div style={{marginTop:isMobile?0: 0,  backgroundColor: '#F7F7F7', }}>
                <div style={{margin:isMobile?"0px 6.2% 0px 6.2%": "0px 0% 132px 7.2%",paddingTop:isMobile?40: 88, }}>
                    {!isMobile && <img src={Pattern} style={{position: 'absolute', marginTop: 447, left: 320}} />}
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <p style={{fontSize:isMobile?20: 36, lineHeight:isMobile?"25.1px": "45.18px", fontWeight: 'bold', fontFamily: 'Mulish',color: "#3C4856"}}>
                            What People Say About Us?
                        </p>
                        <p style={{fontSize:isMobile?12: 16,marginTop:isMobile?16: 24, lineHeight:isMobile?"20px": "26px", fontWeight: 400, fontFamily: 'Mulish',color: "rgba(0, 0, 0, 0.7)", maxWidth: 592, textAlign: 'center'}}>
                            With personalized support, qualitative research, and sound advice, we make investing easy for you.
                        </p>
                    </div>
                    <div ref={scrollRef} id="cont" style={{display: 'flex', overflowX:'auto',margin:isMobile? '0px -6.2%':0}}>
                        {reviews.map((i,index)=>
                            feedbackCard(i,index)    
                        )}
                    </div>
                    <div onScroll={handleActiveArrows} style={{display: 'flex',paddingBottom:isMobile?"56.88px": 132, justifyContent: 'end', marginRight:isMobile?"0px": "14.4%" }}>
                        
                        {leftArrowActive? leftActive():leftInActive()}
                        {rightArrowActive? rightActive(): rightInActive()}
                    </div>
                </div>
            </div>
        )
    }

    const section7=()=>{
        return(
            <React.Fragment>
                <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{ margin:isMobile?"48px 0px":isTab?"160px 7.4%": "160px 14.4%" ,maxWidth:isMobile?500: 1440, width: '100%'}}>
                <div style={{backgroundColor: '#0953AA', boxShadow: '0px 40px 92px -16px rgba(9, 83, 170, 0.3)', borderRadius: 8, padding:isMobile?"40px 6.2%": "80px 104px",}}>
                    <p style={{fontFamily: 'Mulish', fontWeight: 'bold', fontSize:isMobile?20: 48, lineHeight:isMobile?"24px": "57.6px", textAlign: 'center', color: 'white'}}> Let us send you offering</p>
                    <div style={{marginTop: 32, display: 'flex', justifyContent: 'center',flexWrap: isMobile?"wrap":''}}>
                        {/* <input style={{textAlign: 'center',flex: 1,background: "white", border: '1px solid #F1F1F6', borderRadius: 8, outline: 'none', padding:isMobile?"14px 38px": "18px 16px", fontSize: '16px', color: "#92929D"}} value={"email@gmail.com"}></input> */}
                        <a href="mailto:john@example.com? subject=Subject">
                            <button style={{backgroundColor: "#2584F4", marginLeft: 8,width:isMobile?145: 164, height:isMobile?48: 56, outline: 'none', border: 'none', borderRadius: 8, cursor: 'pointer', marginTop: isMobile?24:0}}> 
                                <p style={{fontSize: 16, fontFamily: 'Mulish', color: 'white',}}>
                                    Contact Us
                                </p>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            </div>
            </React.Fragment>
        )
    }

    return (
        <div className={classes.root}>
            {section1()}
            {section2()}
            {section3()}
            {section4()}
            <div>
                {!isMobile &&
                    <React.Fragment>
                        <img src={Vector1} style={{width :510,position: 'absolute', right: 0}} />
                        <img src={Vector2} style={{height :695, position: 'absolute', right: 0,}} />
                    </React.Fragment>
                }
                {section5()}
            </div>
            
            {section6()}
            {section7()}
        </div>
    )
}
