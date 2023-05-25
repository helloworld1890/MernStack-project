import React from 'react';
import UserList from './UserList';
import './User.css';

const Users = () => {
    const USERS =[{id: 'u1', name: 'Max', image: 'http://placekitten.com/200/300', places: 3}];
    return <UserList items={USERS} />;
};

export default Users;