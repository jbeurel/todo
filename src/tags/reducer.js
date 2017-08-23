import { List, Record } from 'immutable';
import { tagActions } from './actions';


export const TasksState = new Record({
  list: new List()
});


export function tagsReducer(state = new TasksState(), {payload, type}) {
  switch (type) {
    case tagActions.CREATE_TAG_FULFILLED:
      return state.set('list', state.list.unshift(payload.tag));

    case tagActions.FILTER_TAGS:
      return state.set('filter', payload.filterType || '');

    case tagActions.LOAD_TAGS_FULFILLED:
      return state.set('list', new List(payload.tags.reverse()));

    case tagActions.REMOVE_TAG_FULFILLED:
      return state.set('list', state.list.filter(tag => {
        return tag.key !== payload.tag.key;
      }));

    case tagActions.UPDATE_TAG_FULFILLED:
      return state.set('list', state.list.map(tag => {
        return tag.key === payload.tag.key ? payload.tag : tag;
      }));

    default:
      return state;
  }
}
