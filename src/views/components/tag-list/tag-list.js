import React from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import TagItem from '../tag-item';


const TagList = ({tags}) => {
  let tagItems = tags.map((tag, index) => {
    return (
      <TagItem
        key={index}
        tag={tag}
      />
    );
  });

  return (
    <div>
      {tagItems}
    </div>
  );
};

TagList.propTypes = {
  tags: PropTypes.instanceOf(List)
};


export default TagList;
