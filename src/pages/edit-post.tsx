import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import PostForm from '../features/post/form';
import { fetchPost } from '../features/post/postSllce';

const EditPost = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = React.useState(id ? true : false);
  const [data, setData] = React.useState();
  React.useEffect(() => {
    if (id) {
      dispatch(fetchPost(Number(id))).then((res) => {
        setData(res.payload);
        setLoading(false);
      });
    }
  }, []);
  if (loading) return <>Loading</>;
  return (
    <>
      <div className="form__header">
        <Link to="/dashboard">
          <IconButton color="primary" aria-label="add to shopping cart">
            <Close />
          </IconButton>
        </Link>
      </div>
      <h2 className="text-center">{id ? 'Edit Form' : 'New Form'}</h2>

      <div className="form__page">
        <PostForm data={data} />
      </div>
    </>
  );
};

export default EditPost;
