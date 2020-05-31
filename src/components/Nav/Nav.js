/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useLocation } from '@reach/router';

import { GALLERY_VIEW_ALL } from 'src/constants';
import styles from './styles';

const isActive = (location, href) => {
  if (/^\/lens/.test(href)) {
    return /^\/lens/.test(location.pathname);
  }

  if (/^\/hands/.test(href)) {
    return /^\/hands/.test(location.pathname);
  }

  return href === location.pathname;
};

export default () => {
  const location = useLocation();
  return (
    <nav>
      <ul css={styles.list}>
        {[
          { href: '/', name: 'Index' },
          { href: `/lens/${GALLERY_VIEW_ALL}`, name: 'Lens' },
          { href: `/hands/${GALLERY_VIEW_ALL}`, name: 'Hands' },
          { href: '/bio', name: 'Bio' },
          { href: '/feed', name: 'Feed' },
        ].map(({ href, name }) => (
          <li css={styles.listItem} key={`nav-item-${name}`}>
            <a
              css={styles.link}
              href={href}
              className={isActive(location, href) ? 'active' : ''}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
