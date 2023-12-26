import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { AppDispatch } from "../redux/store";
import { deletePost, getPost, Post } from "../redux/postsReducer";
import { Button } from "@mui/base";
import { setData } from "../redux/formReducer";

export default function PostDetail() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const post = useSelector((state: {postsReducer: {post: Post}}) => state.postsReducer.post);

  useEffect(() => {
    dispatch(getPost(id as string));
  }, [dispatch]);

  const buttonClassName = "text-white h-8 p-2 flex items-center justify-center rounded";

  const removePost = () => {
    dispatch(deletePost(id as string));
    navigate('/');
  };

  const updatePost = () => {
    dispatch(setData({title: post.title, body: post.body, id: post.id.toString()}));
    navigate('/save');
  };

  return (
    <div>
      <div className="flex flex-col items-center p-20">
        <h2 className="text-[26px] mb-8">{post.title}</h2>
        <p className="">{post.body}</p>
      </div>
      <div className='flex gap-2 justify-center'>
        <Button className={`${buttonClassName} bg-dark-100 hover:bg-dark-200`} onClick={() => updatePost()}>
          Edit
        </Button>
        <Button className={`${buttonClassName} bg-red-400 hover:bg-red-500`} onClick={() => removePost()}>
          Delete
        </Button>
      </div>
    </div>

  )
}