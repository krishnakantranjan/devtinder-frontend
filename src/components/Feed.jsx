import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import { setFeed } from '../utils/feedSlice';
import UserCard from './UserCard';

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(setFeed(res?.data?.users)); 
    } catch (err) {
      console.error("Failed to fetch feed:", err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };
  if (!feed) return <div>Loading...</div>;
  if (currentIndex >= feed.length) return <div>No more users!</div>;
  return (
    <div className="flex justify-center my-10">
      <UserCard user={feed[currentIndex]} onNext={handleNext} />
    </div>
  );
};

export default Feed;