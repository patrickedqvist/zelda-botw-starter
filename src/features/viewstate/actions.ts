import { ViewstateActions } from './definitions';
import { ViewstateActionTypes } from './types';

export const setViewstate = (key: string, value: string): ViewstateActionTypes => ({
  type: ViewstateActions.set,
  payload: { key, value },
});

export const removeViewstate = (key: string): ViewstateActionTypes => ({
  type: ViewstateActions.remove,
  payload: { key },
});
