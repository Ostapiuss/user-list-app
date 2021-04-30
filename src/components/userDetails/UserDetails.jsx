import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPost } from '../../api';
import { showDetails } from '../../redux/reducers/postDetailsReducer';
import { ModalAddPost } from '../../components/ModalAddPost';
import './UserDetails.css';
import 'bulma/css/bulma.min.css';

export const UserDetails = () => {
  const [posts, setPosts] = useState([]);
  const [isOpenModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  const userPosts = useSelector(state => state.post.currentPost)

  const addPost = (newPost) => {
    setPosts(prevPosts => [...prevPosts, newPost]);
  }

  useEffect(() => {
    getPost('posts')
      .then((response) => {
        setPosts(response.filter(post => post.userId === userPosts.id))
      });
  }, []);

  console.log(userPosts);

  return (
    <>
      <div className="content is-large">
        <h2>{`${userPosts.name} posts`}</h2>
      </div>
      <ul>
        {posts.map(userPost => (
          <div
            className="box"
            key={userPost.id}
          >
            <article className="media">
              <div className="box__post">
                <strong className="box__title">{userPost.title}</strong>
                <br />
                {userPost.body}
              </div>

            </article>
            <button
              className="button is-info box__button-detais"
            >
              <Link
                className="box__detail-link"
                to="/listOfPost"
                onClick={() =>{
                  dispatch(showDetails(userPost))
                }}
              >
                DETAILS
              </Link>
            </button>
          </div>
        ))}
      </ul>

      <button
        className="button is-info box__button-add"
        onClick={() => {
          setOpenModal(true)
        }}
      >
        ADD NEW
      </button>

      {isOpenModal && (
        <ModalAddPost
          isOpen={isOpenModal}
          onChangeOpenModal={setOpenModal}
          newId={posts.length + 1}
          onAddPost={addPost}
        />
      )}
    </>
  )
}
