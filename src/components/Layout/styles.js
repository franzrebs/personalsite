import { css } from '@emotion/core';
const global = css`
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #fff;
  }
  img {
    max-width: 100%;
  }
  a {
    &,
    &active,
    &:focus,
    &:hover,
    &:visited {
      text-decoration: none;
      color: inherit;
    }
  }
`;

const root = css`
  display: flex;
`;

const main = css`
  flex: 1;
  padding: 56px 40px 56px 20px;
`;

const pageTitle = css``;

const pageContent = css``;

export default { global, root, main, pageTitle, pageContent };
