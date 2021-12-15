import React, { useState } from 'react'
import cuate from "../../images/Debt/cuate.png"
import service1 from "../../images/Services/service3.png"
import Tick from "../../images/Debt/Tick.png"
import 'react-dropdown/style.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function Debt() {
    const data = {
        heading: "Debt",
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nisl vitae, nunc, elit.Ornare viverra enim, mus volutpat aliquam velit amet non. Blandit mauris nulla diam sollicitudin amet tincidunt velit est."
    };
    const [selected,setSelected] = useState();

    const topDiv=()=>{
        return (
            <div style={{display: 'flex', justifyContent: 'space-between', margin: "80px 14.4% 0px 14.4%" }}>
                <img src={service1}/>
                <div style={{marginLeft: 20}}>
                    <p style={{fontWeight: 'bold',marginTop: 0,  fontSize: 36, color: '#161A1B', lineHeight: "43.2px",fontFamily: 'Mulish'}}>
                        Mutual Funds
                    </p>
                    <p style={{fontWeight: 400,marginTop: 24,  fontSize: 16, color: '#161A1B', lineHeight: "26px",fontFamily: 'Mulish', maxWidth: 400}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nisl vitae, nunc, elit. Ornare viverra enim, mus volutpat aliquam velit amet non. Blandit mauris nulla diam sollicitudin amet tincidunt velit est.</p>
                    <button style={{marginTop: 40,width: 257, height: 56, backgroundColor: '#2584F4', color: 'white', fontSize: 18, outline: 'none', border: 'none', borderRadius: 8, cursor: 'pointer'}}>
                        Get Started
                    </button>
                </div>
                
            </div>
        )
    }

    const makeYourFirstMove=()=>{
        return(
            <div style={{backgroundColor: "#F7F7F7",marginTop: 160,padding: "88px 14.4%"}}>
                <p style={{textAlign: 'center', fontWeight: 'bold',marginTop: 0,  fontSize: 36, color: '#161A1B', lineHeight: "43.2px",fontFamily: 'Mulish'}}>Make your first move with confidence</p>
                <div style={{display: 'flex', marginTop:48, justifyContent: 'space-between'}}>
                    <div>
                        <div style={{display: 'flex'}}>
                            <div>
                                <img src={Tick}/>
                            </div>
                            <div style={{marginLeft: 28}}>
                                <p style={{fontWeight: 700,  fontSize: 20, color: '#161A1B', lineHeight: "24px",fontFamily: 'Mulish', maxWidth: 400}}>Paperless account opening</p>
                                <p style={{fontWeight: 400,marginTop: 24,  fontSize: 16, color: '#161A1B', lineHeight: "26px",fontFamily: 'Mulish', maxWidth: 400}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nisl vitae, nunc, elit. Ornare viverra enim, musLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div style={{display: 'flex', marginTop: 65}}>
                            <div>
                                <img src={Tick}/>
                            </div>
                            <div style={{marginLeft: 28}}>
                                <p style={{fontWeight: 700,  fontSize: 20, color: '#161A1B', lineHeight: "24px",fontFamily: 'Mulish', maxWidth: 400}}>As secure as your trusted bank</p>
                                <p style={{fontWeight: 400,marginTop: 24,  fontSize: 16, color: '#161A1B', lineHeight: "26px",fontFamily: 'Mulish', maxWidth: 400}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nisl vitae, nunc, elit. Ornare viverra enim, musLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div style={{marginLeft: 20}}>
                        <div style={{display: 'flex'}}>
                            <div>
                                <img src={Tick}/>
                            </div>
                            <div style={{marginLeft: 28}}>
                                <p style={{fontWeight: 700,  fontSize: 20, color: '#161A1B', lineHeight: "24px",fontFamily: 'Mulish', maxWidth: 400}}>Easy analysis of mutual funds</p>
                                <p style={{fontWeight: 400,marginTop: 24,  fontSize: 16, color: '#161A1B', lineHeight: "26px",fontFamily: 'Mulish', maxWidth: 400}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nisl vitae, nunc, elit. Ornare viverra enim, musLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div style={{display: 'flex', marginTop: 65}}>
                            <div>
                                <img src={Tick}/>
                            </div>
                            <div style={{marginLeft: 28}}>
                                <p style={{fontWeight: 700,  fontSize: 20, color: '#161A1B', lineHeight: "24px",fontFamily: 'Mulish', maxWidth: 400}}>As secure as your trusted bank</p>
                                <p style={{fontWeight: 400,marginTop: 24,  fontSize: 16, color: '#161A1B', lineHeight: "26px",fontFamily: 'Mulish', maxWidth: 400}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nisl vitae, nunc, elit. Ornare viverra enim, musLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }

    const howItWorks=()=>{
        return (
            <div style={{marginTop: 160,margin: "160px 7.2% 0px 7.2%"}}>
                <p style={{textAlign: 'center', fontWeight: 'bold',marginTop: 0,  fontSize: 36, color: '#161A1B', lineHeight: "43.2px",fontFamily: 'Mulish', textAlign: 'center'}}>
                    How it Works
                </p>
                <div style={{width: "100%", display: 'flex', justifyContent: 'center'}}>
                    <p style={{fontWeight: 400,marginTop: 16,  fontSize: 16, color: '#161A1B', lineHeight: "26px",fontFamily: 'Mulish', maxWidth: 400,textAlign: 'center', maxWidth: 498}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nisl vitae, nunc, elit. Ornare viverra enim, musLorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div style={{marginTop: 56,display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{margin: "0px 20px"}}>
                        <p style={{fontSize: 96, lineHeight: "120%", fontWeight: 'bold', fontFamily: 'Mulish', color: "#2584F4", textAlign: 'center'}}>
                            1
                        </p>
                        <p style={{fontWeight: 600,marginTop: 16,  fontSize: 20, color: '#161A1B', lineHeight: "24px",fontFamily: 'Mulish',  textAlign: 'center'}}>
                            Lorem Ipsum
                        </p>
                        <div style={{maxWidth: 284,marginTop: 32,border: "1px solid rgba(0, 0, 0, 0.15)",boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)", borderRadius: 15, }}>
                        <p style={{fontWeight: 400, textAlign: "center" ,fontSize: 16, color: '#161A1B', lineHeight: "26px",fontFamily: 'Mulish',margin: '24px 24px 52px 24px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum tincidunt iaculis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nisl vitae, Auctor nisl vitae, nunc, elit. Ornare viverra enim, musLorem.
                        </p>
                        </div>
                    </div>

                    <div style={{margin: "0px 20px"}}>
                        <p style={{fontSize: 96, lineHeight: "120%", fontWeight: 'bold', fontFamily: 'Mulish', color: "#2584F4", textAlign: 'center'}}>
                            2
                        </p>
                        <p style={{fontWeight: 600,marginTop: 16,  fontSize: 20, color: '#161A1B', lineHeight: "24px",fontFamily: 'Mulish',  textAlign: 'center'}}>
                            Lorem Ipsum
                        </p>
                        <div style={{maxWidth: 284,marginTop: 32,border: "1px solid rgba(0, 0, 0, 0.15)",boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)", borderRadius: 15,}}>
                        <p style={{fontWeight: 400, textAlign: "center" ,fontSize: 16, color: '#161A1B', lineHeight: "26px",fontFamily: 'Mulish', margin: '24px 24px 52px 24px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum tincidunt iaculis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nisl vitae, Auctor nisl vitae, nunc, elit. Ornare viverra enim, musLorem.
                        </p>
                        </div>
                    </div>

                    <div style={{margin: "0px 20px"}}>
                        <p style={{fontSize: 96, lineHeight: "120%", fontWeight: 'bold', fontFamily: 'Mulish', color: "#2584F4", textAlign: 'center'}}>
                            3
                        </p>
                        <p style={{fontWeight: 600,marginTop: 16,  fontSize: 20, color: '#161A1B', lineHeight: "24px",fontFamily: 'Mulish',  textAlign: 'center'}}>
                            Lorem Ipsum
                        </p>
                        <div style={{maxWidth: 284,marginTop: 32,border: "1px solid rgba(0, 0, 0, 0.15)",boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)", borderRadius: 15,}}>
                        <p style={{fontWeight: 400, textAlign: "center" ,fontSize: 16, color: '#161A1B', lineHeight: "26px",fontFamily: 'Mulish',margin: '24px 24px 52px 24px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum tincidunt iaculis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nisl vitae, Auctor nisl vitae, nunc, elit. Ornare viverra enim, musLorem.
                        </p>
                        </div>
                    </div>

                    <div style={{margin: "0px 20px"}}>
                        <p style={{fontSize: 96, lineHeight: "120%", fontWeight: 'bold', fontFamily: 'Mulish', color: "#2584F4", textAlign: 'center'}}>
                            4
                        </p>
                        <p style={{fontWeight: 600,marginTop: 16,  fontSize: 20, color: '#161A1B', lineHeight: "24px",fontFamily: 'Mulish',  textAlign: 'center'}}>
                            Lorem Ipsum
                        </p>
                        <div style={{maxWidth: 284,marginTop: 32,border: "1px solid rgba(0, 0, 0, 0.15)",boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)", borderRadius: 15, }}>
                        <p style={{fontWeight: 400, textAlign: "center" ,fontSize: 16, color: '#161A1B', lineHeight: "26px",fontFamily: 'Mulish',margin: '24px 24px 52px 24px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum tincidunt iaculis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor nisl vitae, Auctor nisl vitae, nunc, elit. Ornare viverra enim, musLorem.
                        </p>
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
                <div style={{backgroundColor: '#F7F7F7',border: '1px solid #E0E0E0', borderRadius: 8, padding: "24px 32px", display: 'flex'}} >
                    <div style={{marginRight: 48, flex:1}}>
                        <p onClick={()=>{handleSelect(id)}} style={{fontWeight: 400,marginTop: 0,  fontSize: 18, color: '#161A1B', lineHeight: "24px",fontFamily: 'Mulish',cursor: 'pointer'}}>
                            {ques}
                        </p>
                        {selected == id &&
                            <p style={{fontWeight: 400 ,fontSize: 16, color: 'rgba(22, 26, 27, 0.6)', lineHeight: "26px",fontFamily: 'Mulish', marginTop: 25, }}>
                                {ans}
                            </p>
                        }
                    </div>
                    {selected!=id && 
                        <div style={{cursor: 'pointer'}} onClick={()=>{handleSelect(id)}}>
                            <KeyboardArrowDownIcon />
                        </div>
                    }
                    {selected==id && 
                        <div style={{cursor: 'pointer'}} onClick={()=>{handleSelect(id)}}>
                            <KeyboardArrowUpIcon />
                        </div>
                    }
                </div>
            )
        }

        const handleSelect=(e)=>{
            if(selected == e){
                setSelected();
            }
            else{
                setSelected(e);
            }
        }

        return(
            <div style={{maxWidth: 1440, margin: '160px 14.2% 184px 14.2%'}}>
                <p style={{textAlign: 'center', fontWeight: 'bold',marginTop: 0,  fontSize: 36, color: '#161A1B', lineHeight: "43.2px",fontFamily: 'Mulish', textAlign: 'center'}}>
                    Frequently Asked Questions
                </p>
                <div style={{marginTop: 48}}  >
                    {faqCard(ques,ans,0)}
                </div>
                <div style={{marginTop: 48}}>
                    {faqCard(ques,ans,1)}
                </div>
                <div style={{marginTop: 48}}>
                    {faqCard(ques,ans,2)}
                </div>
                <div style={{marginTop: 48}} >
                    {faqCard(ques,ans,3)}
                </div>
                <div style={{marginTop: 48}} >
                    {faqCard(ques,ans,4)}
                </div>
            </div>
        )
    }

    const investInStocks=()=>{
        return(
            <div style={{margin: "0px 14.4% 160px 14.4%", maxWidth: 1440,}}>
                <div style={{ backgroundColor: "#0953AA", borderRadius: 15,display: 'flex',justifyContent: "space-between", padding: "125px 82px 100px 104px"}}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <p style={{color: "white", fontFamily: 'Mulish', fontWeight: 'bold', fontSize: 40, lineHeight: "52px", letterSpacing: "0.005em"}}>
                            Invest in Stocks
                        </p>
                        <p style={{color: 'white',marginTop: 25, fontFamily: 'Mulish', fontSize: 16, lineHeight: "26px",maxWidth: 350 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque faucibus elementum 
                        </p>
                        <button style={{width: 240,marginTop: 25, height: 56, backgroundColor: '#2584F4', color: 'white', fontSize: 16, outline: 'none', border: 'none', borderRadius: 8, cursor: 'pointer'}}>
                            Start Investing
                        </button>
                    </div>
                    <div style={{marginLeft: 20}}>
                        <img src={cuate} style={{width: "100%", minWidth: 300}} />
                    </div>
                </div>
                
            </div>
        )
    }

    return (

        <div >
            {topDiv()}
            {makeYourFirstMove()}
            {howItWorks()}
            {faq()}
            {investInStocks()}
        </div>

    );

}
export default Debt;