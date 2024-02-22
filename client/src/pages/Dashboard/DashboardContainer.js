import { useRef } from 'react';
import { useQuery, useInfiniteQuery } from 'react-query';
import DashboardPage from './Dashboard';
import api from '../../services/api';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const DashboardPageContainer = () => {
  const loadMoreRef = useRef();
  const sort = 'popular';
  const getNextPageParam = lastPage => lastPage.pagination?.next?.page;

  const dashboardData = useQuery(
    'dashboard-data',
    async () => await api.fetchDashboardData()
  );

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
    <DashboardPage
      pollsData={pollsData}
      dashboardData={dashboardData}
      loadMoreRef={loadMoreRef}
    />
  );
};

export default DashboardPageContainer;
