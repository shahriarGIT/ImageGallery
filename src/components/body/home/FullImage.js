import React from 'react';
import { Card, CardImg, CardBody, CardImgOverlay, CardTitle } from 'reactstrap';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {

    }
}

const FullImage = props => {

    const imageLink = "assets/images/";


    return (
        <div>
            <Card style={{ marginTop: "0px" }}>


                <CardImg style={{ width: "100%" }} top src={imageLink + props.item.name + ".jpg"} alt={props.item.name} />
                <CardTitle style={{ textAlign: "center", padding: "2%" }}> <strong>{props.item.name.toUpperCase()}</strong></CardTitle>


            </Card>


        </div>
    )
}


export default connect(mapStateToProps)(FullImage);