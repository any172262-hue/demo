import React from 'react';
import { Navigate } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return <Navigate to="/" replace />;
};

export default NotFound;
