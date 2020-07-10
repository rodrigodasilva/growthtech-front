import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Posts from '../../components/Posts';
import Pagination from '../../components/Pagination';
import Filters from './Filters';

import { Container, PostsContainer } from './styles';

import { listRequest } from '../../store/modules/users/actions';

const Dashboard = () => {
  const [filters, setFilters] = useState({
    page: 1,
    per_page: 2,
    name: '',
    company_name: '',
  });

  const { usersList, loadingList } = useSelector(({ users }) => users);
  // console.log(usersList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listRequest(filters));
  }, [dispatch, filters]);

  console.log('dashboard');

  const handleFilter = filter => {
    setFilters({
      ...filters,
      ...filter,
      page: 1,
    });
  };
  console.log(filters);
  return (
    <Container>
      <Filters
        onChange={filter => handleFilter(filter)}
        isLoading={usersList.users && !!usersList.users.length && loadingList}
      />

      <PostsContainer>
        {usersList.users &&
          !!usersList.users.length &&
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
      </PostsContainer>
    </Container>
  );
};

export default Dashboard;
