import axios from "axios";
import { GET_CHANNELS, CHANNELS_LOADING } from "./types";
import { returnErrors } from "./errorActions";

export const getChannels = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get("/api/channels")
    .then(res =>
      dispatch({
        type: GET_CHANNELS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setItemsLoading = () => {
  return {
    type: CHANNELS_LOADING
  };
};