import { Dispatch } from 'redux';

const url = 'https://jsonplaceholder.typicode.com/posts';
const GET_POSTS = 'GET_POSTS';
const GET_POST = 'GET_POST';
const DELETE_POST = 'DELETE_POST';
const SAVE_POST = 'SAVE_POST';

const initialState = {posts: [], post: {}};

export interface Post {
  userId: string;
  id: number;
  title: string;
  body: string;
}

interface GetPostsAction {
  type: string;
  payload: any;
}

const postsReducer = (state = initialState, action: GetPostsAction) => {
  switch (action.type) {
    case GET_POSTS:
      return {...state, posts: [...action.payload as Post[]]};
    case SAVE_POST:
      return {...state, posts: [...state.posts, action.payload as Post]};
    case GET_POST:
      return {...state, post: action.payload as Post};
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post: Post) => post.id !== action.payload)
      };
    default:
      return state;
  }
};

export const getPosts = () => async (dispatch: Dispatch) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const posts = await response.json();
    dispatch({
      type: GET_POSTS,
      payload: posts,
    });
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

export const getPost = (id: string) => async (dispatch: Dispatch) => {
  try {
    const response = await fetch(`${url}/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const post = await response.json();
  
    dispatch({
      type: GET_POST,
      payload: post,
    });
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }

};

export const savePost = (post: Post) => async(dispatch: Dispatch) => {
  try {
    const response = await fetch(url,
      {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
         "Content-Type": "application/json"
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const json = await response.json();
  
    dispatch({
      type: SAVE_POST,
      payload: json,
    })
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

export const updatePost = (post: Post) => async(dispatch: Dispatch) => {
  const { id, ...other } = post;

  try {
    const response = await fetch(`${url}/${id}`,
    {
      method: 'PUT',
      body: JSON.stringify(other),
      headers: {
       "Content-Type": "application/json"
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const json = await response.json();

    dispatch({
      type: GET_POST,
      payload: json,
    })
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

export const deletePost = (id: string) => async(dispatch: Dispatch) => {
  try {
    await fetch(`${url}/${id}`,
    {
      method: 'DELETE',
      headers: {
       "Content-Type": "application/json"
      },
    });

    dispatch({
      type: DELETE_POST,
      payload: id,
    })
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

export default postsReducer;