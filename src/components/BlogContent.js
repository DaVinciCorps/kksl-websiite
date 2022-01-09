import React,{useEffect, useState} from 'react';
import MasterImage from '../images/BlogContent/master.png';
import Blog1 from '../images/BlogContent/Blog1.png';
import Blog2 from '../images/BlogContent/Blog2.png';
import Blog3 from '../images/BlogContent/Blog3.png';
import Blog4 from '../images/BlogContent/Blog4.png';
import Blog5 from '../images/BlogContent/Blog5.png';
import Blog6 from '../images/BlogContent/Blog6.png';
import Blog7 from '../images/BlogContent/Blog7.png';
import Blog8 from '../images/BlogContent/Blog8.png';
import { useHistory } from 'react-router';
import useMediaQuery from '@mui/material/useMediaQuery';
import { url } from "./Helper";
import axios from 'axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


function createData(image, heading, content, link){
    return {image, heading, content, link};
}

const BlogData = [
    createData(
        Blog1,
        'Lorem ipsum dolor sit amet, consectetur...',
        'Lorem ipsum dolor sit amet, sagittis at felis et. Hendrer. Lorem Ipssum'
    ),
    createData(
        Blog2,
        'Lorem ipsum dolor sit amet, consectetur...',
        'Lorem ipsum dolor sit amet, sagittis at felis et. Hendrer. Lorem Ipssum'
    ),
    createData(
        Blog3,
        'Lorem ipsum dolor sit amet, consectetur...',
        'Lorem ipsum dolor sit amet, sagittis at felis et. Hendrer. Lorem Ipssum'
    ),
    createData(
        Blog4,
        'Lorem ipsum dolor sit amet, consectetur...',
        'Lorem ipsum dolor sit amet, sagittis at felis et. Hendrer. Lorem Ipssum'
    ),
    createData(
        Blog5,
        'Lorem ipsum dolor sit amet, consectetur...',
        'Lorem ipsum dolor sit amet, sagittis at felis et. Hendrer. Lorem Ipssum'
    ),
    createData(
        Blog6,
        'Lorem ipsum dolor sit amet, consectetur...',
        'Lorem ipsum dolor sit amet, sagittis at felis et. Hendrer. Lorem Ipssum'
    ),
    createData(
        Blog7,
        'Lorem ipsum dolor sit amet, consectetur...',
        'Lorem ipsum dolor sit amet, sagittis at felis et. Hendrer. Lorem Ipssum'
    ),
    createData(
        Blog8,
        'Lorem ipsum dolor sit amet, consectetur...',
        'Lorem ipsum dolor sit amet, sagittis at felis et. Hendrer. Lorem Ipssum'
    )
]



const MobileViewBlogData = [
    createData(
        Blog1,
        'Lorem ipsum dolor sit amet, consectetur...',
        'Lorem ipsum dolor sit amet, sagittis at felis et. Hendrer. Lorem Ipssum'
    ),
    createData(
        Blog2,
        'Lorem ipsum dolor sit amet, consectetur...',
        'Lorem ipsum dolor sit amet, sagittis at felis et. Hendrer. Lorem Ipssum'
    ),
]



