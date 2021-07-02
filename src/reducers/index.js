import { combineReducers } from "redux";
import planetReducer from "./planetsReducer";
import vehicleReducer from "./vehiclesReducer";

export default combineReducers({
  planets: planetReducer,
  vehicles: vehicleReducer,
});
