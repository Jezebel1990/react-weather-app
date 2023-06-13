const initialState = {
  shared: false,
};

const shareReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHARE_PAGE':
      return {
        ...state,
        shared: true,
      };
    default:
      return state;
  }
};

export default shareReducer;
