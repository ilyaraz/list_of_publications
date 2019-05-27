import React from 'react';
import './App.css';
import Papers from './Papers'
import data from './pubs.json'
import Menu from './Menu'
import { Container } from 'react-bootstrap'
import MathJax from 'react-mathjax2'

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
      <MathJax.Context
        input='ascii'
        onLoad={() => console.log("Loaded MathJax script!")}
        onError={(MathJax, error) => {
          console.warn(error);
          console.log("Encountered a MathJax error, re-attempting a typeset!");
          MathJax.Hub.Queue(
            MathJax.Hub.Typeset()
          );
        }}
        script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=AM_HTMLorMML"
        options={{
          asciimath2jax: {
            useMathMLspacing: true,
            delimiters: [["$", "$"]],
            preview: "none",
          }
        }}
      >
        <Container>
          <Papers selected={this.state.selected} papers={this.state.papers} />
        </Container>
      </MathJax.Context>
    </div>)
  }
}

export default App;
