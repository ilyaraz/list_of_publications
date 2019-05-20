import React from 'react'

class Paper extends React.Component {
    render() {
        const authors = this.props.paper.authors.map(author => <React.Fragment>{getShortAuthor(author)}, </React.Fragment>);
        return <React.Fragment>{authors}<b>&ldquo;{this.props.paper.title}&rdquo;</b></React.Fragment>
    }
}

const getShortAuthor = (author) => {
    const tok = author.split(' ');
    const lastName = tok[tok.length - 1];
    var result = "";
    for (var i = 0; i < tok.length - 1; ++i) {
        result += tok[i][0];
        result += ".";
    }
    result += " ";
    result += lastName;
    return result;
}

export default Paper;