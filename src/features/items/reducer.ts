import ZeldaItems from 'data/items';
import { ItemsState, ItemsActionTypes } from './types';
import { ItemsActions } from './definitions';

const initialState: ItemsState = {
  items: ZeldaItems,
  inspect: null,
  category: 'weapons',
};

export const itemsReducer = (state = initialState, action: ItemsActionTypes): ItemsState => {
  switch (action.type) {  
    case ItemsActions.changeCategory:
      return {
        ...state,
        inspect: null,
        category: action.payload.category
      }

    case ItemsActions.inspectItem:
      return {
        ...state,
        inspect: action.payload.itemIndex
      }
    default:
      return state;
  }
};
