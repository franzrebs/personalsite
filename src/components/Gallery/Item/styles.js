import { css } from '@emotion/core';

const back = css`
  margin-bottom: 20px;
  a {
    display: flex;
    align-items: center;
  }
  &:hover {
    color: hsla(0, 0%, 0%, 0.6);
  }
`;
const media = css``;

const titleDescription = css`
  display: flex;
  margin-top: 32px;
`;

const title = css`
  max-width: 400px;
  margin-right: 32px;
  font-weight: 600;
  font-size: 1.5em;
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

export default {
  back,
  media,
  titleDescription,
  title,
  description,
  photo,
  video,
};
