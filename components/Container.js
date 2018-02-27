import React from 'react';

export default (props) => (
  <div
    style={props.style}
    className={`
      container my-4
      ${props.alignCenter ? 'align-items-center ' : ''}
      ${props.flex ? 'd-flex ' : ''}
    `}
  >
    {props.children}
  </div>
);