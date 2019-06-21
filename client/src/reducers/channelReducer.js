import { GET_CHANNELS, CHANNELS_LOADING } from "../actions/types";

const initialState = {
  channels: [],
  userPreferences: null,
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHANNELS:
      return {
        ...state,
        channels: action.payload.channels,
        userPreferences: action.payload.userPreferences,
        isLoading: false
      };
    case CHANNELS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
};