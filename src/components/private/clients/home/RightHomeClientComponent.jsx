import React from 'react';
import '../../../../assets/css/private/clients/home/RightHomeClientComponent.css';
import imagenHome from '../../../../assets/img/private/clients/ImagenHome.gif'

export default function RightHomeClientComponent() {
  return (
    <div className='rightHomeClientContainer'>
      <img src={imagenHome} alt="" />
    </div>
  )
}
