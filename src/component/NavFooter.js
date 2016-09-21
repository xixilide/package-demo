import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class NavFooter extends React.Component {
  render () {
  return(
    <div className="nav-footer">
        <Link activeStyle={{color:"#E040FB"}} onlyActiveOnIndex={true} to="/" ><span className="glyphicon glyphicon-home"></span><br />Home</Link>
        <Link activeStyle={{color:"#E040FB"}}  to="/blog"><span className="glyphicon glyphicon-file"></span><br />Blog</Link>
        <Link activeStyle={{color:"#E040FB"}} to="/work"><span className="glyphicon glyphicon-edit"></span><br />Work</Link>
        <Link activeStyle={{color:"#E040FB"}} to="/about"><span className="glyphicon glyphicon-user"></span><br />About</Link>

    </div>
  )
  }
}

export default NavFooter;
