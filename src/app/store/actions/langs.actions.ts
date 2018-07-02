import { Action } from '@ngrx/store';
import { Lang } from '../models/lang.model';

export const SELECT = '[LANG] Select';
export const LIST = '[LANG] List';


export class SelectlangAction implements Action {
  readonly type = SELECT;

  constructor(public payload: string) { }
}

export class ListlangAction implements Action {
  readonly type = LIST;

  constructor(public payload: Lang[]) { }
}

export type Action = SelectlangAction | ListlangAction;
