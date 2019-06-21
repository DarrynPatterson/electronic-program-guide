import { MENU_ITEM_SELECTED } from "../actions/types";

const initialState = {
  selectedItem: "channels"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MENU_ITEM_SELECTED:
      return {
        ...state,
        selectedItem: action.payload
      };
    default:
      return state;
  }
};