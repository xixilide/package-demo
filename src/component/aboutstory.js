import React from 'react';
import Echarts from 'echarts';

class Story extends React.Component {



  render () {
    let styles={
      sh:{
        margin:'10px 10px',

      },
      sp:{
        margin:'20px 10px',
        lineHight:'24px',
        fontSize:'16px',
        color:'#999'
      }
    }
    return(
      <div>
      <h3 style={styles.sh}>一.生活</h3>
      <p style={styles.sp}>人到了二十多岁之后，上帝就会给你做减法。拿掉你的一些朋友，拿掉你的一些梦想，甚至夺走你的一些痴狂。<br />
      有些人跟你分道扬镳你们或许都不见得会吵架，你们或许也有着彼此的联系方式可不知道该怎么去联系了。<br />
      有些人或许已经跟你见过最后一面了，只是你还没发觉。生活其实归根结底就是五个字：珍惜眼前人。</p>
      </div>
    )
  }
}

export default Story;
