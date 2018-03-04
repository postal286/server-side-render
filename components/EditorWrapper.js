import React, { Component } from 'react';
import { convertToRaw, EditorState, convertToHtml } from 'draft-js';
import propTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import ReactHtmlParser from 'react-html-parser';
import draftToHtml from 'draftjs-to-html';
import { Button } from 'reactstrap';

class EditorWrapper extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    string: '',
    preview: false,
  };

  convertToString = (editorState) => {
    this.setState({
      string: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
    return JSON.stringify(convertToRaw(editorState.getCurrentContent()));
  };

  setEditorReference = (ref) => {
    this.editorReferece = ref;
    if (ref) {
      ref.focus();
    }
  };

  togglePreview = () => {
    this.setState({
      preview: !this.state.preview,
    });
  };

  handleEditorStateChange = (editorState) => {
    const { onChange } = this.props.input;
    const stringValue = this.convertToString(editorState);

    this.setState({ editorState });
    onChange(stringValue);
  };

  render() {
    const { meta: { touched, error } } = this.props;
    return (
      <div>
        <div className="mb-4">
          <Editor
            editorRef={this.setEditorReference}
            editorState={this.state.editorState}
            onEditorStateChange={this.handleEditorStateChange}
          />
        </div>
        {touched && error &&
          <div className="text-danger font-weight-light mb-3">{error}</div>
        }
        <div className="mb-4">
          To Show Post Preview click "Show Preview".
        </div>
        <Button
          type="button"
          className={`btn btn-${this.state.preview ? 'danger' : 'success'} mb-4 d-block`}
          onClick={() => this.togglePreview()}
        >
          {this.state.preview ? 'Hide Preview' : 'Show Preview'}
        </Button>
        {this.state.preview &&
          <div>
            {ReactHtmlParser(this.state.string)}
          </div>
        }
      </div>
    );
  }
}

EditorWrapper.propTypes = {
  onChange: propTypes.func,
  createPost: propTypes.bool,
};

export default EditorWrapper;
