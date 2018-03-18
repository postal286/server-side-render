import api from '../api';

import { setToken } from '../common';

const initialState = {
  fetching: false,
  token: undefined,
};

const actionTypes = {
  'FETCHING': 'FETCHING',
  'GET_TOKEN': 'GET_TOKEN',
};

export const loginAdmin = (credentials) => (dispatch) => {
  return new Promise ((resolve, reject) => {
    api.loginAdmin({
      email: credentials.email,
      password: credentials.password,
    })
      .then((res) => {
        dispatch({
          type: actionTypes.GET_TOKEN,
          payload: res.data.token,
        });
        setToken(res);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const ACTION_HANDLERS = {
  [actionTypes.GET_TOKEN]: (state, action) => ({ ...state, token: action.payload }),
  [actionTypes.FETCHING]: (state, action) => state,
};

export default function adminLogin(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}