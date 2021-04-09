
import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
    images: [],
    imageLoading: false,
    imageLoadFailedMsg: false,

    comments: [],
    commentLoading: false,
    commentLoadFailedMsg: null,

    token: null,
    userId: null,
    authLoading: false,
    authFailedMsg: null,
}


export const reducer = (state = INITIAL_STATE, action) => {




    switch (action.type) {
        case actionTypes.LOAD_IMAGES:
            return {
                ...state,
                images: action.payload
            }
        case actionTypes.ERROR_LOADING_IMAGE:
            return {
                ...state,
                imageLoadFailedMsg: action.payload,
                imageLoading: false
            }
        case actionTypes.TOGGLE_IMAGE_LOADING:
            return {
                ...state,
                imageLoading: !state.imageLoading,
            }


        // Auth
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
            }
        case actionTypes.AUTH_LOADING:
            return {
                ...state,
                authLoading: action.payload
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                authFailedMsg: action.payload
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                userId: null,
            }

        default:
            return state;
    }




}