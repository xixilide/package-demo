import React, { PropTypes } from 'react'
import { Link } from 'react-router';
class NavLeft extends React.Component {
  render () {
   return(
     <div className="nav-left">
          <h3>xixilide@{this.props.title}</h3>
         <Link activeStyle={{background:"rgba(0,0,0,0.3)"}} onlyActiveOnIndex={true} to="/" ><span className="glyphicon glyphicon-home"></span>Home</Link>
         <Link activeStyle={{background:"rgba(0,0,0,0.3)"}}  to="/blog"><span className="glyphicon glyphicon-file"></span>Blog</Link>
         <Link activeStyle={{background:"rgba(0,0,0,0.3)"}} to="/work"><span className="glyphicon glyphicon-edit"></span>Work</Link>
         <Link activeStyle={{background:"rgba(0,0,0,0.3)"}} to="/about"><span className="glyphicon glyphicon-user"></span>About</Link>

     </div>
   )
  }
}
NavLeft.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default NavLeft;
