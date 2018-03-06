import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import ReactTooltip from 'react-tooltip';
import { Button } from 'reactstrap';
import moment from 'moment';
import propTypes from 'prop-types';

import EditorWrapper from './EditorWrapper';
import DateWrapper from './DateWrapper';
import InputBase from './InputBase';
import DropzoneWrapper from "./DropzoneWrapper";

const maxImageSize = 3000000;

const isEditorEmpty = (values) => {
  if (values.body) {
    const arrayOfStrings = JSON.parse(values.body).blocks;
    for (let i = 0; i < arrayOfStrings.length; i += 1) {
      if (arrayOfStrings[i].text.trim()) {
        return false;
      }
    }
    return true;
  }
};

const validate = (values) => {
  const errors = {};
  if (!values.title || (values.title && !values.title.trim())) {
    errors.title = 'Title Required';
  }
  if (isEditorEmpty(values)) {
    errors.body = 'Post Content Required';
  }
  console.log('values', values);
  if(values.imageDropzone && values.imageDropzone.size >= 3000000) {
    errors.imageDropzone = `Max File Size - 3000000 bytes,
    but ${values.imageDropzone.name} is ${values.imageDropzone.size} bytes.
    Please, choose file that satisfies the conditions.`
  }
  if(values.imageDropzone &&
    (values.imageDropzone.type.toLowerCase() !== 'image/png'
      && values.imageDropzone.type.toLowerCase() !== 'image/jpg'
      && values.imageDropzone.type.toLowerCase() !== 'image/jpeg')) {
    errors.imageDropzone = `Alowed file extension is *.png or *.jpg,
    but ${values.imageDropzone.name} has another. Please, choose file that satisfies the conditions.`
  }
  return errors;
};

class CreatePostForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="row mb-3">
          <div className="col-lg-6">
            <div className="mb-3">
              Post Title <a data-tip="React-tooltip" className="text-danger"> * </a>

              <ReactTooltip place="top" type="error" effect="solid">
                This field is Required
              </ReactTooltip>
            </div>
            <div className="mb-3">
              <Field
                type="text"
                name="title"
                defaultValue="Admin"
                placeholder="Post Title..."
                component={InputBase}
                className="mb-3 p-2"
              />
            </div>
            <div className="mb-3">
              Post Author
            </div>
            <div className="mb-3">
              <Field
                type="text"
                name="author"
                placeholder="Post Author..."
                component={InputBase}
                className="mb-3 p-2"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              Post Description
            </div>
            <div className="mb-3">
              <Field
                type="textarea"
                style={{ height: '140px', resize: 'none' }}
                name="description"
                placeholder="Post Description..."
                component={InputBase}
                className="mb-3 p-2"
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <Field
            name="body"
            component={EditorWrapper}
          />
        </div>
        <div className="mb-3">
          <Field
            name="imageDropzone"
            maxSize={maxImageSize}
            style={{
              textAlign: 'center',
              border: '1px dashed #333',
              padding: '15px',
              marginBottom: '1rem',
            }}
            component={DropzoneWrapper}
          />
        </div>
        <div className="mb-3">
          <Field
            id="created_at"
            name="created_at"
            component={DateWrapper}
          />
        </div>
        <div
          style={{ marginBottom: '6rem' }}
        >
          <Field
            id="publish"
            name="publish"
            type="checkbox"
            checkboxLabel="Publish"
            component={InputBase}
          />
        </div>
        <div
          style={{ marginBottom: '3rem' }}
          className="d-flex justify-content-center"
        >
          <Button
            type="submit"
            color="success"
            size="lg"
            className="w-25"
            disabled={this.props.submitting}
          >
            {this.props.submitting ? <i className="fa fa-spinner fa-spin" style={{ fontSize: '19px' }} /> : 'Save Post'}
          </Button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'create-post-form',
  validate,
  initialValues: {
    author: 'Admin',
    created_at: moment().format(),
  },
})(CreatePostForm);
