import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../../utils/linkResolver';

export default ({ albums }) => {
  return (
    <div>
      <a key="all" href="/lens">
        All
      </a>
      {albums.map(({ node }) => {
        const { _meta, title } = node;
        return (
          <a key={`album-${_meta}`} href={linkResolver(_meta)}>
            {RichText.asText(title)}
          </a>
        );
      })}
    </div>
  );
};
