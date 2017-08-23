export function getTags(state) {
  return state.tags;
}

export function getTagFilter(state) {
  return getTags(state).filter;
}

export function getTagList(state) {
  return getTags(state).list;
}
