import { css, keyframes } from '@emotion/core';
import { slideInDown } from 'react-animations';

const sideInanimation = keyframes`
${slideInDown}
`;

const root = css`
  display: flex;
  align-items: center;
  justify-content: center;
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
    font-size: 1.6rem;
  }
`;

const button = css`
  background: none;
  border none;
  outline: none;
  cursor: pointer;
  animation: all 0.2s ease-in;
  padding: 8px;
  font-size: 1.6rem;
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
