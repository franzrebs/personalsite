export const linkResolver = ({ type, uid, ...props }) => {
  switch (type) {
    case 'blog_post':
      return `/blog/${uid}`;
    case 'lens_album':
      return `/lens/album/${uid}`;
    case 'lens_item':
      return `/lens/${uid}`;
    default:
      return '/';
  }
};
