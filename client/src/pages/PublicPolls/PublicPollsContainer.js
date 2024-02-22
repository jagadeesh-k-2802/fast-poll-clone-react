import { useRef, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import PublicPolls from './PublicPolls';
import api from '../../services/api';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const PublicPollsContainer = () => {
  const loadMoreRef = useRef();
  const [sort, setSort] = useState('recent');
  const getNextPageParam = lastPage => lastPage.pagination?.next?.page;

  const pollsData = useInfiniteQuery(
    `public-polls/${sort}`,
    async ({ pageParam = 1 }) => await api.fetchPublicPolls(pageParam, sort),
    { getNextPageParam }
  );

  useIntersectionObserver({
    target: loadMoreRef.current,
    onIntersect: pollsData.fetchNextPage,
    enabled: pollsData.hasNextPage
  });

  return (
    <PublicPolls
      sort={sort}
      setSort={setSort}
      pollsData={pollsData}
      loadMoreRef={loadMoreRef}
    />
  );
};

export default PublicPollsContainer;
