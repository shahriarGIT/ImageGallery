import * as actionTypes from './actionTypes';
import axios from 'axios';

const loadImages = obj => {
    return {
        type: actionTypes.LOAD_IMAGES,
        payload: obj
    }
}

const imageLoadingToggle = () => {
    return {
        type: actionTypes.TOGGLE_IMAGE_LOADING,
    }
}

const imageLoadErr = bool => {
    return {
        type: actionTypes.ERROR_LOADING_IMAGE,
        payload: bool
    }
}


export const fetchData = () => dispatch => {
    dispatch(imageLoadingToggle());
    axios.get("https://imagegallery-72dca-default-rtdb.firebaseio.com/images.json")
        .then(response => {
            dispatch(imageLoadingToggle());
            dispatch(loadImages(response.data));
        })
        .catch(err => {
            dispatch(imageLoadErr(true))
        })

}
