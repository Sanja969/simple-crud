import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPosts } from './redux/postsReducer';
import { AppDispatch } from './redux/store';
import PostDetail from './components/PostDetail';
import FormPost from './components/FormPost';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="detail/:id" element={<PostDetail />} />
        <Route path="/save" element={<FormPost />} />
      </Route>
    </Routes>
  );
}

export default App;
