import React from 'react';
import './App.css';
import Papers from './Papers'
import data from './pubs.json'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Menu from './Menu'
import { Container } from 'react-bootstrap'

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
        <Container>
        <Route exact path="/" render={props => <Papers papers={this.state.papers} currentPath={this.state.currentPath}/>}/>
        <Route exact path="/selected" render={props => <Papers papers={this.state.papers.filter(paper => paper.selected)}/>}/>
        </Container>
      </Router>
    </div>)
  }
}

export default App;
