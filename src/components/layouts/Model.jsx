import React from 'react';
import { Outlet } from 'react-router-dom';
import ContainerContent from './ContainerContent';
import Navbar from './Navbar';

export default function Model() {
  return (
    <>
      <Navbar />
      <div className='containerLayout'>
        <Outlet />
      </div>
    </>
  )
}
