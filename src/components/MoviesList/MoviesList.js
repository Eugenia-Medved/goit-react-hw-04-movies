import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

function MoviesList({ options, location }) {
  return (
    <ul>
      {options.map(({ id, title }) => (
        <li key={id}>
          <NavLink
            to={{
              pathname: `/movies/${id}`,
              state: { from: location },
            }}
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
export default withRouter(MoviesList);
