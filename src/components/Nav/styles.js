import { css } from '@emotion/core';

const list = css`
  margin: 54px 0 0;
  padding: 0;
  list-style: none;
`;

const listItem = css`
  padding: 0 8px;
  margin-bottom: 0;
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
  &.active {
    color: hsla(0, 0%, 0%, 0.4);
  }
`;

export default { list, listItem, link };
