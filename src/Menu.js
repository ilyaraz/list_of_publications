import React from 'react'
import {Link} from 'react-router-dom'

class Menu extends React.Component {

    render() {
        const menu = [{path: "/", text: "All"}, {path: "/selected", text: "Selected"}];
        return (
        <React.Fragment>
            {menu.map(item => this.props.currentPath === item.path ?
                <React.Fragment key={item.path}>{item.text}&nbsp;</React.Fragment> :
                <React.Fragment key={item.path}><Link to={item.path} onClick={this.props.setCurrentPath.bind(this, item.path)}>{item.text}</Link>&nbsp;</React.Fragment>)}
        </React.Fragment>)
    }
}

export default Menu;