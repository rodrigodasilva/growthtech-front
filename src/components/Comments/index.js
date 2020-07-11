import React from 'react';
import PropTypes from 'prop-types';

import { Container, Comment, CommentHeader, CommentBody } from './styles';

const Comments = ({ isOpen, comments }) => {
  return (
    <Container isOpen={isOpen}>
      {comments &&
        !!comments.length &&
        comments.map(comment => (
          <Comment key={comment.id}>
            <CommentHeader>
              <strong>{comment.email}</strong>
            </CommentHeader>
            <CommentBody>{comment.body}</CommentBody>
          </Comment>
        ))}
    </Container>
  );
};

Comments.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Comments;
