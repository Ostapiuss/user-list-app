import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { getComments } from '../../api'
import './PostDetails.css'

export const PostDetails = () => {
  const [comments, setComments] = useState([]);

  const post = useSelector(state => state.postDetails.details);

  useEffect(() => {
    getComments('comments')
      .then(commentResponse => (
        setComments(commentResponse.filter(comment => comment.postId === post.id ))
  ));
  }, [])
  console.log(post);
  return (
    <div className="comments">
      {comments.map(comment => (
        <div className="box comments__list">
          <strong>
            {comment.name}
          </strong>
          <br/>
          <span>{comment.body}</span>
          <br/>
          <a>{comment.email}</a>
        </div>
      ))}
    </div>
  )
}
