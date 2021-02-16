import React from 'react';
import { PropTypes } from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

function Loading({ size }) {
  return (
    <Box
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      top={100}
    >
      <CircularProgress size={size} color="primary" />
    </Box>
  );
}

Loading.propTypes = {
  size: PropTypes.number.isRequired,
};
export default Loading;
