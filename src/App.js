import React from 'react';
import './App.css';
import Papers from './Papers'
import data from './pubs.json'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Menu from './Menu'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPath: window.location.pathname,
      papers: data
    }
  }

  setCurrentPath = (path) => {
    this.setState({...this.state, currentPath: path});
  }

  render() {
    return (<div className="App">
      <Router>
        <Menu currentPath={this.state.currentPath} setCurrentPath={this.setCurrentPath}/>
        <Route exact path="/" render={props => <Papers papers={this.state.papers}/>}/>
        <Route exact path="/selected" render={props => <Papers papers={this.state.papers.filter(paper => paper.selected)}/>}/>
      </Router>
    </div>)
  }
}

export default App;
