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

const backBtn = css`
  padding: 0;
  margin: 0;
  border: 0;
  background: none;
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
  height: 100%;
  margin-bottom: 0;
`;

const video = css`
  height: 100%;

  .container {
    width: 100%;
    height: 100%;
  }

  .video {
    width: 100%;
    height: 100%;
  }
`;

export default {
  back,
  backBtn,
  media,
  titleDescription,
  title,
  description,
  photo,
  video,
};
