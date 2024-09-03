import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import flowerImg from "./images/sliderimg5.avif";
import lighthouseImg from "./images/sliderimg3.jpeg";
import dandelion from "./images/sliderimg4.jpeg";
import Entry from './components/EntryPoint/Entry';
import FrontLayout from './components/EntryPoint/FrontLayout';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import NewsSection from './components/NewsSection';
import Rules from './components/Rule.js';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Dashboard from './components/Dashboard';
import QuizSection from './components/QuizSection';
import Menu from './components/Menu';
import Language from './components/Language';
import Medical from './components/Medical.js';
import './i18n.js'

const images = [
  lighthouseImg,
  flowerImg,
  dandelion,
  lighthouseImg,
  flowerImg,
  dandelion,
  lighthouseImg,
];

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Entry />,
        children: [
          {
            path: '/',
            element: <FrontLayout images={images} />
          },
          {
            path: '/news',
            element: <NewsSection />
          },
          {
            path: '/med',
            element: <Medical />
          },
          {
            path: '/menu',
            element: <Menu />
          },
          {
            path: '/dashboard',
            element: <Dashboard />
          },
          {
            path: '/quiz',
            element: <QuizSection />
          },
          {
            path: '/lng',
            element: <Language />
          },
          {
            path: '/rules',
            element: <Rules />
          },
        ]
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
    ]
  }
]);

root.render(
  <React.StrictMode>
    <React.Suspense fallback = "loading ...">
    <GoogleOAuthProvider clientId="215309718511-uv4b9g72pq3lj3qv504mtnvlvsg7sfll.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
    </React.Suspense>
  </React.StrictMode>
);

reportWebVitals();
