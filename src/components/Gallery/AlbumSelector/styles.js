import { css, keyframes } from '@emotion/core';
import { slideInDown } from 'react-animations';

const sideInanimation = keyframes`
${slideInDown}
`;

const root = css`
  margin-top: -8px;
  margin-left: -8px;
`;

const wrapper = css`
  display: flex;
  align-items: center;
`;

const albums = css`
  overflow: hidden;
`;

const list = css`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  transition: all 0.3s ease;
  li {
    margin-bottom: 0;
    padding: 0 10px;
  }
`;

const button = css`
  background: none;
  border none;
  outline: none;
  cursor: pointer;
  animation: all 0.2s ease-in;
  margin: 0.5em 0;
  padding: 0 8px;
  display: flex;
  align-items: center;

  &:hover:not(.disabled) {
    color: hsla(0, 0%, 0%, 0.6);
  }

  &.disabled {
    cursor: default;
    color: hsla(0, 0%, 0%, 0.2);
  }
`;

export default { root, wrapper, albums, list, button };
