import { css } from '@emotion/core';

const list = css`
  margin: 32px 0 0;
  padding: 0;
  list-style: none;
`;

const listItem = css`
  padding: 8px 16px;
  li a {
    text-decoration: none;
  }
  li a {
    &:hover {
      text-decoration: none;
      color: inherit;
    }
  }
`;

const link = css`
  &,
  &active,
  &:focus,
  &:hover,
  &:visited {
    text-decoration: none;
    color: inherit;
  }
`;

export default { list, listItem, link };
