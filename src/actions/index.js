import planetsApi from "../api/planetsApi";

export const getPlanets = () => async (dispatch) => {
  const response = await planetsApi.get("/planets");

  dispatch({ type: "GET_PLANETS", payload: response.data });
};

export const getVehicles = () => async (dispatch) => {
  const response = await planetsApi.get("/vehicles");

  dispatch({ type: "GET_VEHICLES", payload: response.data });
};
