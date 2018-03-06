import api from '../api';

const initialState = {
  fetching: false,
};

const actionTypes = {
  FETCHING: 'FETCHING',
};

export const createPost = (values) => (dispatch) => api.saveImage(values.imageDropzone)
  .then((res) => {
    console.log('res', res);
    // const { image } = res.data;
    // const { imageDropzone, ...rest } = values;
    // return api.createPost({ ...rest, image });
  });

const ACTION_HANDLERS = {
  [actionTypes.FETCHING]: (state, action) => state,
};

export default function adminPanel(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}