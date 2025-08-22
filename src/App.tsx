import { memo, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/home';
import Otp from './pages/otp';
import Register from './pages/Register';
import Login from './pages/login';
import Profile from './pages/profile';
import Auth from './pages/auth';

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {
          useRoutes([
            {
              path:"/", 
              element:<Layout/>,
              children:[
                {
                  index:true,
                  element:<Home/>
                },
                {
                  path:"register",
                  element:<Register/>
                },
                {
                  path:"otp",
                  element:<Otp/>
                },
                {
                  path:"login",
                  element:<Login/>
                },
                {
                  path:"/",
                  element:<Auth/>,
                  children:[
                    {
                      path:"profile",
                      element:<Profile/>
                    }
                  ]
                },
              ]
            }
          ])
        }
      </Suspense>
    </>
  );
};

export default memo(App);