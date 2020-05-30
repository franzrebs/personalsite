export const linkResolver = ({ type, uid, ...props }) => {
  switch (type) {
    case 'blog_post':
      return `/entry/${uid}`;
    default:
      return '/';
  }
};
