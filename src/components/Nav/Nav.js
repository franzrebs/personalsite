/** @jsx jsx */
import { jsx } from '@emotion/core';
import { GALLERY_VIEW_ALL } from 'src/constants';
import styles from './styles';

const isActive = href => {
  if (href.indexOf('lens') !== -1) {
    return /^\/lens/.test(window.location.pathname);
  }

  return href === window.location.pathname;
};

export default () => {
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
              className={isActive(href) ? 'active' : ''}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
