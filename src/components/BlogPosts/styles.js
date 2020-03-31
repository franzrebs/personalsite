import { css } from '@emotion/core';

const list = css`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const listItem = css``;
const link = css`
  display: flex;
  align-items: center;
  padding: 4px 0;
  h2 {
    font-size: 1em;
    &:hover {
      opacity: 0.8;
    }
  }
`;
const date = css`
  font-size: 0.9em;
`;
const title = css`
  margin: 0;
  margin-left: 24px;
  font-weight: 700;
`;

export default { list, listItem, link, date, title };
