import React from 'react'
import Paper from './Paper'
import { Row, Col } from 'react-bootstrap'
import MathJax from 'react-mathjax2'


class Papers extends React.Component {
    render() {
        return (
            <Row>
                <Col>
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
                        <ol>{this.props.papers.slice().filter(paper => paper.selected || !this.props.selected).reverse().map(paper => <li key={paper.key}><Paper paper={paper} selected={this.props.selected} /></li>)}</ol>
                    </MathJax.Context>
                </Col>
            </Row>
        )
    }
}

export default Papers;