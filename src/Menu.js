import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './Menu.css'

class Menu extends React.Component {

    render() {
        return (
            <div>
                <Navbar bg="light" variant="light" className="nav-tabs">
                    <Nav className="navbar-nav mx-auto">
                        <Nav.Link onClick={this.props.setSelected.bind(this, true)} className={this.props.selected ? "active" : ""}>Selected</Nav.Link>
                        <Nav.Link onClick={this.props.setSelected.bind(this, false)} className={this.props.selected ? "" : "active"}>All</Nav.Link>
                    </Nav>
                </Navbar>
            </div>)
    }
}

export default Menu;