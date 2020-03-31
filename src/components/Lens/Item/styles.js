import { css } from '@emotion/core';

const photoItem = css`
  h1 {
    display: none;
  }
  a {
    cursor: default;
    touch-action: none;
  }
`;

const videoItem = css`
  .container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
  }
  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default { photoItem, videoItem };
