import React from 'react';

export default ({ embed }) => (
  <div dangerouslySetInnerHTML={{ __html: embed.html }} />
);
