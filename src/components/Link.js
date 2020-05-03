import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

const Link = ({ external, children, to, href, ...props }) => {
  if (external) {
    return (
      <a {...props} href={to}>
        {children}
      </a>
    );
  } else {
    return (
      <GatsbyLink {...props} to={to}>
        {children}
      </GatsbyLink>
    );
  }
};

Link.displayName = 'Link';

export default Link;
