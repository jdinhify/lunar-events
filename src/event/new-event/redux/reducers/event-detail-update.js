export const eventDetailUpdateReducer = (state, {name, value}) => ({
  ...state,
  [name]: value
})

export default eventDetailUpdateReducer
