// import Navbar from './Navbar';
// import Footer from './Footer';
// import { Outlet, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { BASE_URL } from "../utils/constant";
// import { useEffect } from 'react';
// import { addUser } from '../utils/userSlice'

// const Body = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const userData = useSelector((store) => store.user)
//   const fetchUser = async () => {
//     try {
//       const res = await axios.get(BASE_URL + "/profile/view", {
//         withCredentials: true,
//       });
//       dispatch(addUser(res?.data));
//     } catch (err) {
//       if (err.status === 401) {
//         navigate("/login");
//       }
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     if (!userData) {
//       fetchUser();
//     }
//   }, []);


//   return (
//     <>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </>
//   )
// }

// export default Body;
// import Navbar from './Navbar';
// import Footer from './Footer';
// import { Outlet, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { BASE_URL } from "../utils/constant";
// import { useEffect } from 'react';
// import { addUser } from '../utils/userSlice';

// const Body = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const userData = useSelector((store) => store.user);

//   const fetchUser = async () => {
//     try {
//       const res = await axios.get(BASE_URL + "/profile/view", {
//         withCredentials: true,
//       });
//       dispatch(addUser(res?.data));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     if (!userData) {
//       fetchUser();
//     }
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </>
//   );
// };

// export default Body;

import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from "../utils/constant";
import { useEffect } from 'react';
import { addUser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res?.data));
      // If currently at /login and user is logged in, redirect to feed
      if (location.pathname === '/login') {
        navigate('/');
      }
    } catch (err) {
      if (location.pathname !== '/login') {
        navigate('/login');
      }
    }
  };

  useEffect(() => {
    if (!userData) {
      fetchUser();
    }
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;