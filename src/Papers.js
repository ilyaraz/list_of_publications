import React from 'react'
import Paper from './Paper'
import { Row, Col } from 'react-bootstrap'

class Papers extends React.Component {
    render() {
        return (
            <Row>
                <Col>
                    <ol>{this.props.papers.slice().filter(paper => paper.selected || !this.props.selected).reverse().map(paper => <li key={paper.key}><Paper paper={paper} selected={this.props.selected} /></li>)}</ol>
                </Col>
            </Row>
        )
    }
}

export default Papers;