import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavItem
} from 'reactstrap';

import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

const Navigation = props => {


    let nav = null;

    if (props.token === null) {
        nav = (


            <Nav className="mr-md-5">
                <NavItem>
                    <NavLink exact to="/Home" className="NavLink">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink exact to="/Login" className="NavLink">Login</NavLink>
                </NavItem>
            </Nav>

        )
    }
    else {
        nav = (

            <Nav className="mr-md-5">
                <NavItem>
                    <NavLink exact to="/Home" className="NavLink">Home</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink exact to="/Logout" className="NavLink">Logout</NavLink>
                </NavItem>
            </Nav>
        )
    }


    return (


        <div>

            <Navbar style={{ backgroundColor: "#000000", paddingTop: "20px" }}>
                <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">
                    <p>Image Gallery</p>
                </NavbarBrand>
                {nav}
            </Navbar>

        </div>


    )
}


export default connect(mapStateToProps)(Navigation);