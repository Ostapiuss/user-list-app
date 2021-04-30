import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getComments } from '../../api';
import { Button } from 'react-bootstrap';
import { EditPost } from '../EditPost';
import './PostDetails.scss';

export const PostDetails = () => {
  const [comments, setComments] = useState([]);
  const [isOpenEditModal, setEditModal] = useState(false);

  const post = useSelector(state => state.postDetails.details);

  useEffect(() => {
    getComments('comments')
      .then(commentResponse => (
        setComments(commentResponse.filter(comment => comment.postId === post.id ))
  ));
  }, [])

  console.log(post);

  return (
    <>
      <div className=" box current-post">
        <strong className ="current-post__title">{post.title}</strong>
        <p>{post.body}</p>
        <div classNmae="current-post__buttons">
          <Button
            variant="primary"
            onClick={() => {
              setEditModal(true);
            }}
          >
            Edit
          </Button>
          <Button
            variant="primary"
          >
            Delete
          </Button>
        </div>
      </div>
      <div className="comments">
        {comments.map(comment => (
          <div className="box comment">
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
      {isOpenEditModal && (
        <EditPost
          isOpen={isOpenEditModal}
          onCloseModal={setEditModal}

        />
      )}
    </>
  )
}
