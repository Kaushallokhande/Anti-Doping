import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate, useOutletContext } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useOutletContext();

  const handleLoginSuccess = (response) => {
    console.log('Login Success:', response);
    setIsLoggedIn(true);
    navigate('/');
  };

  const handleLoginFailure = (error) => {
    console.error('Login Failed:', error);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-3 text-center text-gray-800">Login</h2>
        
        <form className="space-y-3" onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            Log In
          </button>
        </form>

        <div className="mt-3 text-center">
          <p className="text-sm text-gray-600">or</p>
          <div className="mt-2">
            <GoogleOAuthProvider clientId={process.env.clientId}>
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={handleLoginFailure}
                buttonText="Login with Google"
                className="w-full py-1.5 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
              />
            </GoogleOAuthProvider>
          </div>
        </div>

        <div className="mt-3 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
