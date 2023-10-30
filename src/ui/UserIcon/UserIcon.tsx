import React, { useEffect, useState } from 'react';
import { UnknownUserIcon } from '../UnknownUserIcon';
import { Link } from 'react-router-dom';
import './UserIcon.scss';
import { getUser } from '../../api/artworks';

export const UserIcon: React.FC = () => {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    getUser().then(res => {
      setUser(res.data);
    })
  }, []);

  console.log(user)
  const id = 1;

  return (
    <Link
      to={`/cabitet/${id}`}
      className="userIcon"
      title='To my account'
    >
      <UnknownUserIcon />

      {user?.fullname}
    </Link>
  );
};
