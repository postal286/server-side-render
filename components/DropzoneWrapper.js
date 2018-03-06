import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Button } from 'reactstrap';
import propTypes from 'prop-types';

class DropzoneWrapper extends Component {
  render() {
    const {
      meta: {
        error,
      },
      style,
      maxSize,
      multiple,
      className,
      input: {
        name,
        value,
        onChange,
      },
    } = this.props;
    const acceptColor = { color: '#28a745' };
    return (
      <section>
        <div className="dropzone">
          <Dropzone
            name={name}
            maxSize={maxSize}
            className={className}
            multiple={multiple}
            style={style}
            accept="image/jpeg, image/png"
            onDrop={(accepted, rejected) => {
              onChange(accepted && accepted[0] || rejected && rejected[0]);
            }}
          >
            <p style={{ margin: '0' }}>
              Add <b>*.jpeg</b> and <b>*.png</b> images to the post. Max <b>3 mb</b>(3 000 000 bytes).<br />
              Drop image into this area or click and choose file in your file system.
            </p>
          </Dropzone>
        </div>
        <aside className="mb-3">
          {value && !error &&
          <div>
            <h6 style={acceptColor}>Accepted Files</h6>
            <ul style={acceptColor}>
              <li>{value.name} - {value.size} bytes</li>
            </ul>
          </div>
          }
        </aside>
        {error &&
        <div className="text-danger font-weight-light mb-3">{error}</div>
        }
        <div>
          {value && value[0] &&
          <Button
            type="button"
            onClick={this.sendFile}
            className="btn btn-success mb-4 d-block btn btn-secondary"
          >
            Send File
          </Button>
          }
        </div>
      </section>
    );
  }
}

DropzoneWrapper.propTypes = {
  className: propTypes.string,
  multiple: propTypes.bool,
};

export default DropzoneWrapper;
