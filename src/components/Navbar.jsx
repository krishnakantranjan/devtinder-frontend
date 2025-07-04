import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constant';
import { removeUser } from '../utils/userSlice';
const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true, });
      dispatch(removeUser());
      navigate('/login');
    } catch (err) {
      //show error page
      console.error(err);
    }
  }

  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">👨🏻‍💻DevTinder</Link>
      </div>
      <div className="flex gap-2">
        <div className="dropdown dropdown-end mx-5">
          {user ? (
            <>
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Profile"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/connections">Connection</Link></li>
                <li><Link to="/request">Request</Link></li>
                <li><a onClick={handleLogout}>Logout</a></li>
              </ul>
            </>
          ) : (
            <>
              <button tabIndex={0} className="btn btn-outline">Sign Up</button>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-2 shadow">
                <li><Link to="/signup">Create Account</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
