export const tagActions = {
  CREATE_TAG: 'CREATE_TAG',
  CREATE_TAG_FAILED: 'CREATE_TAG_FAILED',
  CREATE_TAG_FULFILLED: 'CREATE_TAG_FULFILLED',

  REMOVE_TAG: 'REMOVE_TAG',
  REMOVE_TAG_FAILED: 'REMOVE_TAG_FAILED',
  REMOVE_TAG_FULFILLED: 'REMOVE_TAG_FULFILLED',

  UPDATE_TAG: 'UPDATE_TAG',
  UPDATE_TAG_FAILED: 'UPDATE_TAG_FAILED',
  UPDATE_TAG_FULFILLED: 'UPDATE_TAG_FULFILLED',

  FILTER_TAGS: 'FILTER_TAGS',
  LOAD_TAGS_FULFILLED: 'LOAD_TAGS_FULFILLED',


  createTag: title => ({
    type: tagActions.CREATE_TAG,
    payload: {tag: {title}}
  }),

  createTagFailed: error => ({
    type: tagActions.CREATE_TAG_FAILED,
    payload: {error}
  }),

  createTagFulfilled: tag => ({
    type: tagActions.CREATE_TAG_FULFILLED,
    payload: {tag}
  }),

  removeTag: tag => ({
    type: tagActions.REMOVE_TAG,
    payload: {tag}
  }),

  removeTagFailed: error => ({
    type: tagActions.REMOVE_TAG_FAILED,
    payload: {error}
  }),

  removeTagFulfilled: tag => ({
    type: tagActions.REMOVE_TAG_FULFILLED,
    payload: {tag}
  }),

  updateTag: (tag, changes) => ({
    type: tagActions.UPDATE_TAG,
    payload: {tag, changes}
  }),

  updateTagFailed: error => ({
    type: tagActions.UPDATE_TAG_FAILED,
    payload: {error}
  }),

  updateTagFulfilled: tag => ({
    type: tagActions.UPDATE_TAG_FULFILLED,
    payload: {tag}
  }),

  filterTags: filterType => ({
    type: tagActions.FILTER_TAGS,
    payload: {filterType}
  }),

  loadTagsFulfilled: tags => ({
    type: tagActions.LOAD_TAGS_FULFILLED,
    payload: {tags}
  })
};
