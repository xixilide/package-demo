import React from 'react';
import Echarts from 'echarts';

class Hobby extends React.Component {



  render () {
    return(
      <div>
        <ul class="list-group">
            <li class="list-group-item list-group-item-success">健 身</li>
            <li class="list-group-item list-group-item-info">写代码</li>
            <li class="list-group-item list-group-item-warning">跳 舞</li>
            <li class="list-group-item list-group-item-danger">看 书</li>
        </ul>
      </div>
    )
  }
}

export default Hobby;
