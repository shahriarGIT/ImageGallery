import React, { Component } from 'react';
import Header from './header/Header.js';
import Home from "./body/home/Home.js"
import Login from './body/login/Login.js';
import Signup from './body/login/Signup.js';
import Logout from './body/login/Logout';

import { connect } from "react-redux";
import { authCheck } from "../redux/authCreators"

import { Route, Redirect, Switch } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        token: state.token,

    }
}

const mapDispatchToProps = () => dispatch => {
    return {
        authCheck: () => dispatch(authCheck())
    }
}



class Main extends Component {

    componentDidMount = () => {
        this.props.authCheck();
    }




    render() {
        let routes = null;

        if (this.props.token === null) {
            routes = (
                <Switch>
                    <Route path="/Home" component={Home} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Signup" component={Signup} />
                    <Route to="/" exact component={Home} />
                    <Redirect to="/" />
                </Switch>
            )
        }
        else {
            routes = (
                <Switch>
                    <Route path="/Home" component={Home} />
                    <Route path="/logout" component={Logout} />
                    <Route to="/" exact component={Home} />
                    <Redirect to="/" />
                </Switch>
            )
        }

        return (
            <div>
                <Header />
                {routes}

            </div>

        )

    }



}

export default connect(mapStateToProps, mapDispatchToProps)(Main);