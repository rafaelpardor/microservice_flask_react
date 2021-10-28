import React from 'react';

export const UsersList = (props) => {
  return (
    <div>
      {
        props.users.map(user => {
          return (
            <p
              key={user.id}
            >
              {user.id}. <i>{user.username}</i>, {user.email} <br/>
            </p>
            )
          })
      }
    </div>
    )
}