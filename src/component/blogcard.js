import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class BlogCard extends React.Component {


  render () {
    let styles = {
      root:{
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
        width:'96%',
        margin:'0 auto',
        marginBottom:'20px',
        border:'1px solid #ccc',
        borderRadius:'8px',
        backgroundColor:'#ffa07a',

      },
      index:{
        display:'flex',
        alignItems:'center',
        width:'30px',
        height:'30px',
        borderRadius:'15px',
        border:'2px solid #fff',
        margin:'10px 10px',
        textAlign: 'center',
      },
      num:{

          fontSize:'22px',
          lineHeight:'30px',
          fontWeight:'500',
          margin:'0 auto',
          color:'#fff',

       },

      content:{
        padding:'10px',
        color:'#727272',
      },
      title:{
        fontSize:'20px',
        color:'#fff',
      },
      desc:{
        fontSize:'16px',
        marginBottom:'20px'
      },
      btn:{
        borderRadius:'5px',
        width:'80px',
        height:'30px',
        backgroundColor:''
      }

    }
    let address=`item/${this.props.url}`;
    return(
      <div style={styles.root}>
        <div style={styles.index}>
          <p style={styles.num}>{this.props.index}</p>
        </div>
        <div style={styles.content}>
          <p style={styles.title}>{this.props.title}</p>
          <p style={styles.desc}>{this.props.desc}</p>

          <Link to={address}  style={styles.btn}>阅读更多</Link>
        </div>
      </div>
    )
  }
}
BlogCard.defaultProps={
  index:1,
  title:'标题',
  desc:'介绍'
}
BlogCard.propsType={
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
}
export default BlogCard;
