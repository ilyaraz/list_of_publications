import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav} from 'react-bootstrap'
import './Menu.css'

class Menu extends React.Component {

    render() {
        return (<div><Navbar bg="dark" variant="dark"><Nav class="navbar-nav mx-auto"><LinkContainer to="/"><Nav.Link>All</Nav.Link></LinkContainer><LinkContainer to="/selected"><Nav.Link>Selected</Nav.Link></LinkContainer></Nav></Navbar></div>)
    }
}

export default Menu;