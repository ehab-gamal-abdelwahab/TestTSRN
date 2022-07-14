import actionTypes from '../actions/actionTypes';

const initialstate = {
    loading: false,
};

type Action = {
    type: string,
    payload?: any
}

export const uiReducer = (state: any = initialstate, action: Action) => {
    switch (action.type) {
        case actionTypes.LOAD_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.LOAD_STOP:
            return{
                ...state,
                loading: false
            }
        default:
            return state;
    }
};