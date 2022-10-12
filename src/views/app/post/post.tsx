import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';

interface PostProps {
  userId: number;
  title: string;
  body: string;
}

const postContainerStyles = {
  backgroundColor: '#fffff',
  width: '800px',
  display: 'flex',
  padding: '10px',
  border: 'solid 1px #636363',
  mb: '20px',
};
const avatarStyles = { width: '40px', height: '40px', mr: '5px' };
const postInfoContainer = { marginLeft: '10px' };
const postTitleStyles = { fontSize: '20px', mb: '8px' };

const Post: React.FC<PostProps> = ({ userId, title, body }) => (
  <Box sx={postContainerStyles}>
    <Avatar sx={avatarStyles}>{userId}</Avatar>
    <Box sx={postInfoContainer}>
      <Typography sx={postTitleStyles}>{title}</Typography>
      <Typography>{body}</Typography>
    </Box>
  </Box>
);

export default Post;
