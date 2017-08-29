import React from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TagList from 'src/views/components/tag-list';
import AdminOnRest from 'src/views/components/admin-on-rest';

import { tagActions, getTags } from 'src/tags';

const TagsPage = ({tags}) => {

  return (
    <div>
        <h1>TagList</h1>
        <TagList
            tags={tags}
        />
        <AdminOnRest/>
    </div>
  );
};

TagsPage.propTypes = {
    tags: PropTypes.instanceOf(List)
};


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = state => ({
    tags: getTags(state)
});

const mapDispatchToProps = {
    createTag: tagActions.createTag,
    removeTag: tagActions.removeTag,
    updateTag: tagActions.updateTag
};

export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(TagsPage);
