import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import useStyles from './style';

function LinkItem({ children, linkUrl, registerClass }) {
  const classes = useStyles();

  return (
    <Link to={linkUrl} className={`${classes.root} ${registerClass}`}>
      {children}
    </Link>
  );
}

LinkItem.propTypes = {
  children: PropTypes.node.isRequired,
  linkUrl: PropTypes.string.isRequired,
  registerClass: PropTypes.string.isRequired,
};

export default LinkItem;
