import { useState, useRef } from 'react';
import { Redirect, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useQuery, useInfiniteQuery } from 'react-query';
import Profile from './Profile';
import { selectCurrentUser } from '../../redux/auth';
import api from '../../services/api';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const ProfileContainer = () => {
  const loadMoreRef = useRef();
  const currentUser = useSelector(selectCurrentUser);
  const { username } = useParams();
  const [sort, setSort] = useState('recent');
  const getNextPageParam = lastPage => lastPage.pagination?.next?.page;

  const profileData = useQuery(
    `/profile/${username}`,
    async () => await api.fetchProfile(username)
  );

  const pollsData = useInfiniteQuery(
    `polls/${username}/${sort}`,
    async ({ pageParam = 1 }) =>
      await api.fetchPublicPollsFromUser(username, pageParam, sort),
    { getNextPageParam }
  );

  useIntersectionObserver({
    target: loadMoreRef.current,
    onIntersect: pollsData.fetchNextPage,
    enabled: pollsData.hasNextPage
  });

  // Add a loading screen
  if (profileData.isLoading) {
    return null;
  }

  if (profileData.isError) {
    return <Redirect to="/404" />;
  }

  return (
    <Profile
      currentUser={currentUser}
      sort={sort}
      setSort={setSort}
      profileData={profileData}
      pollsData={pollsData}
      loadMoreRef={loadMoreRef}
    />
  );
};

export default ProfileContainer;
