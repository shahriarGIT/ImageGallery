import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData, fetchComments } from '../../../redux/actionCreators';
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import ImageItem from "./ImageItem.js";
import FullImage from './FullImage';
import LoadComments from '../loadComments/LoadComments';
import CommentForm from '../commentForm/CommentForm.js';


const mapStateToProps = state => {
    return {
        images: state.images,
        token: state.token,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(fetchData()),
        fetchComments: () => dispatch(fetchComments())
    }
}



class Home extends Component {

    state = {
        selectedImage: null,
        modalOpen: false
    }


    componentDidMount = () => {


        this.props.fetchData();


        //this.props.fetchComments();
    }



    componentDidUpdate = () => {
        // this.props.fetchComments();
    }




    selectItemOnClick = item => {
        this.setState({ selectedImage: item, modalOpen: true })
    }

    toggleModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen })
    }

    render() {

        // console.log(this.props.images);

        let imageCards = this.props.images.map(item => {
            return (
                <ImageItem
                    image={item}
                    key={item.name}
                    SelectedItem={() => this.selectItemOnClick(item)}
                />
            )
        })

        let fullImage = null;
        if (this.state.selectedImage != null) {
            fullImage = <FullImage
                loggedInCheck={this.props.token}
                ToggleModal={() => this.selectItemOnClick()}
                item={this.state.selectedImage}
            />
        }

        return (
            <div className="container">
                <div className="row">
                    <CardColumns>
                        {imageCards}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen}>
                        <ModalBody>
                            {fullImage}

                        </ModalBody>
                        <LoadComments comments={this.props.comments} item={this.state.selectedImage} />
                        < CommentForm item={this.state.selectedImage} />
                        <Button color="secondary" onClick={this.toggleModal}>
                            Close
                        </Button>
                    </Modal>
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);

