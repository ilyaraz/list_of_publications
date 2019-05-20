import React from 'react'
import {Link} from 'react-router-dom'

class Menu extends React.Component {
    render() {
        return <React.Fragment><Link to="/">All</Link> | <Link to="/selected/">Selected</Link></React.Fragment>
    }
}

export default Menu;