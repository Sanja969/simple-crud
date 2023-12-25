import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { AppDispatch } from "../redux/store";
import { getPost, Post } from "../redux/postsReducer";

export default function PostDetail() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const post = useSelector((state: {postsReducer: {post: Post}}) => state.postsReducer.post);

  useEffect(() => {
    dispatch(getPost(id as string));
  }, [dispatch]);

  console.log(JSON.stringify(post));

  return (
    <div className="flex flex-col items-center p-20">
      <h2 className="text-[26px] mb-8">{post.title}</h2>
      <p className="">{post.body}</p>
    </div>
  )
}