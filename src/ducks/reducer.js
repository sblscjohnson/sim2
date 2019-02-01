const initialState = {
  header: 'hello'
}

const UPDATE_HEADER = 'UPDATE_HEADER';

function reducer(state = initialState, action) {
  switch(action.type){
    case UPDATE_HEADER:
    return Object.assign({}, state, {header: action.payload});
    default: return state;
  }
}

export const updateHeader = (header) => {
  return {
    type: UPDATE_HEADER,
    payload: header
  }
}

export default reducer