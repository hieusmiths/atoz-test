const initialState = {
  listCategory: false,  
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case type:
      return { ...state, ...payload }

  default:
      return state
  }
}
