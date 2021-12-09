import React from 'react'
import { makeStyles } from '@mui/styles';
import g7 from '../images/g7.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import pc1 from '../images/pc1.png'
import pc2 from '../images/pc2.png'
import pc3 from '../images/pc3.png'

const useStyles = makeStyles({
    section1 : {
        display:'flex',
        paddingLeft:'100px',
        paddingTop:'50px',
        paddingBottom:'80px'
    },

    section1Text : {
        display: 'flex',
        width:'40%',
        flexDirection: 'column',
        justifyContent:'center',
    },

    section1Image : {
        width:'60%',
        display:'flex',
        justifyContent:'center'
    },

    section2 : {
        display:'flex',
        justifyContent:'space-between',
        paddingLeft: '50px',
        paddingRight: '50px',
        paddingBottom: '80px'
    },
});

function About() {
    const classes = useStyles();

    return (
        <div style={{backgroundColor:"#E5E5E5"}}>
            <div className={classes.section1}>
                <div className={classes.section1Text}>
                    <div style= {{fontFamily:'Mulish', fontSize:'36px', fontWeight:'bold', fontStyle:'normal', paddingBottom:'24px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                    <div style={{fontStyle:'normal', fontFamily:'Mulish', fontSize:'16px', fontWeight:'normal', lineHeight:'26px', color: 'rgba(22, 26, 27, 0.6)'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue mi ultricies 
                        ultrices etiam aliquam tristique molestie tempus. Dictum tellus ultricies 
                        facilisis rhoncus, eget nec nisl convallis. Nullam ultrices risus iaculis 
                        sed maecenas at donec. Suspendisse diam massa risus, nunc condimentum. 
                        Fermentum convallis ut ut ultricies in nibh enim consequat.
                    </div>
                </div>
                <div className={classes.section1Image}>
                    <img src={g7} style={{width:'625px', height:'390.09px'}}/>
                </div>
            </div>


            <div className={classes.section2}>
                <div>
                    <Card sx={{ maxWidth: 345, borderRadius: '15px' }}>
                        <img src={pc1} style={{padding:'20px', height:'100px', width:'71px'}}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{paddingLeft:'5%'}}>
                            Lorem Ipsum
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{paddingLeft:'5%'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra commodo etiam vel vestibulum. Dolor amet viverra erat ac. Velit ut pellentesque turpis sagittis velit. Nunc ornare ipsum in malesuada.
                            </Typography>
                        </CardContent>
                        <CardActions style={{ paddingLeft:'40px', paddingBottom:'40px', width:'150px'}}>
                            <Button style={{border: '1px solid #2584F4', boxSizing:'border-box', borderRadius:'8px', fontFamily:'Mulish', fontSize:'16px'}}>READ MORE</Button>
                        </CardActions>
                    </Card>
                </div>
                <div>
                    <Card sx={{ maxWidth: 345, borderRadius: '15px' }}>
                        <img src={pc2} style={{padding:'20px', height:'100px', width:'71px'}} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{paddingLeft:'5%'}}>
                            Lorem Ipsum
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{paddingLeft:'5%'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra commodo etiam vel vestibulum. Dolor amet viverra erat ac. Velit ut pellentesque turpis sagittis velit. Nunc ornare ipsum in malesuada.
                            </Typography>
                        </CardContent>
                        <CardActions style={{ paddingLeft:'40px', paddingBottom:'40px', width:'150px'}}>
                            <Button style={{border: '1px solid #2584F4', boxSizing:'border-box', borderRadius:'8px',fontFamily:'Mulish', fontSize:'16px'}}>READ MORE</Button>
                        </CardActions>
                    </Card>
                </div>
                <div>
                    <Card sx={{ maxWidth: 345, borderRadius: '15px' }}>
                        <img src={pc3} style={{padding:'20px', height:'100px', width:'71px'}}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{paddingLeft:'5%'}}>
                            Lorem Ipsum
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{paddingLeft:'5%'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra commodo etiam vel vestibulum. Dolor amet viverra erat ac. Velit ut pellentesque turpis sagittis velit. Nunc ornare ipsum in malesuada.
                            </Typography>
                        </CardContent>
                        <CardActions style={{ paddingLeft:'40px', paddingBottom:'40px', width:'150px'}}>
                            <Button style={{border: '1px solid #2584F4', boxSizing:'border-box', borderRadius:'8px', fontFamily:'Mulish', fontSize:'16px'}}>READ MORE</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>



            <div>
                I am section 3
            </div>
        </div>
    )
}

export default About
