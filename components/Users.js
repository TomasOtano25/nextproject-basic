import React from "react";
import Router from "next/router";

const Users = ({ users }) => {
  return (
    <div>
      <h1>Users</h1>

      <ul className="list-group">
        {users.map((user, index) => {
          return (
            <li
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-center btn"
              key={user.id}
              onClick={(e) => Router.push("/users/[id]", `/users/${user.id}`)}
            >
              <div>
                <h5>
                  {user.first_name} {user.last_name}
                </h5>
                <p>Email: {user.email}</p>
              </div>
              <img
                height={48}
                width={48}
                className="rounded-circle"
                src={user.avatar}
                alt={user.first_name + user.last_name}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
