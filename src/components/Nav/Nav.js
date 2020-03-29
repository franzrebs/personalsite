/** @jsx jsx */
import { jsx } from '@emotion/core';
import { navigate } from 'gatsby';
import styles from './styles';

export default () => {
  return (
    <nav>
      <ul css={styles.list}>
        {[
          { href: '/', name: 'Index' },
          { href: '/lens', name: 'Lens' },
          { href: '/hands', name: 'Hands' },
          { href: '/bio', name: 'Bio' },
          { href: '/feed', name: 'Feed' },
        ].map(({ href, name }) => (
          <li css={styles.listItem}>
            <a css={styles.link} href={href}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
