const filter = (state = 'All', action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.category;
    default:
      return state;
  }
};

export default filter;
