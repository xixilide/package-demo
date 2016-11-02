import React, { PropTypes } from 'react'
import Img1 from '../img/a3.jpg'
class About extends React.Component {
  render () {
     let styles ={
       hp:{
         fontSize:'2em',
         fontWeight:'bold',
         fontFamily:'微软雅黑',
         padding:'20px 25px',
         color:'#8D6E63'
       },
       ap:{
         fontSize:'1.5em',
         fontWeight:'bold',
         fontFamily:'微软雅黑',
         padding:'12px 15px',
         color:'#9E9E9E'
       }

     }
    return(
      <div className="about-container">
        <div className="about-head"></div>
        <div className="about_me"><img src={Img1} style={{width:'150px',height:'150px'}}/></div>
        <h3 style={styles.hp}>闫进霞--YANJINXIA</h3>
        <p style={styles.ap}><span style={{color:'#6D4C41'}}>Graduate：</span>燕山大学里仁学院</p>
        <p style={styles.ap}><span style={{color:'#6D4C41'}}>Major：</span>计算机科学与技术</p>
          <p style={styles.ap}><span style={{color:'#6D4C41'}}>Hobby：</span>写作、读书、运动、编程</p>
        <p style={styles.ap}><span style={{color:'#6D4C41'}}>Character：</span>追求完美，不甘平凡</p>
        <p style={styles.ap}><span style={{color:'#6D4C41'}}>Tryelephone：</span>1713501526</p>
        <p style={styles.ap}><span style={{color:'#6D4C41'}}>Email：</span>754396775@qq.com</p>


      </div>
    )
  }
}

export default About;
