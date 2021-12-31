import React from 'react'
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
        Tutorial4,
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
        Explainer4,
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

    const section1 = () => {
        return (
            <div style={{marginTop:'88px', backgroundColor:'#F7F7F7',paddingLeft:'7.2%', paddingRight:'7.2%'}}>
                <div style={{paddingTop:'56px', fontFamily:'Mulish', fontSize:'36px', fontWeight:'bold', fontStyle:'normal', lineHeight:'120%'}}>
                    Blogs
                </div>
                <div style={{paddingTop:'40px', display:'flex', justifyContent:'space-between', paddingBottom:'56px'}}>
                    <div style={{flex:1, paddingRight:16}}>
                        <img src={MasterImage} />
                    </div>
                    <div style={{flex:1, display:'flex', flexDirection:'column' }}>
                        <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap',}}>
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
                            <button style={{width: 257,color: "#FFFFFF",height: 56,borderRadius: 8,borderWidth: 2,fontFamily:'Poppins', fontSize:18, lineHeight:'27px', fontStyle:'normal', fontWeight:'normal',borderColor: "#2584F4",backgroundColor: "#2584F4",display: 'flex',flexDirection: 'row',justifyContent: 'center',alignItems: "center",padding: '11 24',cursor: 'pointer'}}>
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
            <div style={{paddingLeft:'7.2%', paddingRight:'7.2%', paddingTop:'80px', display:'flex', justifyContent:'space-around', paddingBottom:'80px', flexWrap:'wrap'}}>
                <div style={{display:'flex', paddingTop:'66px', flexDirection:'column', alignItems:'center', paddingBottom:'66px'}}>
                    <div style={{fontStyle:'Mulish', fontStyle:'normal', fontWeight:'normal', fontSize:'18px', lineHeight:'32px', color:'#1ECF9A'}}>
                        Lorem Ipsum
                    </div>
                    <div style={{paddingTop:16,fontStyle:'Mulish', fontStyle:'normal',fontWeight:'bold', fontSize:'32px', lineHeight:'32px'}}>
                        The Lorem Ipsum
                    </div>
                </div>
                <div style={{borderLeft:'1px solid rgba(0, 14, 28, 0.2)'}} />
                <div style={{display:'flex', paddingTop:'66px', flexDirection:'column', alignItems:'center', paddingBottom:'66px'}}>
                    <div style={{fontStyle:'Mulish', fontStyle:'normal', fontWeight:'normal', fontSize:'18px', lineHeight:'32px', color:'#1ECF9A'}}>
                        Lorem Ipsum
                    </div>
                    <div style={{paddingTop:16,fontStyle:'Mulish', fontStyle:'normal',fontWeight:'bold', fontSize:'32px', lineHeight:'32px'}}>
                        The Lorem Ipsum
                    </div>
                </div>
                <div style={{borderLeft:'1px solid rgba(0, 14, 28, 0.2)'}} />
                <div style={{display:'flex', paddingTop:'66px', flexDirection:'column', alignItems:'center', paddingBottom:'66px'}}>
                    <div style={{fontStyle:'Mulish', fontStyle:'normal', fontWeight:'normal', fontSize:'18px', lineHeight:'32px', color:'#1ECF9A'}}>
                        Lorem Ipsum
                    </div>
                    <div style={{paddingTop:16,fontStyle:'Mulish', fontStyle:'normal',fontWeight:'bold', fontSize:'32px', lineHeight:'32px'}}>
                        The Lorem Ipsum
                    </div>
                </div>
            </div>
        )
    }

    const section3 = () => {
        return (
            <div style={{paddingLeft:'7.2%', paddingRight:'7.2%', backgroundColor:'#F7F7F7', paddingTop:'56px', marginBottom:'160px', paddingBottom:'56px'}}>
                <div style={{fontFamily: 'Mulish',fontStyle: 'normal',fontWeight: 'bold', fontSize: '36px',lineHeight: '120%',}}>
                    Tutorial Videos
                </div>
                <div style={{paddingTop:'32px', display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
                    {tutorial.map((tut)=> (
                        <div style={{display:'flex', flexDirection:'column', marginRight:'16px'}}>
                            <div style={{height:300, width:400, borderRadius:'15px'}}><img src={tut.video}/></div>
                            <div style={{paddingTop:'24px', fontFamily:'Mulish', fontStyle:'normal', fontWeight:'normal', fontSize:'20px', lineHeight:'32px'}}>{tut.text}</div>
                        </div>
                    ))}
                    
                </div>
                <div style={{fontFamily: 'Mulish',fontStyle: 'normal',fontWeight: 'bold', fontSize: '36px',lineHeight: '120%', paddingTop:'80px'}}>
                    Explainer Videos
                </div>
                <div style={{paddingTop:'32px', display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
                    {explainer.map((tut)=> (
                        <div style={{display:'flex', flexDirection:'column', marginRight:'16px'}}>
                            <div style={{height:300, width:400, borderRadius:'15px'}}><img src={tut.video}/></div>
                            <div style={{paddingTop:'24px', fontFamily:'Mulish', fontStyle:'normal', fontWeight:'normal', fontSize:'20px', lineHeight:'32px'}}>{tut.text}</div>
                        </div>
                    ))}
                    
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
