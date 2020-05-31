import { css } from '@emotion/core';
import { breakpoints } from '../../../styles/helper';

const root = css`
  padding: 8px;
  width: 50%;
  ${breakpoints.md} {
    width: 33.333%;
  }
  ${breakpoints.lg} {
    width: 25%;
  }
`;

const link = css`
  display: block;
  width: 100%;
  height: 100%;
  background: none;
  padding: 0;
  margin: 0;
  border: none;
`;

const container = css`
  position: relative;
  width: 100%;
  padding-top: 66.666%;
`;

const media = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    margin-bottom: 0;
  }
`;

export default { root, link, container, media };
