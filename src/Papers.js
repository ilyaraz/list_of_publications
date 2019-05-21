import React from 'react'
import Paper from './Paper'
import { Container, Row, Col } from 'react-bootstrap'

class Papers extends React.Component {
    render() {
        return (
                <Row>
                    <Col>
                        <ol>{this.props.papers.slice().reverse().map(paper => <li key={paper.key}><Paper paper={paper} currentPath={this.props.currentPath}/></li>)}</ol>
                    </Col>
                </Row>
        )
    }
}

export default Papers;