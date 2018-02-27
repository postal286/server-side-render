import api from '../api';

const initialState = {
  fetching: false,
};

const actionTypes = {
  FETCHING: 'FETCHING',
};

export const loginAdmin = (credentials) => (dispatch) => {
  dispatch({
    type: actionTypes.FETCHING,
    payload: true,
  });
  return api.loginAdmin({
    email: credentials.email,
    password: credentials.password,
  });
};

const ACTION_HANDLERS = {
  [actionTypes.FETCHING]: (state, action) => state,
};

export default function adminReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}