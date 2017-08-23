import { FirebaseList } from 'src/firebase';
import { tagActions } from './actions';
import { Tag } from './tag';


export const tagList = new FirebaseList({
  onAdd: tagActions.createTagFulfilled,
  onChange: tagActions.updateTagFulfilled,
  onLoad: tagActions.loadTagsFulfilled,
  onRemove: tagActions.removeTagFulfilled
}, Tag);
