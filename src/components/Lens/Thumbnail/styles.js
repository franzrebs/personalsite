import { css } from '@emotion/core';
import { breakpoints } from '../../../styles/helper';

const root = css`
  padding: 4px;
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
    max-width: none;
    height: 100%;
  }
`;

const photoItem = css`
  width: 100%;
  height: 100%;
  h1 {
    display: none;
  }
  a {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  & > [data-type] {
    width: 100%;
    height: 100%;
  }
`;

export default { root, link, container, media, photoItem };
