import React from 'react';
import Embed from './Embed';
import Text from './Text';
import Image from './Image';

const Slice = ({ type, primary }) => {
  switch (type) {
    case 'embed':
      return <Embed {...primary} />;
    case 'text':
      return <Text {...primary} />;
    case 'image':
      return <Image {...primary} />;
    default:
      return null;
  }
};

const Slices = ({ body }) => {
  return (
    <React.Fragment>
      {body.map((slice, index) => {
        return (
          <div key={`slice-${index}`}>
            <Slice {...slice}></Slice>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Slices;
