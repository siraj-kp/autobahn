import { Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Link, NavLink } from 'react-router-dom';

interface PostViewProps {
  post: any;
}
const PostView = (props: PostViewProps) => {
  const { post } = props;
  return (
    <div className="view-content">
      <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
      <Link
        style={{ textDecoration: 'none', color: '#000' }}
        to={`/post/edit/${post.id}`}
      >
        <IconButton
          style={{ marginRight: '10px' }}
          aria-label="edit"
          size="large"
        >
          <Edit />
        </IconButton>
      </Link>
    </div>
  );
};

export default PostView;
