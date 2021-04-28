import React from 'react';
import { useSelector } from 'react-redux';

export const UserDetails = () => {
  const userPosts = useSelector(state => state.post.currentPost)
  return (
    <div>
      {userPosts.id}
    </div>
  )
}
