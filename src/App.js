import React from 'react';
import './App.css';
import Papers from './Papers'

class App extends React.Component {

  state = {
    papers: [
      {
        title: "Triangle-Free 2-Matchings Revisited",
        authors: ["Maxim Babenko", "Alexey Gusakov", "Ilya Razenshteyn"]
      },
      {
        title: "Not Every Domain of a Plain Decompressor Contains the Domain of a Prefix-Free One",
        authors: ["Mikhail Andreev", "Ilya Razenshteyn", "Alexander Shen"]
      },
      {
        title: "An Exact Combinatorial Algorithm for Minimum Graph Bisection",
        authors: ["Daniel Delling", "Daniel Fleischman", "Andrew Goldberg", "Ilya Razenshteyn", "Renato Werneck"]
      },
      {
        title: "Restricted Isometry Property for General p-Norms",
        authors: ["Zeyuan Allen-Zhu", "Rati Gelashvili", "Ilya Razenshteyn"]
      }
    ]
  }

  render() {
    console.log(this.state)
    return (<div className="App">
      <Papers papers={this.state.papers}/>
    </div>)
  }
}

export default App;
