import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { listRequest } from '../../store/modules/comments/actions';

import { Container, Comment, CommentHeader, CommentBody } from './styles';

const Comments = ({ postId, isOpen }) => {
  const { comments } = useSelector(({ comments }) => comments);

  const dispatch = useDispatch();

  useEffect(() => {
    if (postId) {
      dispatch(listRequest({ postId }));
    }
  }, [postId, dispatch]);

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

export default Comments;
