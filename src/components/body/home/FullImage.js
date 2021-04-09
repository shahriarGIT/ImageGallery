import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const FullImage = props => {

    const imageLink = "assets/images/";

    return (
        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg style={{ width: "100%" }} top src={imageLink + props.item.name + ".jpg"} alt={props.item.name} />

                <CardTitle style={{ textAlign: "center", padding: "2%" }}> <strong>{props.item.name.toUpperCase()}</strong></CardTitle>

            </Card>


        </div>
    )
}


export default FullImage;