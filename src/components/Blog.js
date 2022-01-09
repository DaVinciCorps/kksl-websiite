import React, {useState, useEffect} from 'react';
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Filter from '../images/Filter.png';
import Blog1 from '../images/Blog/Blog1.png';
import Blog2 from '../images/Blog/Blog2.png';
import Blog3 from '../images/Blog/Blog3.png';
import Blog4 from '../images/Blog/Blog4.png';
import Blog5 from '../images/Blog/Blog5.png';
import Blog6 from '../images/Blog/Blog6.png';
import Blog7 from '../images/Blog/Blog7.png';
import Blog8 from '../images/Blog/Blog8.png';
import { useHistory } from 'react-router';
import useMediaQuery from '@mui/material/useMediaQuery';
import { url } from "./Helper";
import axios from 'axios';


function CustomizedInputBase() {
    return (
      <Paper
        component="form"
        sx={{ paddingLeft:'27px', paddingRight:'27px', display: "flex", alignItems: "center", border: '1px solid #000000', height:'56px', boxSizing:'border-box', borderRadius:'8px', boxShadow:0}}
      >
        <SearchIcon />
        <InputBase
          sx={{ ml: 1, flex: 1, fontFamily:'Mulish', fontSize:'16px', fontStyle:'normal', fontWeight:'normal', color:'#161A1B' }}
          placeholder=" Search"
        />
      </Paper>
    );
}


function Blog() {
    const history = useHistory();
    const isMobile = useMediaQuery('(max-width:850px)');
    const is960 = useMediaQuery('(max-width:960px)');
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        axios({
            method: 'get',
            url: url + "blogs/",
        })
        .then(res => {
            console.log(res.data);
            const arr = res.data;
            setBlogs([...arr]);
        })
        .catch(err => {
            console.log(err);
        })
    },[])

    const section1 = () => {
        return (
            <div style={{paddingTop:isMobile?'40px':is960?"88px":'133px', fontFamily:'Mulish', fontStyle:'normal', fontWeight:'bold', fontSize:'36px', lineHeight:'120%', textAlign:'center'}}>
                Blogs
            </div>
        )
    }


    const section2 = () => {
        return (
            <div style={{marginTop:'32px', display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
                <div style={{maxWidth:'712px', display:'flex', flexDirection:'column', flex:1}}>
                    {CustomizedInputBase()}
                </div>
                <div style={{marginLeft:'31px', display:isMobile?'none':'flex', alignSelf:'center',fontFamily:'Mulish', fontSize:'16px', fontStyle:'normal', fontWeight:'normal'}}>
                    Filters <img src={Filter} style={{paddingLeft:'4px'}}/>
                </div>
            </div>
        )
    }


    const section3 = () => {
        return (
            <div>
                <div style={{marginTop:isMobile?'32px':'119px', flexDirection:'column', marginBottom:'104px', display:isMobile?'none':'flex'}}>
                    {blogs.map((blog)=> (
                        <div style={{display:'flex', justifyContent:'space-between',  paddingBottom:'56px'}}>
                            <div style={{flex:1, }}>
                                <img src={blog.image} style={{width:'100%', height:'auto', maxHeight:284, maxWidth:504}}/>
                            </div>
                            <div style={{display:'flex', flexDirection:'column', flex:1,  paddingLeft:isMobile?'3%':'9.7%',}}>
                                <div style={{fontFamily:'Mulish', fontWeight:'bold', fontSize:isMobile?'12px':'24px', lineHeight:isMobile?'15px':'32px', fontStyle:'normal'}}>
                                    {blog.title}
                                </div>
                                <div style={{paddingTop:'16px',fontFamily:'Mulish', fontWeight:'normal', fontSize:isMobile?'12px':'16px', lineHeight:isMobile?'18px':'26px', fontStyle:'normal', color:'rgba(22, 26, 27, 0.7)'}}>
                                    {blog.content_para_1.substring(0, 400)}{blog.content_para_1.length > 400 ? "..." : ""} 
                                    {/* {console.log(blog._id)} */}
                                    <button onClick={()=>history.push('/blog/'+blog._id)} style={{cursor:'pointer',border:0, backgroundColor:'white', color:'blue', fontFamily:'Mulish', fontWeight:'normal', fontSize:'16px',}} >
                                        Read more
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{marginTop:isMobile?'32px':'119px', flexDirection:'column', marginBottom:'104px', display:isMobile?'flex':'none'}}>
                    {blogs.map((blog)=> (
                        <div style={{display:'flex', justifyContent:'space-between',  paddingBottom:isMobile?'16px':'56px'}}>
                            <div style={{flex:1}}>
                                <img src={blog.image} style={{width:'100%', height:'auto', maxHeight:128, minHeight:128}}/>
                            </div>
                            <div style={{display:'flex', flexDirection:'column', flex:1,  paddingLeft:isMobile?'10px':'',}}>
                                <div style={{fontFamily:'Mulish', fontWeight:'bold', fontSize:isMobile?'12px':'24px', lineHeight:isMobile?'15px':'32px', fontStyle:'normal'}}>
                                    {blog.title.substring(0,80)}{blog.title.length > 80 ? "...":''}
                                </div>
                                <div style={{paddingTop:'16px',fontFamily:'Mulish', fontWeight:'normal', fontSize:isMobile?'12px':'16px', lineHeight:isMobile?'18px':'26px', fontStyle:'normal', color:'rgba(22, 26, 27, 0.7)'}}>
                                    {blog.content_para_1.substring(0, 150)}{blog.content_para_1.length > 400 ? "..." : ""} 
                                    <button onClick={()=>history.push('/blog/'+blog._id)} style={{cursor:'pointer',border:0, backgroundColor:'white', color:'blue', fontFamily:'Mulish', fontWeight:'normal', fontSize:'16px',}} >
                                        Read more
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>

            </div>
        )
    }

    return (
        <div style={{margin:'auto', display:'flex', flexDirection:'column', alignItems:'center' }}>
            <div style={{maxWidth:isMobile?'500px':'1440px',marginLeft:'7.2%', marginRight:'7.2%',}}>
                {section1()}
                {section2()}
                {section3()}
            </div>
        </div>
    )
}

export default Blog
