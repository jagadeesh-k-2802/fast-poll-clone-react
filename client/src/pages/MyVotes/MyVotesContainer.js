import { useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import MyVotes from './MyVotes';
import api from '../../services/api';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const MyVotesContainer = () => {
  const loadMoreRef = useRef;
  const getNextPageParam = lastPage => lastPage.pagination?.next?.page;

  const votesData = useInfiniteQuery(
    `/my-votes`,
    async ({ pageParam = 1 }) => await api.fetchMyVotes(pageParam),
    { getNextPageParam }
  );

  useIntersectionObserver({
    target: loadMoreRef.current,
    onIntersect: votesData.fetchNextPage,
    enabled: votesData.hasNextPage
  });

  return <MyVotes votesData={votesData} loadMoreRef={loadMoreRef} />;
};

export default MyVotesContainer;
