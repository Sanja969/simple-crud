import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/base/Button';

export default function Navigation () {
  const navigate = useNavigate();
  const location = useLocation();

  const buttonClassName = "text-white h-8 p-2 flex items-center justify-center rounded";

  const onNewPost = () => {
    navigate('/save')
  };

  return (
    <>
      <div className='h-16 bg-dark-400 w-full flex justify-between px-12 items-center'>
        <a href="/"><p className='text-white text-[20px] cursor-pointer'>Posts</p></a>
        {
          location.pathname === '/' && <Button 
            className={buttonClassName}
            onClick={() => onNewPost()}
          >
            New Post
          </Button>}
      </div>
      <Outlet />
    </>
  )
}