import React, { Component } from 'react';
import { convertToRaw, EditorState } from 'draft-js';
import propTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';

class EditorWrapper extends Component {
  state = {
    editorState: EditorState.createEmpty()
  };

  convertToString = (editorState) => {
    return JSON.stringify(convertToRaw(editorState.getCurrentContent()));
  };

  setEditorReference = (ref) => {
    this.editorReferece = ref;
    if (ref) {
      ref.focus();
    }
  };

  handleEditorStateChange(editorState) {
    const { onChange } = this.props.input;
    const stringValue = this.convertToString(editorState);

    this.setState({ editorState });
    onChange(stringValue);
  }

  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        onEditorStateChange={this.handleEditorStateChange} />
    );
  }
}

EditorWrapper.propTypes = {
  onChange: propTypes.func.isRequired,
};

export default EditorWrapper;
