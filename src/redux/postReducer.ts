import { Dispatch } from 'redux';

const url = 'https://jsonplaceholder.typicode.com/posts';
const GET_POSTS = 'GET_POSTS';
const initialState: string[] = [];

interface Post {
  id: number;
  title: string;
  body: string;
}

interface GetPostsAction {
  type: typeof GET_POSTS;
  posts: Post[];
}

const postReducer = (state = initialState, action: GetPostsAction) => {
  switch (action.type) {
    case GET_POSTS:
      return [...action.posts];
    default:
      return state;
  }
};

export default postReducer;

export const getPosts = () => async (dispatch: Dispatch) => {
  const response = await fetch(url);
  const posts = await response.json();

  dispatch({
    type: GET_POSTS,
    posts: posts,
  });
};