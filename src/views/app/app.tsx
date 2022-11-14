import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { postsActions, postsSelectors } from '../../store/posts';
import Post from './post/post';

const mainLayoutStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '40px 65px 0px 65px',
};

const App: React.FC = () => {
  const dispatch = useDispatch();

  const posts = useSelector(postsSelectors.selectAll);

  useEffect(() => {
    dispatch(postsActions.getPostsInitialized());
  }, [dispatch]);

  return (
    <Box sx={mainLayoutStyles}>
      <Box>
        {posts.map((post) => (
          <Post key={`${post.id}_${post.title}`} userId={post.userId} title={post.title} body={post.body} />
        ))}
      </Box>
    </Box>
  );
};

export default App;
