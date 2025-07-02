import React, { useState } from 'react';
import { BASE_URL } from '../utils/constant';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const ProfileEdit = ({ user }) => {
    const [firstName, setFirstName] = useState(user.firstName || '');
    const [lastName, setLastName] = useState(user.lastName || '');
    const [gender, setGender] = useState(user.gender || '');
    const [age, setAge] = useState(user.age || '');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate(); // ✅ fixed here
    const [showToast, setShowToast] = useState(false);
    const saveProfile = async () => {
        try {
            const res = await axios.patch(
                BASE_URL + "/profile/edit",
                {
                    firstName,
                    lastName,
                    gender,
                    age,
                },
                { withCredentials: true }
            );
            dispatch(addUser(res?.data));
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
                navigate("/");
            }, 2000);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to update profile");
        }
    };
    return (
        <>
            <div className="flex justify-center my-15">
                <div className="card bg-base-300 w-96 shadow-md">
                    <div className="card-body">
                        <h2 className="card-title justify-center text-xl mb-4">Edit Profile</h2>

                        <label className="form-control w-full mb-2">
                            <span className="label-text mb-1">First Name</span>
                            <input
                                type="text"
                                value={firstName}
                                className="input input-bordered"
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="Enter first name"
                            />
                        </label>

                        <label className="form-control w-full mb-2">
                            <span className="label-text mb-1">Last Name</span>
                            <input
                                type="text"
                                value={lastName}
                                className="input input-bordered"
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Enter last name"
                            />
                        </label>

                        <label className="form-control w-full mb-2">
                            <span className="label-text mb-1">Age</span>
                            <input
                                type="number"
                                value={age}
                                className="input input-bordered"
                                onChange={(e) => setAge(e.target.value)}
                                placeholder="Enter age"
                                min="0"
                            />
                        </label>

                        <label className="form-control w-full mb-4">
                            <span className="label-text mb-1">Gender</span>
                            <select
                                className="select select-bordered"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <option value="">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </label>

                        {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}

                        <div className="card-actions justify-center">
                            <button
                                className="btn btn-primary w-full"
                                onClick={saveProfile}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {showToast && (
                <div className="toast toast-top toast-center">
                    <div className="alert alert-success">
                        <span>Profile updated successfully.</span>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProfileEdit;