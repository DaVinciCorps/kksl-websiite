import { useMediaQuery } from '@mui/material';
import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Admin() {
    const history = useHistory();
    const isMobile = useMediaQuery("(max-width: 600px)")
    const style={fontFamily: 'Mulish', fontSize:isMobile?"20px": "32px", lineHeight:isMobile?"30px": "45px",};

    const handleRedirect=(link)=>{
        history.push(link);
    }

    return (
        <div style={{height: "100%", margin:isMobile?"40px 6.4%": "100px 14.4% 80px 14.4%", maxWidth: 1024,}}>
            <p style={{fontFamily: 'Mulish', fontSize: "32px", lineHeight: "50px",fontWeight: 'bold', textAlign: "center"}}>
                List Of Options
            </p>
            <div style={{display: 'flex', justifyContent: 'space-between',marginTop: 35, alignItems: "center" }}>
                <p style={style}>
                    View all blogs
                </p>
                <button onClick={()=>{handleRedirect('/admin/bloglist')}} style={{cursor: 'pointer',width: 150, height: 48, background: "#2584F4", outline: "none", border:'none', fontFamily: 'Mulish', fontSize: 16,borderRadius: "15px", color: 'white'}}>
                    Blogs
                </button>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between',marginTop: 35 ,alignItems: "center"}}>
                <p style={style}>
                    View all Reviews
                </p>
                <button onClick={()=>{handleRedirect('/admin/reviewlist')}} style={{cursor: 'pointer',width: 150, height: 48, background: "#2584F4", outline: "none", border: 'none', fontFamily: 'Mulish', fontSize: 16,borderRadius: "15px", color: 'white'}}>
                    Review
                </button>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between',marginTop: 35, alignItems: "center" }}>
                <p style={style}>
                    View all Videos
                </p>
                <button onClick={()=>{handleRedirect('/admin/videolist')}} style={{cursor: 'pointer',width: 150, height: 48, background: "#2584F4", outline: "none", border: 'none', fontFamily: 'Mulish', fontSize: 16,borderRadius: "15px", color: 'white'}}>
                    Videos
                </button>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between',marginTop: 35, alignItems: "center" }}>
                <p style={style}>
                    Create a Blogs
                </p>
                <button onClick={()=>{handleRedirect('/admin/blog')}} style={{cursor: 'pointer',width: 150, height: 48, background: "#2584F4", outline: "none", border:'none', fontFamily: 'Mulish', fontSize: 16,borderRadius: "15px", color: 'white'}}>
                    Blog
                </button>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between',marginTop: 35, alignItems: "center" }}>
                <p style={style}>
                    Create a Review
                </p>
                <button onClick={()=>{handleRedirect('/admin/review')}} style={{cursor: 'pointer',width: 150, height: 48, background: "#2584F4", outline: "none", border:'none', fontFamily: 'Mulish', fontSize: 16,borderRadius: "15px", color: 'white'}}>
                    Review
                </button>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between',marginTop: 35, alignItems: "center" }}>
                <p style={style}>
                    Create a Video
                </p>
                <button onClick={()=>{handleRedirect('/admin/video')}} style={{cursor: 'pointer',width: 150, height: 48, background: "#2584F4", outline: "none", border:'none', fontFamily: 'Mulish', fontSize: 16,borderRadius: "15px", color: 'white'}}>
                    Video
                </button>
            </div>
        </div>
    )
}
