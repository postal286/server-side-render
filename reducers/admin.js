const initialState = {};

const FETCH_DATA = 'FETCH_DATA';

const ACTION_HANDLERS = {
  [FETCH_DATA]: (state, action) => state,
};

export default function adminReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}