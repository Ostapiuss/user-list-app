import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUsers } from'../../api';
import { showPost } from '../../redux/reducers/postReducers'

export const UserList = () => {
  const [users , setUsers] = useState([]);

  useEffect(() => {
    getUsers('users').then(setUsers);
  }, [])


  const dispatch = useDispatch();

  return (
    <table class="table is-hoverable">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Post</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
              <button
                className="button is-primary"
              >
                <Link
                  to="/details"
                  onClick={() => {
                    dispatch(showPost(user));
                  }}
                >
                  POST
                </Link>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
