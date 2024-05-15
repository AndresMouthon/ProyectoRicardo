import React from 'react';
import '../../../../assets/css/private/clients/home/home.css';
import LeftBienvenidaHomeComponent from './LeftBienvenidaHomeComponent';
import RightHomeClientComponent from './RightHomeClientComponent';

export default function HomeClientComponent() {
  return (
    <div className='homeClientContainer'>
      <LeftBienvenidaHomeComponent />
      <RightHomeClientComponent />
    </div>
  )
}
