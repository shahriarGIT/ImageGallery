import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardFooter } from 'reactstrap';




const ImageItem = props => {

    const imageLink = "assets/images/";


    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardBody onClick={props.SelectedItem}>
                    <CardImg
                        width="100%"
                        alt={props.image.name}
                        src={imageLink + props.image.name + ".jpg"}
                        style={{ opacity: "1" }}
                        style={{ cursor: "pointer" }} />
                    <CardImgOverlay>

                    </CardImgOverlay>
                </CardBody>
                <CardFooter style={{ padding: "2%" }}>
                    Name :  {props.image.name}   <br />
                    Catagory :  {props.image.catagory}
                </CardFooter>
            </Card>
        </div>
    )
}


export default ImageItem;