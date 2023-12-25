import { Dispatch } from 'redux';

const url = 'https://jsonplaceholder.typicode.com/posts';
const GET_POSTS = 'GET_POSTS';
const GET_POST = 'GET_POST';
const initialState = {posts: [], post: {}};

export interface Post {
  userId: string;
  id: number;
  title: string;
  body: string;
}

interface GetPostsAction {
  type: string;
  payload: Post[] | Post;
}

const postsReducer = (state = initialState, action: GetPostsAction) => {
  switch (action.type) {
    case GET_POSTS:
      return {...state, posts: [...action.payload as Post[]]};
    case GET_POST:
      return {...state, post: action.payload as Post};
    default:
      return state;
  }
};

export default postsReducer;

export const getPosts = () => async (dispatch: Dispatch) => {
  const response = await fetch(url);
  const posts = await response.json();

  dispatch({
    type: GET_POSTS,
    payload: posts,
  });
};

export const getPost = (id: string) => async (dispatch: Dispatch) => {
  const response = await fetch(`${url}/${id}`);
  const post = await response.json();

  dispatch({
    type: GET_POST,
    payload: post,
  });
};