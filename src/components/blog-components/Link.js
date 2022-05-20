import React from 'react';
import GatsbyLink from 'gatsby-link';
import "@components/css/main.css"

export default function Link({ children, className, to }) {
  return (
    <GatsbyLink className={[`link`].concat(className || []).join(' ')} to={to}>
      {children}
    </GatsbyLink>
  );
}