import { ItemType } from 'data/items.type';
import { ItemsActions } from './definitions';

export type ItemsCategory = 'weapons' | 'shields' | 'armors';

export interface ItemsState {
  items: {
    [key in ItemsCategory]: ItemType[];
  };
  inspect: number | null;
  category: ItemsCategory;
}


interface ChangeCategoryAction {
  type: ItemsActions.changeCategory;
  payload: {
    category: ItemsCategory;
  };
}

interface InspectItemAction {
  type: ItemsActions.inspectItem;
  payload: {
    itemIndex: number;
  };
}

export type ItemsActionTypes = ChangeCategoryAction | InspectItemAction
