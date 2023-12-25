const initialState = {title: "", body: ""};
const SET_DATA = 'SET_DATA';

export interface Data {
  id: string;
  title: string;
  body: string;
}

interface GetFormAction {
  type: string;
  payload: Data;
}
const formReducer = (state = initialState, action: GetFormAction) => {
  switch (action.type) {
    case SET_DATA:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export const setData = (payload: Data) => {
  return {
    type: SET_DATA,
    payload
  }
}

export default formReducer;