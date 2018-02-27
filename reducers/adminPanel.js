import api from '../api';

const initialState = {
  fetching: false,
};

const actionTypes = {
  FETCHING: 'FETCHING',
};

export const createPost = (data) => (dispatch) => {
  return api.createPost({});
};

const ACTION_HANDLERS = {
  [actionTypes.FETCHING]: (state, action) => state,
};

export default function adminPanel(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}