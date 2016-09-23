import React, { PropTypes } from 'react'
import Echarts from 'echarts';
import { Link } from 'react-router';

class About extends React.Component {
  render () {
   let   styles={
      btn:{
        width:'80px',
        height:'30px',
        borderRadius:'15px',
        backgroundColor:'#FF9E80',
        color:"teal",
        margin:'10px 0',
        textAlign:'center',
        lineHight:'30px'

      }
    }
    return(
      <div className="about-container">
        <h3>偏执狂个人中心</h3>
          <Link activeStyle={{color:"#E040FB"}} style={styles.btn} onlyActiveOnIndex={true} to="/about/skill">技能知识</Link>
          <Link activeStyle={{color:"#E040FB"}} style={styles.btn} to="/about/hobby">兴趣爱好</Link>
          <Link activeStyle={{color:"#E040FB"}} style={styles.btn} to="/about/story">我的故事</Link>
      </div>
    )
  }
}

export default About;
