import React,{useRef} from 'react'
import { useHistory } from 'react-router';
import MasterImage from '../images/BlogHome/master.png'
import Blog1 from '../images/BlogHome/small1.png'
import Blog2 from '../images/BlogHome/small2.png'
import Blog3 from '../images/BlogHome/small3.png'
import Blog4 from '../images/BlogHome/small4.png'
import Arrow from '../images/BlogHome/arrow.png'
import Tutorial1 from '../images/BlogHome/tutorial1.png'
import Tutorial2 from '../images/BlogHome/tutorial2.png'
import Tutorial3 from '../images/BlogHome/tutorial3.png'
import Tutorial4 from '../images/BlogHome/tutorial4.png'
import Explainer1 from '../images/BlogHome/explainer1.png'
import Explainer2 from '../images/BlogHome/explainer2.png'
import Explainer3 from '../images/BlogHome/explainer3.png'
import Explainer4 from '../images/BlogHome/explainer4.png'
import useMediaQuery from '@mui/material/useMediaQuery'
import RightArrow from "../images/Vector (11).png";
import LeftArrow from "../images/Vector (12).png";


function createData(video, text){
    return {video, text};
}

const tutorial = [
    createData(
        Tutorial1,
        'Buy cheap, earn big'
    ),
    createData(
        Tutorial2,
        'More price transparency'
    ),
    createData(
        Tutorial3,
        'Meet long-term goals'
    ),
    createData(
        Tutorial2,
        'Enter the "ground floor" '
    ),
    createData(
        Tutorial1,
        'Buy cheap, earn big'
    ),
    createData(
        Tutorial2,
        'More price transparency'
    ),
]


const explainer = [
    createData(
        Explainer1,
        'More price transparency'
    ),
    createData(
        Explainer2,
        'Buy cheap, earn big'
    ),
    createData(
        Explainer3,
        'Meet long-term goals'
    ),
    createData(
        Explainer2,
        'More price transparency'
    ),
    createData(
        Explainer1,
        'Buy cheap, earn big'
    ),
    createData(
        Explainer2,
        'Meet long-term goals'
    ),
]


