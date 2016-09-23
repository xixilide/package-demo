import React from 'react';
import Echarts from 'echarts';

class Skill extends React.Component {


    componentDidMount(){
      let myChart = Echarts.init(document.getElementById('main'));
      myChart.setOption({
        series : [
          {
              name: '知识技能',
              type: 'pie',
              radius: '55%',
              data:[
                  {value:200, name:'linux'},
                  {value:335, name:'react'},
                  {value:310, name:'php'},
                  {value:274, name:'c++'},
                  {value:235, name:'java'},
                  {value:200, name:'javascript'}
              ]
          }
        ]
      })
    }
  render () {
    return(
      <div>
        <h2>知识技能</h2>
        <div id="main" style={{width: "600px",height:"400px"}}>
        </div>
      </div>
    )
  }
}

export default Skill;
