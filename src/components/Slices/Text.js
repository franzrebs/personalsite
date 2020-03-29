import React from 'react';
import { RichText } from 'prismic-reactjs';

export default ({ text }) => <div>{RichText.render(text)}</div>;
