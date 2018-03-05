import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import propTypes from 'prop-types';

class DropzoneWrapper extends Component {
  state = {
    accepted: [],
    rejected: []
  };

  render() {
    const { multiple, className, style } = this.props;
    return (
      <section>
        <div className="dropzone">
          <Dropzone
            className={className}
            multiple={multiple}
            style={style}
            accept="image/jpeg, image/png"
            onDrop={(accepted, rejected) => { this.setState({ accepted, rejected }); }}
          >
            <p style={{ margin: '0' }}>
              Add *.jpeg and *.png images to the post.<br />
              Drag files into this area or click and choose file in your computer
            </p>
          </Dropzone>
        </div>
        <aside>
          {!!this.state.accepted.length &&
          <div>
            <h6>Files</h6>
            <ul>
              {
                this.state.accepted.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
              }
            </ul>
          </div>
          }
          {!!this.state.rejected.length &&
          <div>
            <h6>Rejected files</h6>
            <ul>
              {
                this.state.rejected.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
              }
            </ul>
          </div>
          }
        </aside>
      </section>
    );
  }
}

DropzoneWrapper.propTypes = {
  className: propTypes.string,
  multiple: propTypes.bool,
};

export default DropzoneWrapper;
