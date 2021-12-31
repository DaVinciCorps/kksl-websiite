import React, {useState} from 'react';
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

function createData(image, heading, content, link){
    return {image, heading, content, link};
}

const BlogData = [
    createData(
        Blog1,
        'Immediate and fast transfer of securities, elimination of risk by loss, theft, mutilation; Elimination of "Bad Deliveries" no Stamp duty on transfer of securities',
        'Dividends are paid out when the company makes profits (if any). If the company has performed really well and is left with surplus cash, it may decide to share the same with investors in the form of dividends. Thus, dividends are rolled out to investors proportional to the number of mutual fund units held by them. A capital gain is the profit earned by investors in case the selling price of the security held in mutual funds.',
        '/blog/content'
    ),
    createData(
        Blog2,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque lectus nibh tincidunt eu dapibus at.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada leo sed eu sit orci, at at sollicitudin volutpat. Et nisl, lectus euismod facilisis rhoncus fringilla ut tincidunt nibh. Dolor lectus habitant elementum elit iaculis massa cursus ultricies ut. Volutpat proin turpis id sit tellus gravida felis maecenas massa. Id consequat sed dis diam cursus magnis nec. Metus eget a lectus suspendisse. Arcu, sodales ipsum pharetra nam mi. Id consequat sed dis diam cursus magnis nec. Metus eget a lectus suspendisse. Arcu, sodales ipsum pharetra nam mi ',
        '/blog/content'
    ),
    createData(
        Blog3,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque lectus nibh tincidunt eu dapibus at.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada leo sed eu sit orci, at at sollicitudin volutpat. Et nisl, lectus euismod facilisis rhoncus fringilla ut tincidunt nibh. Dolor lectus habitant elementum elit iaculis massa cursus ultricies ut. Volutpat proin turpis id sit tellus gravida felis maecenas massa. Id consequat sed dis diam cursus magnis nec. Metus eget a lectus suspendisse. Arcu, sodales ipsum pharetra nam mi. Id consequat sed dis diam cursus magnis nec. Metus eget a lectus suspendisse. Arcu, sodales ipsum pharetra nam mi ',
        '/blog/content'
    ),
    createData(
        Blog4,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque lectus nibh tincidunt eu dapibus at.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada leo sed eu sit orci, at at sollicitudin volutpat. Et nisl, lectus euismod facilisis rhoncus fringilla ut tincidunt nibh. Dolor lectus habitant elementum elit iaculis massa cursus ultricies ut. Volutpat proin turpis id sit tellus gravida felis maecenas massa. Id consequat sed dis diam cursus magnis nec. Metus eget a lectus suspendisse. Arcu, sodales ipsum pharetra nam mi. Id consequat sed dis diam cursus magnis nec. Metus eget a lectus suspendisse. Arcu, sodales ipsum pharetra nam mi ', 
        '/blog/content'
    ),
    createData(
        Blog5,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque lectus nibh tincidunt eu dapibus at.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada leo sed eu sit orci, at at sollicitudin volutpat. Et nisl, lectus euismod facilisis rhoncus fringilla ut tincidunt nibh. Dolor lectus habitant elementum elit iaculis massa cursus ultricies ut. Volutpat proin turpis id sit tellus gravida felis maecenas massa. Id consequat sed dis diam cursus magnis nec. Metus eget a lectus suspendisse. Arcu, sodales ipsum pharetra nam mi. Id consequat sed dis diam cursus magnis nec. Metus eget a lectus suspendisse. Arcu, sodales ipsum pharetra nam mi ',
        '/blog/content'
    ),
    createData(
        Blog6,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque lectus nibh tincidunt eu dapibus at.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada leo sed eu sit orci, at at sollicitudin volutpat. Et nisl, lectus euismod facilisis rhoncus fringilla ut tincidunt nibh. Dolor lectus habitant elementum elit iaculis massa cursus ultricies ut. Volutpat proin turpis id sit tellus gravida felis maecenas massa. Id consequat sed dis diam cursus magnis nec. Metus eget a lectus suspendisse. Arcu, sodales ipsum pharetra nam mi. Id consequat sed dis diam cursus magnis nec. Metus eget a lectus suspendisse. Arcu, sodales ipsum pharetra nam mi ',
        '/blog/content'
   ),
    createData(
        Blog7,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque lectus nibh tincidunt eu dapibus at.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada leo sed eu sit orci, at at sollicitudin volutpat. Et nisl, lectus euismod facilisis rhoncus fringilla ut tincidunt nibh. Dolor lectus habitant elementum elit iaculis massa cursus ultricies ut. Volutpat proin turpis id sit tellus gravida felis maecenas massa. Id consequat sed dis diam cursus magnis nec. Metus eget a lectus suspendisse. Arcu, sodales ipsum pharetra nam mi. Id consequat sed dis diam cursus magnis nec. Metus eget a lectus suspendisse. Arcu, sodales ipsum pharetra nam mi ',
        '/blog/content'
    ),
    createData(
        Blog8,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque lectus nibh tincidunt eu dapibus at.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada leo sed eu sit orci, at at sollicitudin volutpat. Et nisl, lectus euismod facilisis rhoncus fringilla ut tincidunt nibh. Dolor lectus habitant elementum elit iaculis massa cursus ultricies ut. Volutpat proin turpis id sit tellus gravida felis maecenas massa. Id consequat sed dis diam cursus magnis nec. Metus eget a lectus suspendisse. Arcu, sodales ipsum pharetra nam mi. Id consequat sed dis diam cursus magnis nec. Metus eget a lectus suspendisse. Arcu, sodales ipsum pharetra nam mi ',
        '/blog/content'
    ),
]



function Blog() {
    const history = useHistory();

    const section1 = () => {
        return (
            <div style={{paddingTop:'88px', fontFamily:'Mulish', fontStyle:'normal', fontWeight:'bold', fontSize:'36px', lineHeight:'120%', textAlign:'center'}}>
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
                <div style={{marginLeft:'31px', display:'flex', alignSelf:'center',fontFamily:'Mulish', fontSize:'16px', fontStyle:'normal', fontWeight:'normal'}}>
                    Filters <img src={Filter} style={{paddingLeft:'4px'}}/>
                </div>
            </div>
        )
    }


    const section3 = () => {
        return (
            <div style={{marginTop:'119px', display:'flex', flexDirection:'column', marginBottom:'104px'}}>
                {BlogData.map((blog)=> (
                    <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', paddingBottom:'56px'}}>
                        <div style={{flex:1}}>
                            <img src={blog.image}/>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', flex:1}}>
                            <div style={{fontFamily:'Mulish', fontWeight:'bold', fontSize:'24px', lineHeight:'32px', fontStyle:'normal'}}>
                                {blog.heading}
                            </div>
                            <div style={{paddingTop:'16px', fontFamily:'Mulish', fontWeight:'normal', fontSize:'16px', lineHeight:'26px', fontStyle:'normal', color:'rgba(22, 26, 27, 0.7)'}}>
                                {blog.content} 
                                <button style={{border:0, backgroundColor:'white', color:'blue', fontFamily:'Mulish', fontWeight:'normal', fontSize:'16px',}} onClick={()=>history.push(blog.link)}>
                                    Read more
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
        )
    }

    return (
        <div style={{margin:'auto', maxWidth:'1440px', }}>
            <div style={{marginLeft:'7.2%', marginRight:'7.2%',}}>
                {section1()}
                {section2()}
                {section3()}
            </div>
        </div>
    )
}

export default Blog
