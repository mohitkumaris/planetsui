const INITIAL_STATE = [];

const planetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_PLANETS":
      return [{ name: "Select", distance: 0 }, ...action.payload];

    default:
      return state;
  }
};
export default planetReducer;
