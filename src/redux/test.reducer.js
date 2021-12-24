const INITIAL_STATE = {
  test: 'testing mapStateToProps',
};

const testReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TEST_ACTION':
      return {
        ...state,
        test: action.payload,
      };
    default:
      return state;
  }
};

export default testReducer;
