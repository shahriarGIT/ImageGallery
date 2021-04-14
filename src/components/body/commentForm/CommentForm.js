import React, { Component } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { addComment, fetchComments, load } from '../../../redux/actionCreators';

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        load: (a, b, c) => dispatch(load(a, b, c))
    }
}

class CommentForm extends Component {






    render() {
        let bool = false;
        if (this.props.token !== null) {
            bool = true;
        }

        return (
            <div>
                <Formik
                    initialValues={
                        {
                            userName: "",
                            comment: ""
                        }
                    }

                    onSubmit={
                        (values, { setSubmitting, resetForm }) => {
                            //if (this.props.token !== null) {
                            addComment(this.props.item.name, values.userName, values.comment, this.props.token);


                            resetForm();


                            //this.props.load(this.props.item.name, values.userName, values.comment);

                            // }

                        }
                    }



                    validate={
                        (values) => {
                            const errors = {};
                            if (values.userName) {
                                if (this.props.token === null) {
                                    errors.userName = "Please Login to Add Comment";
                                }
                            }
                            else {
                                errors.userName = "Required"
                            }



                            // if (!values.email) {
                            //     errors.email = 'Required';
                            // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                            //     errors.email = 'Invalid email address';
                            // }

                            // if (!values.password) {
                            //     errors.password = 'Required';
                            // } else if (values.password.length < 6) {
                            //     errors.password = 'Must be atleast 6 characters!';
                            // }

                            // if (values.password !== values.confirmpass) {
                            //     errors.confirmpass = 'Password does not match!';
                            // }
                            // else if (!values.confirmpass) {
                            //     errors.confirmpass = 'Required';
                            // }


                            //console.log("Errors:", errors)
                            return errors;
                        }}
                >
                    {({ values, handleChange, handleSubmit, errors }) => (

                        <div
                            style={{
                                margin: "0% 5%",
                                textAlign: "center"
                            }}

                        >


                            <form onSubmit={handleSubmit}>
                                <input
                                    name="userName"
                                    placeholder="Your Name"
                                    className="form-control"
                                    value={values.userName}
                                    onChange={handleChange}
                                    style={{ marginBottom: "10px", width: "100%" }}
                                />

                                <input
                                    name="comment"
                                    placeholder="Add Comment"
                                    className="form-control"
                                    value={values.comment}
                                    onChange={handleChange}
                                    style={{ marginBottom: "10px" }}
                                />
                                <span style={{ color: "red", marginBottom: "5px" }}> {errors.userName} </span>
                                <br />

                                <button style={{ margin: "1% 0% 1% 0%" }} type="submit" className="btn btn-primary">Submit</button>


                            </form>





                        </div>
                    )}




                </Formik>
            </div >
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);