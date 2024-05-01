import { useState } from "react";
import { Link, useNavigate  , } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';

/**
 * Sign-in component with form for users to enter email and password.
 * Handles form submission, state management, and error display.
 */
export default function SignIn() {
  // State for form data and error handling
  const [formData, setFormData] = useState({});
 const {loading, error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Handle changes in form inputs funtion
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

   // Handle form submission function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
   dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
     
       dispatch(signInFailure(data.message));
        return;
      }
    
      dispatch(signInSuccess(data));
      navigate('/');// this will navigate to the home page after successfully signed-in
    } catch (error) {
     dispatch(signInFailure(error.message));
    }
  };
  // Render sign-in form
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button
            disabled={loading}
         className="bg-slate-800 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
        {loading ? 'Loading...' : 'Sign In'}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p> Dont have an account?</p>
        <Link to={"/sign-up"}>
          <span className="text-sky-500">Sign up</span>
        </Link>
      </div>
{/* A paragraph showing the error */}
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}
