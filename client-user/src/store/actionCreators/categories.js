import {
  SET_CATEGORIES_SUCCESS,
  CATEGORY_LOADING,
  CATEGORY_ERROR,
} from '../actionTypes/categories';

export const setCategories = () => async (dispatch) => {
  dispatch({
    type: CATEGORY_LOADING,
    payload: true,
  });
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/categories`);
    if (response.ok) {
      const result = await response.json();
      dispatch({
        type: SET_CATEGORIES_SUCCESS,
        payload: result,
      });
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    };
  } catch (error) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: error,
    });
  };
}
