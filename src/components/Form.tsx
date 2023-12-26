import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post, deletePost, savePost, updatePost } from "../redux/postsReducer";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/base";
import { AppDispatch } from "../redux/store";

export interface Data {
  id: string;
  title: string;
  body: string;
}

interface FormPostProps {
  form: Data;
  type: 'create' | 'update';
}

export default function Form({form, type}: FormPostProps) {
  const posts = useSelector((state: {postsReducer: {posts: Post[]}}) => state.postsReducer.posts);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [disabled, setDisabled] = useState(type === 'update');

  const gotToHome = () => {
    navigate('/');
  };

  const removePost = () => {
    dispatch(deletePost(form.id as string));
    navigate('/');
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
    if(type === 'update') {
      editPost(title, body, Number(form.id));
      setDisabled(true);
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
        <input 
          className={`h-8 w-[100%] p-2 ${!disabled ? 'border' : 'bg-white text-[20px]'}`}
          type="text" name="title"
          onChange={handleChange}
          value={title}
          required
          disabled={disabled}
        />
        <textarea 
          className={`h-40 w-[100%] p-2 ${!disabled ? 'border' : 'bg-white resize-none'}`}
          name="body" onChange={handleChange}
          value={body}
          required
          disabled={disabled}
        />
        {!disabled && 
          <Button type="submit" className="border bg-dark-300 hover:bg-dark-500 text-white p-2">
            {type === 'update' ? 'SAVE-POST' : 'CREATE-POST'}
          </Button>
        }
      </form>
      {type === 'update' && disabled &&
        <div className="flex gap-4 w-[50%]">
          <Button
              type="button"
              className="border bg-dark-300 hover:bg-dark-500 text-white p-2"
              onClick={() => setDisabled(false)}
            >
            EDIT POST
          </Button>
          <Button className={`border text-white p-2 bg-red-400 hover:bg-red-500`} onClick={() => removePost()}>
            DELETE-POST
          </Button>
          </div>
        }
    </div>
  )
}
