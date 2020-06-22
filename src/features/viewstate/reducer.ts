import { ViewstateActions } from './definitions';
import { ViewstateState, ViewstateActionTypes } from './types';

const initialState: ViewstateState = {};

const removeFromObject = (obj: any, prop: string) => {
  let { [prop]: omit, ...res } = obj;
  return res;
};

export const viewstateReducer = (state = initialState, action: ViewstateActionTypes): ViewstateState => {
  switch (action.type) {
    case ViewstateActions.set:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case ViewstateActions.remove:      
        const newState = removeFromObject(state, action.payload.key)
        return newState
    default:
      return state;
  }
};
