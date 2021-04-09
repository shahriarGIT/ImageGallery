import React, { Component } from 'react';
import { Formik } from 'formik';
import Spinner from '../../spinner/Spinner';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import { auth } from "../../../redux/authCreators"


const mapDispatchToProps = dispatch => {
    return {
        auth: (email, password, mode) => dispatch(auth(email, password, mode))
    }
}

class Login extends Component {

    state = {
        mode: "Login"
    }

    goToSignUp = () => {
        this.props.history.push("/Signup")
    }





    render() {


        return (
            <div>
                <Formik
                    initialValues={
                        {
                            email: "",
                            password: "",

                        }
                    }

                    onSubmit={
                        (values) => {
                            this.props.auth(values.email, values.password, this.state.mode)
                        }
                    }

                    validate={
                        (values) => {
                            const errors = {};

                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                errors.email = 'Invalid email address';
                            }

                            if (!values.password) {
                                errors.password = 'Required';
                            } else if (values.password.length < 4) {
                                errors.password = 'Must be atleast 4 characters!';
                            }


                            //console.log("Errors:", errors)
                            return errors;
                        }}
                >
                    {({ values, handleChange, handleSubmit, errors }) => (

                        <div>
                            <div style={{
                                border: "1px grey solid",
                                padding: "15px",
                                borderRadius: "7px",
                                textAlign: "center",
                                margin: "1% 20%",

                            }}>

                                <form onSubmit={handleSubmit}>
                                    <input
                                        name="email"
                                        placeholder="Enter Your Email"
                                        className="form-control"
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                    <span style={{ color: "red" }}>{errors.email}</span>
                                    <br />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className="form-control"
                                        value={values.password}
                                        onChange={handleChange}
                                    />
                                    <span style={{ color: "red" }}>{errors.password}</span>


                                    <br />

                                    <button type="submit" className="btn btn-success">Submit</button>
                                </form>


                            </div>
                            <Button color="primary" className="ml-1" onClick={this.goToSignUp}>Sign Up</Button>

                        </div>
                    )}




                </Formik>


            </div>
        )
    }
}


export default connect(null, mapDispatchToProps)(Login);