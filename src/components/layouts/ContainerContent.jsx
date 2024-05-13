import React from 'react';
import '../../assets/css/layouts/ContainerContent.css';

export default function ContainerContent({ children }) {
  return (
    <div className='containerLayout'>
      {children}
    </div>
  )
}