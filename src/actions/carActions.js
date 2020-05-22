export const ADD_FEATURES = 'ADD_FEATURES';
export const REMOVE_FEATURES = 'REMOVE_FEATURES';

export const addFeatures = (features) => {
    return {
        type: ADD_FEATURES,
        payload: features
    }
}

export const removeFeatures = (features) => {
    return {
        type: REMOVE_FEATURES,
        payload: features
    }
}

