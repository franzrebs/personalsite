/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import Embed from './Embed';
import Text from './Text';
import Image from './Image';
import Columns from './Columns';
import styles from './styles';

const Slice = ({ type, primary, fields, ...others }) => {
  switch (type) {
    case 'embed':
      return <Embed {...primary} />;
    case 'text':
      return <Text {...primary} />;
    case 'image':
      return <Image {...primary} />;
    case 'columns':
      return <Columns {...fields} />;
    default:
      return null;
  }
};

const Slices = ({ body }) => {
  return (
    <React.Fragment>
      {body.map((slice, index) => {
        return (
          <div css={styles.slice} key={`slice-${index}`}>
            <Slice {...slice}></Slice>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Slices;