function BlogHome() {
    const history = useHistory();
    const scrollRef = useRef();
    const isMobile = useMediaQuery('(max-width:600px)');
    const isLarge = useMediaQuery('(max-width:1400px)');



    const handleScroll=()=>{
        var dist;
        if(isMobile){
            dist = 0.94*window.innerWidth;
        }
        else{
            dist = window.innerWidth;
        }
        sideScroll('right',25,dist,30);
    }
    const handleScroll_left=()=>{
        var dist;
        if(isMobile){
            dist = window.innerWidth;
        }
        else{
            dist = 0.9*window.innerWidth;
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
        }, speed);
    }



    const section1 = () => {
        return (
            <div style={{marginTop:isMobile?0:'88px', backgroundColor:'#F7F7F7',paddingLeft:'7.2%', paddingRight:'7.2%'}}>
                <div style={{paddingTop:'56px', fontFamily:'Mulish', fontSize:'36px', fontWeight:'bold', fontStyle:'normal', lineHeight:'120%', textAlign:isMobile?'center':''}}>
                    Blogs
                </div>
                <div style={{paddingTop:'40px', display:'flex', justifyContent:'space-between', paddingBottom:'56px', flexWrap:'wrap'}}>
                    <div style={{flex:1, paddingRight:16, display:isMobile?'none':''}}>
                        <img src={MasterImage} />
                        <div style={{width: 400, height: 315, background: 'white'}}>
                            
                        </div>
                    </div>
                    <div style={{flex:1, display:'flex', flexDirection:'column'}}>
                        <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', flexDirection:isMobile?'column':'row', alignItems:isMobile?'center':''}}>
                            <div style={{backgroundColor:'white', width:296, height:359, marginBottom:16}}>
                                <div style={{height:167}}>
                                    <img src={Blog1} width="100%"/>
                                </div>
                                <div style={{padding:16, paddingBottom:0, fontFamily:'Mulish', fontWeight:'bold', fontStyle:'normal', fontSize:'18px', lineHeight:'24px'}}>
                                    Meet long-term goals, More price transparency
                                </div>
                                <div style={{padding:16, paddingBottom:0, paddingTop:8, fontFamily:'Mulish', fontWeight:'normal', fontStyle:'normal', fontSize:'14px', lineHeight:'20px'}}>
                                    Laoreet senectus taciti felis quam class a pellentesque. Netus himenaeos diam litora...
                                </div>
                                <div style={{marginTop:12, display:'flex', alignItems:'center', justifyContent:'space-between',height:'48px'}}>
                                    <div style={{paddingLeft:20, fontFamily:'Mulish', fontSize:12, fontStyle:'normal', fontWeight:'normal', bottom:13}}>
                                        2 min read
                                    </div>
                                    <button style={{height:'48px', width:'48px', backgroundColor:'#2584F4', display:'flex', alignItems:'center', justifyContent:'center', border:0}}>
                                        <img src={Arrow} />
                                    </button>
                                </div>
                            </div>
                            <div style={{backgroundColor:'white', width:296, height:359, marginBottom:16}}>
                                <div style={{height:167}}>
                                    <img src={Blog2} width="100%"/>
                                </div>
                                <div style={{padding:16, paddingBottom:0, fontFamily:'Mulish', fontWeight:'bold', fontStyle:'normal', fontSize:'18px', lineHeight:'24px'}}>
                                Good listing gain for shares allocated to the investor.
                                </div>
                                <div style={{padding:16, paddingBottom:0, paddingTop:8, fontFamily:'Mulish', fontWeight:'normal', fontStyle:'normal', fontSize:'14px', lineHeight:'20px'}}>
                                Laoreet senectus taciti felis quam class a pellentesque. Netus himenaeos diam litora...
                                </div>
                                <div style={{marginTop:12, display:'flex', alignItems:'center', justifyContent:'space-between',height:'48px'}}>
                                    <div style={{paddingLeft:20, fontFamily:'Mulish', fontSize:12, fontStyle:'normal', fontWeight:'normal', bottom:13}}>
                                        2 min read
                                    </div>
                                    <button style={{height:'48px', width:'48px', backgroundColor:'#2584F4', display:'flex', alignItems:'center', justifyContent:'center', border:0}}>
                                        <img src={Arrow} />
                                    </button>
                                </div>
                            </div>
                            <div style={{backgroundColor:'white', width:296, height:359, marginBottom:16}}>
                                <div style={{height:167}}>
                                    <img src={Blog3} width="100%"/>
                                </div>
                                <div style={{padding:16, paddingBottom:0, fontFamily:'Mulish', fontWeight:'bold', fontStyle:'normal', fontSize:'18px', lineHeight:'24px'}}>
                                Enter the 'ground floor' of a company with high growth
                                </div>
                                <div style={{padding:16, paddingBottom:0, paddingTop:8, fontFamily:'Mulish', fontWeight:'normal', fontStyle:'normal', fontSize:'14px', lineHeight:'20px'}}>
                                Laoreet senectus taciti felis quam class a pellentesque. Netus himenaeos diam litora...
                                </div>
                                <div style={{marginTop:12, display:'flex', alignItems:'center', justifyContent:'space-between',height:'48px'}}>
                                    <div style={{paddingLeft:20, fontFamily:'Mulish', fontSize:12, fontStyle:'normal', fontWeight:'normal', bottom:13}}>
                                        2 min read
                                    </div>
                                    <button style={{height:'48px', width:'48px', backgroundColor:'#2584F4', display:'flex', alignItems:'center', justifyContent:'center', border:0}}>
                                        <img src={Arrow} />
                                    </button>
                                </div>
                            </div>
                            <div style={{backgroundColor:'white', width:296, height:359, marginBottom:16}}>
                                <div style={{height:167}}>
                                    <img src={Blog4} width="100%"/>
                                </div>
                                <div style={{padding:16, paddingBottom:0, fontFamily:'Mulish', fontWeight:'bold', fontStyle:'normal', fontSize:'18px', lineHeight:'24px'}}>
                                More price transparency. Buy cheap, earn big.
                                </div>
                                <div style={{padding:16, paddingBottom:0, paddingTop:8, fontFamily:'Mulish', fontWeight:'normal', fontStyle:'normal', fontSize:'14px', lineHeight:'20px'}}>
                                Laoreet senectus taciti felis quam class a pellentesque. Netus himenaeos diam litora...
                                </div>
                                <div style={{marginTop:12, display:'flex', alignItems:'center', justifyContent:'space-between',height:'48px'}}>
                                    <div style={{paddingLeft:20, fontFamily:'Mulish', fontSize:12, fontStyle:'normal', fontWeight:'normal', bottom:13}}>
                                        2 min read
                                    </div>
                                    <button style={{height:'48px', width:'48px', backgroundColor:'#2584F4', display:'flex', alignItems:'center', justifyContent:'center', border:0}}>
                                        <img src={Arrow} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div style={{alignSelf:'center', paddingTop:16, }}>
                            <button style={{width: isMobile?120:257,color: "#FFFFFF",height: isMobile?44: 56,borderRadius: 8,borderWidth: 2,fontFamily:'Poppins', fontSize:isMobile?14:18, lineHeight:'27px', fontStyle:'normal', fontWeight:'normal',borderColor: "#2584F4",backgroundColor: "#2584F4",display: 'flex',flexDirection: 'row',justifyContent: 'center',alignItems: "center",padding: '11 24',cursor: 'pointer'}}>
                                View All
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const section2 = () => {
        return (
            <div style={{paddingLeft:'7.2%', paddingRight:'7.2%', paddingTop:'80px', display:'flex', justifyContent:'space-around', paddingBottom:'80px', }}>
                <div style={{display:'flex', paddingTop:'66px', flexDirection:'column', alignItems:'center', paddingBottom:'66px'}}>
                    <div style={{fontStyle:'Mulish', fontStyle:'normal', fontWeight:'normal', fontSize:isMobile?'10px':'18px', lineHeight:'32px', color:'#1ECF9A'}}>
                        Lorem Ipsum
                    </div>
                    <div style={{paddingTop:16,fontStyle:'Mulish', fontStyle:'normal',fontWeight:isMobile?600:'bold', fontSize:isMobile?'10px':'32px', lineHeight:'32px'}}>
                        The Lorem Ipsum
                    </div>
                </div>
                <div style={{borderLeft:'1px solid rgba(0, 14, 28, 0.2)'}} />
                <div style={{display:'flex', paddingTop:'66px', flexDirection:'column', alignItems:'center', paddingBottom:'66px'}}>
                    <div style={{fontStyle:'Mulish', fontStyle:'normal', fontWeight:'normal', fontSize:isMobile?'10px':'18px', lineHeight:'32px', color:'#1ECF9A'}}>
                        Lorem Ipsum
                    </div>
                    <div style={{paddingTop:16,fontStyle:'Mulish', fontStyle:'normal',fontWeight:isMobile?600:'bold', fontSize:isMobile?'10px':'32px', lineHeight:'32px'}}>
                        Checkout our latest blogs
                    </div>
                </div>
                <div style={{borderLeft:'1px solid rgba(0, 14, 28, 0.2)'}} />
                <div style={{display:'flex', paddingTop:'66px', flexDirection:'column', alignItems:'center', paddingBottom:'66px'}}>
                    <div style={{fontStyle:'Mulish', fontStyle:'normal', fontWeight:'normal', fontSize:isMobile?'10px':'18px', lineHeight:'32px', color:'#1ECF9A'}}>
                        Lorem Ipsum
                    </div>
                    <div style={{paddingTop:16,fontStyle:'Mulish', fontStyle:'normal',fontWeight:isMobile?600:'bold', fontSize:isMobile?'10px':'32px', lineHeight:'32px'}}>
                        The Lorem Ipsum
                    </div>
                </div>
            </div>
        )
    }

    const section3 = () => {
        return (
            <div style={{paddingLeft:'7.2%', paddingRight:'7.2%', backgroundColor:'#F7F7F7', paddingTop:'56px', marginBottom:'160px', paddingBottom:'56px'}}>
                <div style={{fontFamily: 'Mulish',fontStyle: 'normal',fontWeight: 'bold', fontSize: isMobile?'20px':'36px',lineHeight: '120%',}}>
                    Tutorial Videos
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', margin: "0px -1.5%", postion: "relative", top: 300}}>
                    <div style={{width: 100, height: 100, background: 'black',borderRadius: 100, color: 'white'}}>
                            left
                    </div>
                    <div style={{width: 100, height: 100, background: 'black',borderRadius: 100, color: 'white'}}>
                            right
                    </div>
                </div>
                <div style={{paddingTop:'32px', display:'flex', flexDirection:'row', justifyContent:'space-between',overflow: 'auto', alignItems: isMobile? 'center':'' }}>
                    
                    {tutorial.map((tut)=> (
                        <div style={{display:'flex', flexDirection: isMobile?'':'column', marginRight:'16px'}}>
                            <div style={{height:isMobile?245:300, width: isMobile?327:400, borderRadius:'15px'}}><img src={tut.video} height="100%" width="100%"/></div>
                            <div style={{paddingTop:'24px', fontFamily:'Mulish', fontStyle:'normal', fontWeight:'normal', fontSize:'20px', lineHeight:'32px',display:isMobile?'none':''}}>{tut.text}</div>
                        </div>
                    ))}
                </div>
                <div style={{display: isMobile? 'flex': 'none', paddingTop:'32.88px',  justifyContent:'end' ,marginRight:isMobile?"0px": "14.4%", alignSelf:'end' }}>
                    <img  src = {LeftArrow} style={{marginRight:isMobile?32: 40, cursor: "pointer"}}/>
                    <img  src = {RightArrow} style={{cursor: "pointer"}} />
                </div>
                <div style={{fontFamily: 'Mulish',fontStyle: 'normal',fontWeight: 'bold', fontSize:isMobile?'20px': '36px',lineHeight: '120%', paddingTop:'80px'}}>
                    Explainer Videos
                </div>
                <div style={{paddingTop:'32px', display:'flex', flexDirection:'row', justifyContent:'space-between',overflow: 'auto', alignItems: isMobile? 'center':'' }}>
                    {explainer.map((tut)=> (
                        <div style={{display:'flex', flexDirection: isMobile?'':'column', marginRight:'16px'}}>
                            <div style={{height:isMobile?245:300, width: isMobile?327:400, borderRadius:'15px'}}><img src={tut.video} height="100%" width="100%"/></div>
                            <div style={{paddingTop:'24px', fontFamily:'Mulish', fontStyle:'normal', fontWeight:'normal', fontSize:'20px', lineHeight:'32px',display:isMobile?'none':''}}>{tut.text}</div>
                        </div>
                    ))}
                </div>
                <div style={{display: isMobile? 'flex': 'none', paddingTop:'32.88px',  justifyContent:'end' ,marginRight:isMobile?"0px": "14.4%", alignSelf:'end' }}>
                    <img  src = {LeftArrow} style={{marginRight:isMobile?32: 40, cursor: "pointer"}}/>
                    <img  src = {RightArrow} style={{cursor: "pointer"}} />
                </div>
            </div>
        )
    }

    return (
        <div style={{ }}>
            <div style={{}}>
                {section1()}
                {section2()}
                {section3()}
            </div>
        </div>
    )
}

export default BlogHome
