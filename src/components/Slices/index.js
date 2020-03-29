import React from 'react';
import Embed from './Embed';
import Text from './Text';

const Slice = ({ type, primary }) => {
  switch (type) {
    case 'embed':
      return <Embed {...primary} />;
    case 'text':
      return <Text {...primary} />;
    default:
      return null;
  }
};

const Slices = ({ body }) => {
  return (
    <React.Fragment>
      {body.map((slice, index) => {
        return (
          <div>
            <Slice key={`slice-${index}`} {...slice}></Slice>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Slices;
