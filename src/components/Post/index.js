import React from 'react';
import { FaRegCommentAlt } from 'react-icons/fa';
import { MdEmail, MdWork } from 'react-icons/md';

import { Container, User, Post, Comments } from './styles';

const UserPost = ({ post, user }) => {
  return (
    <Container>
      <User>
        <h4 title="Ver perfil">
          <strong>{user.name}</strong>
        </h4>
        <span title={`Trabalha na ${user.company.name}`}>
          <MdWork />
          {user.company.name}
        </span>
        <span title="Email">
          <MdEmail />
          {user.email}
        </span>
      </User>

      <Post>
        <h5>{post.title}</h5>
        <p>{post.body}</p>
      </Post>

      <Comments title="Ver comentários">
        <FaRegCommentAlt size={12} /> Comentários
      </Comments>
    </Container>
  );
};

export default UserPost;
