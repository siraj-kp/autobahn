import { Close, Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { fetchPost } from '../features/post/postSllce';
import PostView from '../features/post/PostView';

const ViewPost = () => {
  const { id = '0' } = useParams();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState();
  React.useEffect(() => {
    dispatch(fetchPost(Number(id))).then((res) => {
      setData(res.payload);
      setLoading(false);
    });
  }, []);
  if (loading) return <span>Loading ...</span>;
  if (!data) return <>No data found</>;
  return (
    <>
      <div className="form__header">
        <Link to="/dashboard">
          <IconButton color="primary" aria-label="add to shopping cart">
            <Close />
          </IconButton>
        </Link>
      </div>
      <h2 className="text-center">Post view</h2>

      <div className="list__wrapper ">
        <div className="custom__list p-2">
          <PostView post={data} />
        </div>
      </div>
    </>
  );
};

export default ViewPost;
