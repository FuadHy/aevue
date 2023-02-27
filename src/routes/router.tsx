import React from 'react';
import Dashboard from '../pages/Dashboard';
import Edit from '../pages/Edit';
import {
    createBrowserRouter,
  } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/edit/:id",
      element: <Edit />,
    },
]);

export {router};