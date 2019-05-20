import React from 'react'
import Paper from './Paper'

class Papers extends React.Component {
    render() {
        return (
            <ol>{this.props.papers.reverse().map(paper => <li key={paper.key}><Paper paper={paper}/></li>)}</ol>
        )
    }
}

export default Papers;