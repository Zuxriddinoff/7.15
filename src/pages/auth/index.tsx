import { memo } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../lib';
import { Navigate, Outlet } from 'react-router-dom';

const Auth = () => {
    const token = useSelector((state: RootState) => state.authSlice.access_token)
  return token ? <Outlet/> : <Navigate replace to={"/Login"}/>;
};

export default memo(Auth);