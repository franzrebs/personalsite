/** @jsx jsx */
import { jsx } from '@emotion/core';
import YouTube from 'react-youtube';

import styles from './styles';

export default ({ videoId }) => {
  return (
    <div>
      <YouTube
        videoId={videoId}
        opts={{
          playerVars: {
            origin: window.location.origin,
          },
        }}
        className={`video`}
        containerClassName={`container`}
      />
    </div>
  );
};
