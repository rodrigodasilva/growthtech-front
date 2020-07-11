import React from 'react';

import Post from '../../../components/Post';
import { Container } from './styles';

const Posts = ({ user }) => {
  return (
    <Container>
      {user.posts &&
        user.posts.map(post => <Post key={post.id} post={post} user={user} />)}
    </Container>
  );
};

export default Posts;
