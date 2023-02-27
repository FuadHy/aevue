import React from 'react';
import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {router} from './routes/router';



function App(): React.ReactElement {
  return (
    <div className='flex w-screen h-screen flex-col bg-background'>
      <Header />
      <div className='flex flex-1'>
        <Sidebar />
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
