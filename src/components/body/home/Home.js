import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../../redux/actionCreators';
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import ImageItem from "./ImageItem.js";
import FullImage from './FullImage';


const mapStateToProps = state => {
    return {
        images: state.images
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}


class Home extends Component {

    state = {
        selectedImage: null,
        modalOpen: false
    }

    componentDidMount = () => {
        this.props.fetchData();
    }

    selectItemOnClick = item => {
        this.setState({ selectedImage: item, modalOpen: true })
    }

    toggleModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen })
    }

    render() {

        console.log(this.props.images);

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
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggleModal}>
                                Close
                                </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);

