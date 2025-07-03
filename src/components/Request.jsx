import axios from 'axios';
import React, { useEffect } from 'react';
import { BASE_URL } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addRequests, removeRequest} from '../utils/requestSlice';

const Request = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);
  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(BASE_URL + "/request/review/" + status + "/" + _id, {}, {
        withCredentials: true,
      });
      dispatch(removeRequest(_id));
    } catch (err) {
      //Handle here
    }
  }

  const fetchRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/pending", {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
    } catch (err) {
      console.error("Failed to fetch requests", err);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  if (!requests || requests.length === 0) {
    return <h1 className="text-center mt-10 text-xl">No pending requests</h1>;
  }
  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6 text-center">Pending Requests</h1>

      <div className="w-[95%] max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4">
        {requests.map((request) => {
          const user = request?.fromUserId;
          if (!user) return null;
          const { _id, firstName, lastName, age, gender } = user;
          return (
            <div
              key={_id}
              className="border border-gray-700 p-4 rounded-lg shadow-md bg-gray-800 text-white"
            >
              <p className="font-semibold text-lg mb-1">
                {firstName} {lastName}
              </p>
              <p className="text-sm text-gray-300">Age: {age}</p>
              <p className="text-sm text-gray-300 mb-4">Gender: {gender}</p>

              <div className="flex justify-between mt-2">
                <button className="btn btn-error btn-sm" onClick={() => reviewRequest("rejected", request._id)}>Reject</button>
                <button className="btn btn-success btn-sm" onClick={() => reviewRequest("accepted", request._id)}>Accept</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Request;