import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-activity';

import Pagination from '../../components/Pagination';
import Filters from './Filters';
import Posts from './Posts';

import {
  Container,
  PostsContainer,
  LoadingContainer,
  MessageContainer,
} from './styles';

import { listRequest } from '../../store/modules/users/actions';

const Dashboard = () => {
  const [filters, setFilters] = useState({
    page: 1,
    per_page: 2,
    name: '',
    company_name: '',
  });

  const { usersList, loadingList } = useSelector(({ users }) => users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listRequest(filters));
  }, [dispatch, filters]);

  const handleFilter = filter => {
    setFilters({
      ...filters,
      ...filter,
      page: 1,
    });
  };

  return (
    <Container>
      <Filters
        onChange={filter => handleFilter(filter)}
        isLoading={loadingList && !!usersList.users}
      />

      <PostsContainer>
        {!loadingList && usersList.users && !usersList.users.length && (
          <MessageContainer>
            <h4>Nenhum post encontrado</h4>
          </MessageContainer>
        )}

        {loadingList && !usersList.users ? (
          <LoadingContainer>
            <Spinner size={16} />
          </LoadingContainer>
        ) : (
          <>
            {!!usersList.users &&
              usersList.users.map(user => <Posts key={user.id} user={user} />)}

            {usersList.users && !!usersList.users.length && (
              <Pagination
                currentPage={filters.page}
                lastPage={usersList.last}
                onLoadMore={page =>
                  setFilters(oldFilters => ({ ...oldFilters, page }))
                }
                isLoading={loadingList}
              />
            )}
          </>
        )}
      </PostsContainer>
    </Container>
  );
};

export default Dashboard;
