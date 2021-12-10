import {
  SET_ITEMS_SUCCESS,
  SET_ITEM_DETAIL_SUCCESS,
  ITEM_LOADING,
  ITEM_ERROR,
} from '../actionTypes/items';

export const setItems = () => async (dispatch) => {
  dispatch({
    type: ITEM_LOADING,
    payload: true,
  });
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/items`);
    if (response.ok) {
      const result = await response.json();
      dispatch({
        type: SET_ITEMS_SUCCESS,
        payload: result,
      });
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    };
  } catch (error) {
    dispatch({
      type: ITEM_ERROR,
      payload: error,
    });
  };
}

export const setItemDetail = (payload) => async (dispatch) => {
  dispatch({
    type: ITEM_LOADING,
    payload: true,
  });
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/items/${payload}`);
    if (response.ok) {
      const result = await response.json();
      dispatch({
        type: SET_ITEM_DETAIL_SUCCESS,
        payload: result,
      });
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    };
  } catch (error) {
    dispatch({
      type: ITEM_ERROR,
      payload: error,
    });
  };
}