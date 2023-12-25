import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post, savePost, updatePost } from "../redux/postsReducer";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/base";
import { AppDispatch } from "../redux/store";
import { Data } from "../redux/formReducer";


export default function FormPost() {
  const posts = useSelector((state: {postsReducer: {posts: Post[]}}) => state.postsReducer.posts);
  const form = useSelector((state: {formReducer: Data}) => state.formReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const gotToHome = () => {
    navigate('/');
  };

  const gotToDetail = (id: string) => {
    navigate(`/detail/${id}`);
  };

  const defaultFormFields = {
    title: form.title,
    body: form.body,
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    title,
    body
  } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const createPost= (title: string, body: string) => dispatch(savePost({
    title,
    body,
    userId: "1",
    id: posts.length,
  }));

  const editPost= (title: string, body: string, id: number) => dispatch(updatePost({
    title,
    body,
    id,
    userId: "1"
  }));

  const submitPost = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(form.id) {
      editPost(title, body, Number(form.id));
      gotToDetail(form.id);
    } else {
      createPost(title, body);
      gotToHome();
    }

    resetFormFields();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="flex flex-col items-center pt-10">
      <form className="flex flex-col gap-2 w-[50%]" onSubmit={submitPost}>
        <input className="border h-8 w-[100%] p-2" type="text" name="title" onChange={handleChange} value={title} required />
        <textarea className="border h-40 w-[100%] p-2" name="body" onChange={handleChange} value={body} required />
        <Button className="border bg-dark-400 hover:bg-dark-500 text-white p-2" type="submit">SAVE POST</Button>
      </form>
    </div>
  )
}
