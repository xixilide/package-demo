import React, { PropTypes } from 'react';

class NavHeader extends React.Component {
  handleBack(){
    this.context.router.goBack();
 }
  render () {

  return(
    <div className="nav-header">
  <p onClick={this.handleBack.bind(this)}>
  <span className="glyphicon glyphicon-arrow-left" aria-hidden="true">back</span></p>

    <h3>xixilide@{this.props.title}</h3>

  <span className="glyphicon glyphicon-record"></span>

    </div>
  )
  }
}

NavHeader.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default NavHeader;
