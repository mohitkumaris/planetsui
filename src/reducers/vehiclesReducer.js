const INITIAL_STATE = [];

const vehiclesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_VEHICLES":
      return action.payload;

    default:
      return state;
  }
};
export default vehiclesReducer;
