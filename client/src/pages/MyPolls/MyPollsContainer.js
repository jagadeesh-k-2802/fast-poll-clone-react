import { useState, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import MyPolls from './MyPolls';
import api from '../../services/api';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const MyPollsContainer = () => {
  const loadMoreRef = useRef();
  const [sort, setSort] = useState('recent');
  const getNextPageParam = lastPage => lastPage.pagination?.next?.page;

  const pollsData = useInfiniteQuery(
    `my-polls/${sort}`,
    async ({ pageParam = 1 }) => await api.fetchMyPolls(pageParam, sort),
    { getNextPageParam }
  );

  useIntersectionObserver({
    target: loadMoreRef.current,
    onIntersect: pollsData.fetchNextPage,
    enabled: pollsData.hasNextPage
  });

  return (
    <MyPolls
      sort={sort}
      setSort={setSort}
      pollsData={pollsData}
      loadMoreRef={loadMoreRef}
    />
  );
};

export default MyPollsContainer;
