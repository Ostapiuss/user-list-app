const SHOW__DETAILS = 'SHOW__DETAILS';

const initialState = {
  details: {}
}

export const showDetails = (details) => {
  return {
    type: SHOW__DETAILS,
    details,
  }
}

export const postDetailsReducer = (postDetail = initialState, action) => {
  switch (action.type) {
    case SHOW__DETAILS:
      return {
        ...postDetail,
        details: action.details,
      }
  
    default:
      return postDetail;
  }
}

export default postDetailsReducer;