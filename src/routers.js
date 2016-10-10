import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './App';
import Home from './home/home';
import Blog from './blog/blog';
import Work from './work/work';
import About from './About/About';
import Item from './Item/Item';
import Skill from './About/component/aboutskill';
import Hobby from './About/component/abouthobby';
import Story from './About/component/aboutstory';


import NewPost from './About/component/posts/NewPost';
import EditPost from './About/component/posts/EditPost';
import ShowPost from './About/component/posts/ShowPost';



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
               <Route path='/write' component={NewPost} />
                 <Route path='/post/:id' component={ShowPost} />
                 <Route path='/post/:id/new' component={EditPost} />
          <Route path="/item/:url" component={Item} />
        </Route>
      </Router>
    )
  }
}
