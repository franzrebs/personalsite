/** @jsx jsx */
import React from 'react';
import { jsx, Global } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';

import SEO from '../../components/SEO';
import Sidebar from '../../components/SideBar';

import styles from './styles';

export default ({ children, title }) => {
  return (
    <React.Fragment>
      <SEO title={title} />
      <Global styles={styles.global} />
      <div css={styles.root}>
        <Sidebar css={styles.sidebar} />
        <main css={styles.main}>{children}</main>
      </div>
    </React.Fragment>
  );
};
