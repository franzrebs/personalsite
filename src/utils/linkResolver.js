export const linkResolver = ({ type, uid }) => {
  switch (type) {
    case 'blog_post':
      return `/blog/${uid}`;
    default:
      return '/';
  }
};
