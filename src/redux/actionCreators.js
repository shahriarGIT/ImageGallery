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


// Comments 

export const load = (imageName, userName, comment) => dispatch => {

    addComment(imageName, userName, comment);

    dispatch(fetchComments());

}

export const addComment = (imageName, userName, comment, token) => {

    const data = {
        imageName: imageName,
        userName: userName,
        comment: comment,
    }

    axios.post("https://imagegallery-72dca-default-rtdb.firebaseio.com/comments.json?auth=" + token, data)
        .then(response => {
            //  console.log(response.config.data)

        })
        .catch(err => {
            console.log("error no auth");
        })

}


export const commentsLoading = bool => {
    return {
        type: actionTypes.COMMENTS_LOADING,
        payload: bool
    }
}

export const loadComments = comments => {
    return {
        type: actionTypes.LOAD_COMMENTS,
        payload: comments
    }
}

export const fetchComments = () => dispatch => {
    //dispatch(commentsLoading(true));


    //const queryParams = '&orderBy="comments"&equalTo="' + imageName + '"';

    axios.get("https://imagegallery-72dca-default-rtdb.firebaseio.com/comments.json?")
        .then(response => {
            //dispatch(commentsLoading(false));

            //console.log(response.data);

            let arr = [];
            for (let key in response.data) {

                arr.push({
                    ...response.data[key],
                    id: key
                })
            }

            dispatch(loadComments(arr));

        })
        .catch(err => {
            console.log("error here");
        })
}



