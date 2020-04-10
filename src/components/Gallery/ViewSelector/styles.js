import { css } from '@emotion/core';

const root = css`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`;

const label = css`
  font-weight: 500;
  margin-right: 12px;
`;

const list = css`
  display: flex;
  margin: 0;
  list-style: none;

  li {
    margin-bottom: 0;
  }
  li + li:before {
    content: '/';
    padding: 0 4px;
    color: hsla(0, 0%, 0%, 0.6);
  }
  a:hover:not(.active) {
    color: hsla(0, 0%, 0%, 0.4);
  }
  a.active {
    text-decoration: underline;
  }
`;

export default { root, label, list };
