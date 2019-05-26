import React from 'react'
import './Paper.css'
import MathJax from 'react-mathjax2'


class Paper extends React.Component {
    render() {
        const { title, authors, venue, year, links, lines } = this.props.paper;
        const processedLinks = links.filter(link => link.main).map(link => <a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>);
        const processedLinksWithCommas = [];
        for (let i = 0; i < processedLinks.length; ++i) {
            processedLinksWithCommas.push(processedLinks[i]);
            if (i !== processedLinks.length - 1) {
                processedLinksWithCommas.push(", ");
            }
        }
        const renderedAuthors = authors.map(author => <React.Fragment key={author}>{getShortAuthor(author)}, </React.Fragment>);
        const processedLines = this.props.selected ? [] : [lines.map(line => <React.Fragment><br />{line.emph ? <span class="emph-line">{line.text}</span> : line.text}</React.Fragment>)];
        return <MathJax.Text inline text={<React.Fragment>{renderedAuthors}<b>&ldquo;{title}&rdquo;</b>, {venue},&nbsp;{year}&nbsp;({processedLinksWithCommas}).{processedLines}</React.Fragment>} />
    }
}

const getShortAuthor = (author) => {
    const tok = author.split(' ');
    const lastName = tok[tok.length - 1];
    let result = "";
    for (let i = 0; i < tok.length - 1; ++i) {
        result += tok[i][0];
        result += ".";
    }
    result += " ";
    result += lastName;
    return result;
}

export default Paper;