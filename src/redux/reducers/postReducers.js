const ADD = 'ADD';


const initialPostState = {
  currentPost: {},
};

export const showPost = (post) => {
  return {
    type: ADD,
    post,
  }
}

const postReudcer = (postState = initialPostState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...postState,
        currentPost: action.post
      }

    default:
      return postState;
  }
}

export default postReudcer;