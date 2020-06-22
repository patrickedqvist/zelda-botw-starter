import { setViewstate, removeViewstate } from './actions';
import { ViewstateActions } from './definitions';

export interface ViewstateState {
  [key: string]: string | number;
}

interface SetViewstateAction {
  type: ViewstateActions.set;
  payload: {
    key: string;
    value: string | number;
  };
}

interface RemoveViewstateAction {
  type: ViewstateActions.remove;
  payload: {
    key: string;
  };
}

export type ViewstateActionTypes = SetViewstateAction | RemoveViewstateAction;
