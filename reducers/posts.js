import api from '../api';

const initialState = {
  posts: [],
};

const actionTypes = {
  GET_POSTS_SUCCESSFULL: 'GET_POSTS_SUCCESSFULL',
  GET_POSTS_FAIL: 'GET_POSTS_FAIL',
};

export const getPosts = () => (dispatch) => api.getPosts()
  .then((res) => {
    dispatch({
      type: actionTypes.GET_POSTS_SUCCESSFULL,
      payload: res.data.posts,
    })
  })
  .catch((err) => {
    dispatch({
      type: actionTypes.GET_POSTS_FAIL,
      payload: err,
    });
  });


const ACTION_HANDLERS = {
  [actionTypes.GET_POSTS_SUCCESSFULL]: (state, action) => {
    return action.payload;
  },
  [actionTypes.GET_POSTS_FAIL]: (state, action) => {
    return action.payload;
  },
};

export default function posts(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}