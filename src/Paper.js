import React from 'react'

class Paper extends React.Component {
    render() {
        const {key, title, authors, venue, year} = this.props.paper;
        const renderedAuthors = authors.map(author => <React.Fragment key={author}>{getShortAuthor(author)}, </React.Fragment>);
        return <React.Fragment key={key}>{renderedAuthors}<b>&ldquo;{title}&rdquo;</b>, {venue}, {year}.</React.Fragment>
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