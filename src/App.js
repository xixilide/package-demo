import React from 'react';
import NavHeader from './component/NavHeader';
import NavFooter from './component/NavFooter';
import NavLeft from './component/NavLeft';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      showNav:false
    }
  }
  setNavBarState(){
    this.setState({
      showNav:window.innerWidth > 760 ? true : false
    });
  }
  componentDidMount(){
    this.setNavBarState();
    window.onresize = this.setNavBarState.bind(this);
  }
  render () {
    return(
      <div className="content-warp">
        {this.state.showNav ? <NavLeft /> : <NavHeader />}

        <div className="content-main">
          {this.props.children}
        </div>
          {this.state.showNav ? "" : <NavFooter />}

      </div>
    )
  }
}

export default App;
