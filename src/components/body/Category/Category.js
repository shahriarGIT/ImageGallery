import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData, fetchComments } from '../../../redux/actionCreators';
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import ImageItem from "../home/ImageItem";
import FullImage from '../home/FullImage';
import LoadComments from '../loadComments/LoadComments';
import CommentForm from '../commentForm/CommentForm';
import './Category.css';


const mapStateToProps = state => {
    return {
        images: state.images,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}



class Category extends Component {


    state = {
        selectedImage: null,
        modalOpen: false,
        categoryState: null,
    }


    componentDidMount = () => {


        this.props.fetchData();


        //this.props.fetchComments();
    }



    componentDidUpdate = () => {
        // this.props.fetchComments();

    }

    chooseCategory = category => {
        this.setState({ categoryState: category })
    }



    selectItemOnClick = item => {
        this.setState({ selectedImage: item, modalOpen: true })
    }

    toggleModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen })
    }

    render() {

        // console.log(this.props.images);

        let filteredImg = this.props.images.filter(item => item.catagory === this.state.categoryState)

        console.log(filteredImg);

        let imageCards = filteredImg.map(item => {
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
        console.log(this.state);
        return (
            <div className="container">
                <div>
                    <Button onClick={() => this.chooseCategory("nature")} style={{ padding: "0px", color: "#41729F", backgroundColor: "white", fontSize: "1.5rem", margin: "2% 3% 2% 0%" }} size="sm" className="button-css" > Nature</Button>
                    <Button onClick={() => this.chooseCategory("abstract")} style={{ padding: "0px", color: "#41729F", backgroundColor: "white", fontSize: "1.5rem", margin: "2% 3% 2% 0%" }} size="sm" className="button-css"> Abstract</Button>
                    <Button onClick={() => this.chooseCategory("animal")} style={{ padding: "0px", color: "#41729F", backgroundColor: "white", fontSize: "1.5rem", margin: "2% 3% 2% 0%" }} size="sm" className="button-css"> Animal</Button>
                </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Category);