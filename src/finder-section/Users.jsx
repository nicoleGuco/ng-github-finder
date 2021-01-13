import React from 'react';
import usersPropType from '../utils/userPropType.js';

function Users({ users }) {
  if (!users) return null;

  return (
    <ul className="users">
      { users.length
        ? users.map((user) => (
          <li className="user" key={user.login}>
            <a className="user__link" href={user.html_url} target="_blank" rel="noreferrer">
              <img className="user__avatar" src={user.avatar_url} alt="user avatar" />
              {user.login}
            </a>
          </li>
        ))
        : <li className="user"><span className="user__not-found-massage">no users found</span></li>}
    </ul>
  );
}

Users.propTypes = {
  users: usersPropType,
};

Users.defaultProps = {
  users: null,
};

export default Users;
