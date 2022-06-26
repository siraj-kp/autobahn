import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { fetchPosts } from './postSllce';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
} from '@mui/material';
import { Add, Edit } from '@mui/icons-material';

const PostList = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts);

  React.useEffect(() => {
    if (posts.value.length === 0) dispatch(fetchPosts());
  }, []);

  if (posts.status === 'loading') return <>data loading....</>;

  return (
    <>
      <h2 className="text-center">Dashboard</h2>

      <List component="nav" aria-label="mailbox folders">
        <div className="list__wrapper">
          {posts
            ? posts.value.map((d: any) => (
                <div key={d.id} className="custom__list">
                  <ListItem button>
                    <NavLink
                      style={{ textDecoration: 'none', color: '#000' }}
                      to={`/post/${d.id}`}
                    >
                      <Stack spacing={2}>
                        <ListItemText>{d.title}</ListItemText>
                      </Stack>
                    </NavLink>
                    <Link
                      style={{ textDecoration: 'none', color: '#000' }}
                      to={`/post/edit/${d.id}`}
                    >
                      <IconButton
                        style={{ marginLeft: '10px' }}
                        aria-label="edit"
                        size="large"
                      >
                        <Edit />
                      </IconButton>
                    </Link>
                  </ListItem>
                </div>
              ))
            : null}
        </div>
      </List>
    </>
  );
};

export default PostList;
