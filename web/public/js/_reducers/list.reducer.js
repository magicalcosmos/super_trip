
const initialState = { data: {}};

export function listData(state = initialState, action) {
  switch (action.type) {
    case 'GET_DATA_SUCCESS':
      return {
        data: action.data
      };
    default:
      return state
  }
}