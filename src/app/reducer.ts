
import { Action} from '@ngrx/store';
import { AppState } from './state';
import { INCREMENT,  DECREMENT} from './action';
const initState: AppState = { count: 0 };

export function counterReducer(state: AppState = initState, action: Action)         {
  switch (action.type) {
    case INCREMENT:
        return Object.assign({}, state, { count: state.count + 1 });
    case DECREMENT:
        return Object.assign({}, state, { count: state.count - 1 });
    default:
        return state;    
  }
}