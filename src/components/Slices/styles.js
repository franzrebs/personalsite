import { css } from '@emotion/core';

const slice = css`
  overflow: hidden;
`;

const columns = css`
  display: flex;
  justify-content: flex-start;
  margin: 0 -16px;
`;

const column = css`
  flex: 1;
  padding: 0 16px;
`;

export default { slice, columns, column };
