import { Outlet } from 'react-router-dom';
import { Button } from '@mui/base/Button';

export default function Navigation () {
  return (
    <>
      <div className='h-16 bg-dark-400 w-full flex justify-between px-12 items-center'>
        <a href="/"><p className='text-white text-[20px] cursor-pointer'>Posts</p></a>
        <Button className="bg-yellow-400 hover:bg-yellow-500 text-white h-8 p-2 flex items-center justify-center rounded">
          New Post
        </Button>
      </div>
      <Outlet />
    </>
  )
}