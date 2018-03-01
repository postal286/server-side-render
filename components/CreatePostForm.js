import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import EditorWrapper from '../components/EditorWrapper';
import DateWrapper from '../components/DateWrapper';
import propTypes from 'prop-types';

class CreatePostForm extends Component {
  render() {
    return (
      <form>
        <div className="mb-3">
          <Field
            name="editor"
            component={EditorWrapper}
          />
        </div>
        <div>
          Select the Date
          <Field
            name="date"
            component={DateWrapper}
          />
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'create-post-form',
})(CreatePostForm);
