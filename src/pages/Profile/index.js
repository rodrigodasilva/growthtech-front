import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { MdEmail, MdHome, MdCall, MdWork } from 'react-icons/md';
import { GiWorld } from 'react-icons/gi';
import { Spinner } from 'react-activity';

import Post from '../../components/Post';
import Filters from './Filters';

import { listByUserRequest } from '../../store/modules/posts/actions';
import {
  showUserRequest,
  resetUsersState,
} from '../../store/modules/users/actions';

import {
  Container,
  ProfileInfo,
  PostsContainer,
  LoadingContainer,
  MessageContainer,
} from './styles';

const Profile = () => {
  const [filters, setFilters] = useState({
    search: '',
  });

  const { userId } = useParams();

  const { postsList, loadingPostsList } = useSelector(({ posts }) => posts);
  const { user, loadingUserShow } = useSelector(({ users }) => users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUserRequest({ userId }));

    return () => dispatch(resetUsersState());
  }, [dispatch, userId]);

  useEffect(() => {
    dispatch(listByUserRequest({ userId, filters }));
  }, [dispatch, userId, filters]);

  const handleFilter = filter => {
    setFilters({
      ...filters,
      ...filter,
    });
  };

  if (loadingUserShow) {
    return (
      <LoadingContainer>
        <Spinner size={16} />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      {!!Object.keys(user).length && (
        <ProfileInfo>
          <h2>{user.name}</h2>
          <h3>@{user.username}</h3>

          <p>
            <MdEmail size={20} />
            <span>Email:</span> <strong>{user.email}</strong>
          </p>
          <p>
            <MdCall size={20} />
            <span>Telefone:</span> <strong>{user.phone}</strong>
          </p>
          <p>
            <GiWorld size={20} />
            <span>Site:</span> <strong>{user.website}</strong>
          </p>
          <p>
            <MdWork size={20} />
            <span>Trabalha na </span> <strong>{user.company.name}</strong>
          </p>
          <p>
            <MdHome size={20} />
            <span>Mora em </span> <strong>{user.address.city}</strong>
          </p>
        </ProfileInfo>
      )}

      <PostsContainer>
        <Filters
          onChange={filter => handleFilter(filter)}
          isLoading={!!loadingPostsList}
        />

        {!loadingPostsList && !postsList.length && (
          <MessageContainer>
            <h4>Nenhum post encontrado</h4>
          </MessageContainer>
        )}

        {!loadingPostsList &&
          !!postsList.length &&
          postsList.map(post => (
            <Post key={post.id} post={post} user={post.user} />
          ))}
      </PostsContainer>
    </Container>
  );
};

export default Profile;
