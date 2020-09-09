export const ADD_FEATURE = "ADD_FEATURE"; //action type
export const REMOVE_FEATURE = "REMOVE_FEATURE";

// action suite
export const addFeature = (feature) => {
  //action creator
  return {
    //action
    type: ADD_FEATURE,
    payload: feature
  };
};

export const removeFeature = (feature) => {
    return{
        type: REMOVE_FEATURE,
        payload: feature
    }
}

