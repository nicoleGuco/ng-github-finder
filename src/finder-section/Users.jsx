import React from 'react';
import PropTypes from 'prop-types';

function Users({ users }) {
  if (!users) return null;

  return (
    <ul className="users">
      {users.map((user) => (
        <li className="user" key={user.login}>
          <a className="user__link" href={user.html_url} target="_blank" rel="noreferrer">
            <img className="user__avatar" src={user.avatar_url} alt="user avatar" />
            {user.login}
          </a>
        </li>
      ))}
    </ul>
  );
}

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    login: PropTypes.string,
    html_url: PropTypes.string,
    avatar_url: PropTypes.string,
  })),
};

Users.defaultProps = {
  users: null,
};

export default Users;
