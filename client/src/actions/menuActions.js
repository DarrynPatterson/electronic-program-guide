import { MENU_ITEM_SELECTED } from "./types";

export const setSelectedItem = selectedItem => dispatch => {
  dispatch({
    type: MENU_ITEM_SELECTED,
    payload: selectedItem
  });
};