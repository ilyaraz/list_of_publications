import React from 'react';
import './App.css';
import Papers from './Papers'
import data from './pubs.json'
import Menu from './Menu'
import { Container } from 'react-bootstrap'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: true,
      papers: data
    }
  }

  setSelected = (b) => {
    this.setState({ ...this.state, selected: b });
  }

  render() {
    return (<div className="App">
      <Menu selected={this.state.selected} setSelected={this.setSelected} />
      <Container>
        <Papers selected={this.state.selected} papers={this.state.papers} />
      </Container>
    </div>)
  }
}

export default App;
