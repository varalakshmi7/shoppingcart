import { Action} from '@ngrx/store';
export const INCREMENT: string = '[Counter] INCREMENT';
export class increment implements Action{
   readonly type = INCREMENT;
}

export const DECREMENT: string = '[Counter] DECREMENT';
export class decrement implements Action{
    readonly type = DECREMENT;
}

export type All
    = increment
    | decrement;