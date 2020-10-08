const bookReducer = (state = [], actions) => {
  switch(actions.type) {
    case CREATE_BOOK:
      return [...state, action.book]
    case REMOVE_BOOK:
      return []
    default:
      return state
  }
}
