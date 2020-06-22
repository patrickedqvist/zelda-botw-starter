import { ItemsCategory } from './types';
import { ItemsActions } from './definitions';

export const changeItemsCategory = (category: ItemsCategory) => ({
  type: ItemsActions.changeCategory,
  payload: { category },
});

export const inspectItem = (itemIndex: number) => ({
  type: ItemsActions.inspectItem,
  payload: { itemIndex },
});
