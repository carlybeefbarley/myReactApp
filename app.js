import React, { Component } from 'react';
import Projects from './components/projects';
import addProject from './components/addProject';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

componentWillMount() {
  this.setState({projects: [
    {
      title: 'Business website',
      category: 'Web Design'
    },
    {
      title: 'Social App',
      category: 'Mobile Development'
    },
    {
      title: 'Emcommerce Shopping Cart',
      category: 'Web Development'
    }
  ]});
}

  render() {
    return (
      <div className="App">
          <addProject />
          <Projects projects = {this.state.projects}/>
      </div>
    );
  }
}

export default App;
