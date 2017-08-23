import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TagItem extends Component {
  constructor() {
    super(...arguments);

    this.state = {editing: false};

    this.edit = this.edit.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.remove = this.remove.bind(this);
    this.save = this.save.bind(this);
    this.stopEditing = this.stopEditing.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
  }

  edit() {
    this.setState({editing: true});
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      this.save(event);
    }
    else if (event.keyCode === 27) {
      this.stopEditing();
    }
  }

  remove() {
    this.props.removeTag(this.props.tag);
  }

  save(event) {
    if (this.state.editing) {
      const { tag } = this.props;
      const title = event.target.value.trim();

      if (title.length && title !== tag.title) {
        this.props.updateTag(tag, {title});
      }

      this.stopEditing();
    }
  }

  stopEditing() {
    this.setState({editing: false});
  }

  toggleStatus() {
    const { tag } = this.props;
    this.props.updateTag(tag, {completed: !tag.completed});
  }

  renderTitle(tag) {
    return (
      <div tabIndex="0">
        {tag.title}
      </div>
    );
  }

  renderTitleInput(tag) {
    return (
      <input
        autoComplete="off"
        autoFocus
        defaultValue={tag.title}
        maxLength="64"
        onKeyUp={this.handleKeyUp}
        type="text"
      />
    );
  }

  render() {
    const { editing } = this.state;
    const { tag } = this.props;


    return (
      <div tabIndex="0">
        <div>

        </div>

        <div>
          {editing ? this.renderTitleInput(tag) : this.renderTitle(tag)}
        </div>

        <div>

        </div>
      </div>
    );
  }
}

TagItem.propTypes = {
  tag: PropTypes.object.isRequired,
};

export default TagItem;
