// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { BASE_URL } from '../utils/constant';
// import { setFeed } from '../utils/feedSlice';
// import UserCard from './UserCard';

// const Feed = () => {
//   const dispatch = useDispatch();
//   const feed = useSelector((store) => store.feed);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const getFeed = async () => {
//     try {
//       const res = await axios.get(BASE_URL + "/feed", {
//         withCredentials: true,
//       });
//       dispatch(setFeed(res?.data?.users)); 
//     } catch (err) {
//       console.error("Failed to fetch feed:", err);
//     }
//   };

//   useEffect(() => {
//     getFeed();
//   }, []);

//   const handleNext = () => {
//     setCurrentIndex((prev) => prev + 1);
//   };
//   if (!feed) return <div>Loading...</div>;
//   if (currentIndex >= feed.length) return <div>No more users!</div>;
//   return (
//     <div className="flex justify-center my-10">
//       <UserCard user={feed[currentIndex]} onNext={handleNext} />
//     </div>
//   );
// };

// export default Feed;


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
  const [page, setPage] = useState(1);
  const [noMoreUsers, setNoMoreUsers] = useState(false);

  const getFeed = async (pageNum = 1) => {
    try {
      const res = await axios.get(`${BASE_URL}/feed?page=${pageNum}`, {
        withCredentials: true,
      });
      const users = res?.data?.users || [];
      if (users.length === 0) {
        setNoMoreUsers(true);
        return;
      }
      dispatch(setFeed(users));
      setCurrentIndex(0);
    } catch (err) {
      console.error("Failed to fetch feed:", err);
    }
  };

  useEffect(() => {
    getFeed(page);
  }, [page]);

  const handleNext = () => {
    if (feed && currentIndex + 1 >= feed.length) {
      setPage((prev) => prev + 1);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  if (noMoreUsers) return <div className="text-center my-50 text-3xl">No more users!</div>;
  if (!feed) return <div>Loading...</div>;
  if (currentIndex >= feed.length) return <div>Loading more users...</div>;

  return (
    <div className="flex justify-center my-10">
      <UserCard user={feed[currentIndex]} onNext={handleNext} />
    </div>
  );
};

export default Feed;