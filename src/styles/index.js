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
  padding: 16px 0;
  &:hover {
    h3 {
      opacity: 0.6;
    }
  }
`;
const date = css`
  color: #796e89;
`;
const title = css`
  margin: 0;
  margin-left: 24px;
  font-weight: 700;
`;

export default { list, listItem, link, date, title };