function BlogHome() {
    const history = useHistory();
    const isMobile = useMediaQuery('(max-width:850px)');
    // const isMac = useMediaQuery('(max-width:1170px)');
    const { id } = useParams();
    const [blog, setBlog] = useState();
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        // console.log('test')
        axios({
            method:'get',
            url: url+ "blogs/"+id,
        })
            .then(res=>{
                setBlog(res.data);
            })
            .catch(err=>{
                console.log(err);
            })
        
        axios({
            method: 'get',
            url: url + "blogs/",
        })
            .then(res => {
                console.log(res.data);
                // console.log('test')
                const arr = res.data;
                setBlogs([...arr]);
            })
            .catch(err => {
                console.log(err);
            })

    },[id])


    const section1 = () => {
        return (
            <div style={{display:'flex',flex:1, flexDirection:'column', marginRight:isMobile?0:'40px'}}>
                <div style={{fontFamily:'Mulish', fontStyle:'normal', fontWeight:'bold',paddingBottom: isMobile?'24px':'',fontSize:isMobile?'14px':'24px', lineHeight:isMobile?'18px':'32px'}}>
                    {blog && blog.title}
                </div>
                <div style={{marginTop:'24px', fontFamily:'Mulish', fontStyle:'normal', fontWeight:'normal', fontSize:'14px', lineHeight:'22px', display:isMobile?'none':''}}>
                    {blog && blog.time_to_read_min} min read
                </div>
            </div>
        )
    }



    const section2 = () => {
        return (
            <div style={{flex:2, display:'flex', flexDirection:'column', marginRight:isMobile?0:'24px'}}>
                <div style={{}}>
                    <img src={ blog && blog.image} style={{width:'100%', height:'auto', maxWidth:'556px'}}/>
                </div>
                <div style={{display:'flex', flexDirection:'column', maxWidth:'556px'}}>
                    {/* <div style={{paddingTop:'24px', lineHeight:isMobile?'15px':'32px', fontFamily:'Mulish', fontSize:isMobile?'12px':'24px', fontStyle:'normal', fontWeight:'bold' }}>
                        {blog && blog.content_para_1}
                    </div> */}
                    <div style={{paddingTop:'24px', color:'rgba(22, 26, 27, 0.7)', fontSize:isMobile?'12px':'16px', lineHeight:isMobile?'18px':'26px', fontFamily:'Mulish', fontStyle:'normal', fontWeight:'normal'}}>
                        {blog &&blog.content_para_1}
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column', maxWidth:'556px'}}>
                    {/* <div style={{paddingTop:'24px', lineHeight:isMobile?'15px':'32px', fontFamily:'Mulish', fontSize:isMobile?'12px':'24px', fontStyle:'normal', fontWeight:'bold' }}>
                        {blog &&blog.content_para_2}
                    </div> */}
                    <div style={{paddingTop:'24px', color:'rgba(22, 26, 27, 0.7)', fontSize:isMobile?'12px':'16px', lineHeight:isMobile?'18px':'26px', fontFamily:'Mulish', fontStyle:'normal', fontWeight:'normal'}}>
                        {blog &&blog.content_para_2}
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column', maxWidth:'556px'}}>
                    {/* <div style={{paddingTop:'24px', lineHeight:isMobile?'15px':'32px', fontFamily:'Mulish', fontSize:isMobile?'12px':'24px', fontStyle:'normal', fontWeight:'bold' }}>
                        {blog &&blog.content_para_3}
                    </div> */}
                    <div style={{paddingTop:'24px', color:'rgba(22, 26, 27, 0.7)', fontSize:isMobile?'12px':'16px', lineHeight:isMobile?'18px':'26px', fontFamily:'Mulish', fontStyle:'normal', fontWeight:'normal'}}>
                        {blog &&blog.content_para_3}
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column', maxWidth:'556px'}}>
                    {/* <div style={{paddingTop:'24px', lineHeight:isMobile?'15px':'32px', fontFamily:'Mulish', fontSize:isMobile?'12px':'24px', fontStyle:'normal', fontWeight:'bold' }}>
                        {blog &&blog.content_para_4}
                    </div> */}
                    <div style={{paddingTop:'24px', color:'rgba(22, 26, 27, 0.7)', fontSize:isMobile?'12px':'16px', lineHeight:isMobile?'18px':'26px', fontFamily:'Mulish', fontStyle:'normal', fontWeight:'normal'}}>
                        {blog &&blog.content_para_4}
                    </div>
                </div>
            </div>
        )
    }



    const section3 = () => {
        return (
            <div style={{flex:1}}>
                {!isMobile && blogs.slice(0,8).map((blog)=> (
                    <div style={{display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
                        <div style={{display:'flex', flexDirection:'row', paddingBottom:'16px',}}>
                            <div style={{ paddingRight:'16px'}}>
                                <img src={blog.image} style={{height:128, width:128}}/>
                            </div>
                            <div style={{display:'flex', flexDirection:'column',}}>
                                <div style={{fontFamily:'Mulish', fontWeight:'bold', fontSize:'16px', lineHeight:'24px', fontStyle:'normal',}}>
                                    {blog.title.substring(0,30)}{blog.title.length > 30 ? "..." : ""}
                                </div>
                                <div style={{paddingTop:'8px', fontFamily:'Mulish', fontWeight:'normal', fontSize:'14px', lineHeight:'22px', fontStyle:'normal', color:'rgba(22, 26, 27, 0.7)'}}>
                                    {blog.content_para_1.substring(0,50)}{blog.content_para_1.length > 50 ? "..." : ""}
                                    <button onClick={()=>history.push(blog._id)} style={{cursor:'pointer',border:0, backgroundColor:'white', color:'blue', fontFamily:'Mulish', fontWeight:'normal', fontSize:'16px',}} >
                                        Read more
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div style={{border: '1px solid rgba(0, 0, 0, 0.2)', marginBottom:'16px', height:0, display:isMobile?'none':''}} />
                    </div>
                ))}
            </div>
        )
    }


    const mobileSection3 = () => {
        return (
            <div>
                <div style={{paddingTop:'48px', fontFamily:'Mulish', fontStyle:'normal', fontWeight:'bold', fontSize:'20px', lineHeight:'26px', paddingBottom:'24px', display:isMobile?'':'none' }}>
                    Related Blogs
                </div>
                {isMobile && blogs.slice(0,2).map((blog)=> (
                    <div style={{display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
                        <div style={{display:'flex', flexDirection:'row', paddingBottom:'16px',}}>
                            <div style={{ paddingRight:'16px'}}>
                                <img src={blog.image} style={{height:128, width:128}}/>
                            </div>
                            <div style={{display:'flex', flexDirection:'column',}}>
                                <div style={{fontFamily:'Mulish', fontWeight:'bold', fontSize:'16px', lineHeight:'24px', fontStyle:'normal',}}>
                                    {blog.title.substring(0,30)}{blog.title.length > 30 ? "..." : ""}
                                </div>
                                <div style={{paddingTop:'8px', fontFamily:'Mulish', fontWeight:'normal', fontSize:'14px', lineHeight:'22px', fontStyle:'normal', color:'rgba(22, 26, 27, 0.7)'}}>
                                    {blog.content_para_1.substring(0,120)}{blog.content_para_1.length > 120 ? "..." : ""}
                                    <button onClick={()=>history.push(blog._id)} style={{cursor:'pointer',border:0, backgroundColor:'white', color:'blue', fontFamily:'Mulish', fontWeight:'normal', fontSize:'16px',}} >
                                        Read more
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div style={{border: '1px solid rgba(0, 0, 0, 0.2)', marginBottom:'16px', height:0, display:isMobile?'none':''}} />
                    </div>
                ))}
                {isMobile && 
                    <div style={{display:'flex', justifyContent:'center', paddingTop:'16px'}} >
                        <button onClick={()=>history.push('/all')} style={{cursor:'pointer',width: 120, fontSize:'16px',color: "#FFFFFF",height: 44,borderRadius: 8,backgroundColor: "#2584F4", display: 'flex',flexDirection: 'row',justifyContent: 'center',alignItems: "center",padding: '11 24',cursor: 'pointer',border: 'none',outline: 'none'}}>
                            View More
                        </button>
                    </div>
                }
            </div>
        )
    }


    return (
        <div style={{display: 'flex', flexDirection:isMobile?'column':'row',alignItems:isMobile?'center':'',}}>
            <div style={{ maxWidth:isMobile?'500px':'1440px', display:isMobile?'':'flex',marginTop:isMobile?'40px':'88px', marginLeft:'7.2%', marginRight:'7.2%', flexWrap:'wrap', paddingBottom:isMobile?'45px':'160px'}}>
                {section1()}
                {section2()}
                {!isMobile && section3()}
                {isMobile && mobileSection3()}
            </div>
        </div>
    )
}

export default BlogHome
