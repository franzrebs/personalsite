import { css } from '@emotion/core';

const media = css``;

const titleDescription = css`
  display: flex;
  margin-top: 32px;
`;

const title = css`
  width: 30%;
  max-width: 400px;
  margin-right: 32px;
`;
const description = css`
  flex: 1;
  margin-left: 32px;
`;

const photo = css`
  margin-bottom: 0;
`;

const video = css`
  .container {
    position: relative;
    width: 100%;
    padding-top: 66.666%;
  }
  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default { media, titleDescription, title, description, photo, video };
