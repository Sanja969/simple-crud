import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Post } from '../redux/postsReducer';

export default function Home () {

  const posts = useSelector((state: {postsReducer: {posts: Post[]}}) => state.postsReducer.posts.sort((a, b) => b.id - a.id));

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();
  

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const itemsToDisplay = posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);


  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {/* Table Headers */}
            </TableRow>
          </TableHead>
          <TableBody>
            {itemsToDisplay.map((post, index) => (
              <TableRow key={index} onClick={() => navigate(`/detail/${post.id}`)} className='cursor-pointer'>
                <TableCell >
                  <h3 className='font-bold'>{post.title}</h3>
                </TableCell>
                <TableCell>{post.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={posts.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[10]}
      />
    </Paper>

  )
}