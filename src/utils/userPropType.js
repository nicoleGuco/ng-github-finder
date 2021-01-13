import PropTypes from 'prop-types';

const usersPropTypes = PropTypes.arrayOf(PropTypes.shape({
  login: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
}));

export default usersPropTypes;
