import React, { useState } from 'react';
import { Spinner } from 'react-activity';
import { FaRegCommentAlt } from 'react-icons/fa';
import { MdEmail, MdWork } from 'react-icons/md';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import api from '../../services/api';

import Comments from '../Comments';

import { Container, User, Post, CommentsButton } from './styles';

const UserPost = ({ post, user }) => {
  const [commentIsOpen, setCommentIsOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(false);

  const handleLoadComments = async postId => {
    try {
      setLoadingComments(true);
      const response = await api.get(`/posts/${postId}/comments`);
      setComments(response.data);
    } catch (error) {
      console.log('Error in get user comments: ', error);
    } finally {
      setLoadingComments(false);
    }
  };

  return (
    <>
      <Container>
        <User>
          <Link to={`/profile/${user.id}`} title="Ver perfil">
            <strong>{user.name}</strong>
          </Link>

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
          onClick={() => {
            setCommentIsOpen(!commentIsOpen);
            handleLoadComments(post.id);
          }}
        >
          <FaRegCommentAlt size={12} />
          <span>Comentários</span>
          {commentIsOpen && loadingComments && (
            <Spinner size={10} color="#2d88ff" />
          )}
        </CommentsButton>

        <Comments
          isOpen={commentIsOpen}
          onClose={() => setCommentIsOpen(false)}
          postId={post.id}
          comments={comments}
        />
      </Container>
    </>
  );
};

UserPost.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    company: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserPost;
