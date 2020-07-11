import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from 'react-activity';
import { FaRegCommentAlt } from 'react-icons/fa';
import { MdEmail, MdWork } from 'react-icons/md';

// import ModalComments from '../ModalComments';
import Comments from '../Comments';

import { Container, User, Post, CommentsButton } from './styles';

const UserPost = ({ post, user }) => {
  const [commentIsOpen, setCommentIsOpen] = useState(false);
  const loadingComments = useSelector(({ comments }) => comments.loadingList);

  return (
    <>
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

        <CommentsButton
          title="Ver comentários"
          onClick={() => setCommentIsOpen(!commentIsOpen)}
        >
          <FaRegCommentAlt size={12} />
          <span>Comentários</span>
          {commentIsOpen && loadingComments && (
            <Spinner size={10} color="#2d88ff" />
          )}
        </CommentsButton>

        {commentIsOpen && (
          <Comments
            isOpen={commentIsOpen}
            onClose={() => setCommentIsOpen(false)}
            postId={post.id}
          />
        )}
      </Container>
    </>
  );
};

export default UserPost;
