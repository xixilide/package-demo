import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './App';
import Home from './home/home';
import Blog from './blog/blog';
import Work from './work/work';
import About from './About/About';
import Item from './Item/Item';
import Skill from './component/aboutskill';
import Hobby from './component/abouthobby';
import Story from './component/aboutstory';




export default class Routers extends React.Component{
  render(){
    return(
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute  component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
            <Route path="/about/skill" component={Skill} />
            <Route path="/about/hobby" component={Hobby} />
            <Route path="/about/story" component={Story} />

          <Route path="/item/:url" component={Item} />
        </Route>
      </Router>
    )
  }
}
