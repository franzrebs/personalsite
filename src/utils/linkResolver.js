export const linkResolver = ({ type, uid, ...props }) => {
  switch (type) {
    case 'blog_post':
      return `/blog/${uid}`;
    default:
      return '/';
  }
};
