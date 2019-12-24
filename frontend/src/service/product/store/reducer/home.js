const initialState = {
  slogan: false,
  role: null,
  user: null,
  
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case type:
      return { ...state, ...payload }

  default:
      return state
  }
}