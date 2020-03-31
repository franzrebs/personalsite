import { css } from '@emotion/core';

const list = css`
  margin: 54px 0 0;
  padding: 0;
  list-style: none;
`;

const listItem = css`
  padding: 0 4px;
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

const link = css``;

export default { list, listItem, link };
