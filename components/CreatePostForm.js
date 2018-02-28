import React, {Component} from "react";
import propTypes from "prop-types";
import { Field, reduxForm } from 'redux-form';
import EditorWrapper from '../components/EditorWrapper';

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
        </div>
      </form>
    );
  }
}

CreatePostForm.propTypes = {};

export default reduxForm({
  form: 'create-post-form',
})(CreatePostForm);
