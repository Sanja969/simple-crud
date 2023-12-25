import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/base/Button';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { setData } from '../redux/formReducer';

export default function Navigation () {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  const buttonClassName = "text-white h-8 p-2 flex items-center justify-center rounded";

  const onNewPost = () => {
    dispatch(setData({title: '', body: '', id: ''}))
    navigate('/create')
  };

  return (
    <>
      <div className='h-16 bg-dark-400 w-full flex justify-between px-12 items-center'>
        <a href="/"><p className='text-white text-[20px] cursor-pointer'>Posts</p></a>
        {
          location.pathname === '/' && <Button 
            className={`${buttonClassName} bg-yellow-400 hover:bg-yellow-500`}
            onClick={() => onNewPost()}
          >
            New Post
          </Button>}
      </div>
      <Outlet />
    </>
  )
}