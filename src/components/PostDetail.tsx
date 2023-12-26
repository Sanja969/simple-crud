import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { AppDispatch } from "../redux/store";
import { getPost, Post } from "../redux/postsReducer";
import Form from "./Form";

export default function PostDetail() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const post = useSelector((state: {postsReducer: {post: Post}}) => state.postsReducer.post);

  useEffect(() => {
    dispatch(getPost(id as string));
  }, []);

  return (
    post.title ? <Form form={{ title: post.title, body: post.body,id: id as string,}} type="update" /> : <></>
  )
}