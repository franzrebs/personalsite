import { css } from '@emotion/core';

const global = css`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #36313d;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
  }
  img {
    max-width: 100%;
  }
`;

const root = css`
  display: flex;
`;

const main = css`
  flex: 1;
  padding: 32px 16px;
`;

export default { global, root, main };
