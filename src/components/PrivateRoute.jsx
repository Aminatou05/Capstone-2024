import React from 'react'

import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

// The private route component  renders the child routes (Outlet) if the user is logged in,
// otherwise it redirects to the sign-in page
export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : <Navigate to='/sign-in' />;
}