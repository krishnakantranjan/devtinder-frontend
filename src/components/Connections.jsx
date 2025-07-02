import axios from 'axios';
import React, { useEffect } from 'react';
import { BASE_URL } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addConnections } from '../utils/connectionSlice';
import { useNavigate } from 'react-router-dom';

const Connections = () => {
    const connections = useSelector((store) => store.connections);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchConnection = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/allconnections", {
                withCredentials: true,
            });
            dispatch(addConnections(res?.data?.data));
        } catch (err) {
            if (err.response?.status === 401) {
                // User is not logged in → redirect to login
                navigate("/login");
            } else {
                console.error("Failed to fetch connections:", err);
            }
        }
    };

    useEffect(() => {
        fetchConnection();
    }, []);

    if (!connections) return null;

    if (connections.length === 0)
        return <h1 className="text-bold text-2xl text-center mt-10">No Connections Found!</h1>;

    return (
        <div className="flex flex-col items-center my-10">
            <h1 className="font-bold text-2xl mb-6">Connections</h1>

            <div className="w-90 max-w-2xl space-y-4">
                {connections.map((connection, index) => {
                    const { firstName, lastName, age, gender } = connection;

                    return (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-xl p-4 border border-gray-200 hover:shadow-lg transition-shadow"
                        >
                            <h2 className="text-lg font-semibold text-gray-800">
                                {firstName} {lastName}
                            </h2>
                            <p className="text-gray-600">Age: {age}</p>
                            <p className="text-gray-600 capitalize">Gender: {gender}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Connections;