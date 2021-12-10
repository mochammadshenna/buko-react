import {
  SET_ITEMS_SUCCESS,
  SET_ITEM_DETAIL_SUCCESS,
  ITEM_LOADING,
  ITEM_ERROR,
} from '../actionTypes/items';

const initialState = {
  items: [],
  itemDetail: {},
  isLoading: false,
  error: null,
}

export default function items(state = initialState, action) {
  switch (action.type) {
    case SET_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        isLoading: false,
      };
    case SET_ITEM_DETAIL_SUCCESS:
      return {
        ...state,
        itemDetail: action.payload,
        isLoading: false,
      }
    case ITEM_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ITEM_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}