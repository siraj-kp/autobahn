import { Button, TextField } from '@mui/material';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addPost, patchPost, postSlice } from './postSllce';

const PostForm = ({ data }: any) => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onSubmit = (data: any) =>
    data.id
      ? dispatch(patchPost(data.id)).then((res: any) =>
          navigate(`/post/${res.payload.id}`)
        )
      : dispatch(addPost(data)).then((res: any) => navigate(`/dashboard`));

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: data,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextField
          sx={{ mb: 2 }}
          {...register('title', { required: true })}
          id="standard-basic"
          label="Title"
          variant="standard"
        />
      </div>
      <div>
        <TextField
          sx={{ mb: 2 }}
          {...register('body', { required: true })}
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
        />
        {errors.body && <span>This field is required</span>}
      </div>

      <Button size="small" type="submit" variant="contained">
        Save
      </Button>
    </form>
  );
};

export default PostForm;
