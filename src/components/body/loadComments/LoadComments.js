import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../../redux/actionCreators';
import ImageItem from '../home/ImageItem';

const mapStateToProps = state => {
    return {
        comments: state.comments,
        commentsLoading: state.commentsLoading,
        commentLoadFailedMsg: state.commentLoadFailedMsg,
        token: state.token
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchComments: (token) => dispatch(fetchComments(token))
    }
}


const Comments = props => {


    return (
        <div style={{ padding: "0% 8%" }}>
            <p><strong>Name :</strong> {props.item.userName}</p>
            <p><strong> Comment :</strong> {props.item.comment}</p>
            <hr />
        </div>

    )



}


class LoadComments extends Component {

    state = {
        latestCom: this.props.comments
    }

    componentDidMount = () => {
        //console.log(this.props.item.name);
        // this.props.fetchComments();
        // if (c === 0) {
        this.props.fetchComments();
        //console.log("1");

        // }
        //this.setState({ latestCom: this.props.comments })

        //console.log("mount", this.state.latestCom);



    }



    componentDidUpdate = (prevProps, prevState) => {
        // if (this.props.comments.length === this.state.latestCom.length) {
        //if (c !== 0) {
        //this.props.fetchComments();
        //console.log("2");
        //}

        //}
        // if (prevState.latestCom.length != this.state.latestCom.length) {
        //this.props.fetchComments();
        // }
        // console.log("updated mount", this.state.latestCom);
        // console.log("length", this.state.latestCom.length);
        //this.setState({ latestCom: this.props.comments })
        // if (this.state.latestCom.length != this.props.comments.length) {
        this.props.fetchComments();

        //}


    }



    render() {
        //let filteredComments = this.state.latestCom.filter(item => item.imageName === this.props.item.name)

        let filteredComments = this.props.comments.filter(item => item.imageName === this.props.item.name)
        //console.log("filtered", filteredComments);
        let comments = filteredComments.map(item => {
            return (

                <Comments item={item} key={Math.random()} />


            )

        })

        return (
            <div>
                {comments}
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoadComments);