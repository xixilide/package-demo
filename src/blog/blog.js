import React, { PropTypes } from 'react';
import BlogCard from '../component/blogcard';

let data=[
  {index:1,title:"教育背景",desc:"燕山大学里仁学院"},
  {index:2,title:"实习经历",desc:"海通实习"},
  {index:3,title:"获得证书",desc:"英语四级"},
  {index:4,title:"个人介绍",desc:"性格开朗热情上进"}
]

class Blog extends React.Component {
  render (){
    return(
       <div style={{ width:'100%',marginTop:'20px' }}>
        { data.map( (item,i) => <BlogCard {...item} key={i} /> ) }

      </div>
    )
  }
}

export default Blog;
