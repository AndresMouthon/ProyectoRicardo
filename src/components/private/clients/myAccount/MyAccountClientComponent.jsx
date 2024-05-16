import React from 'react';
import { MdModeOfTravel, MdOutlineTravelExplore, MdPhonelink } from "react-icons/md";
import '../../../../assets/css/private/clients/myAccount/MyAccountClientComponent.css';
import profile from '../../../../assets/img/private/clients/ImagenIconoMasculino.png';

export default function MyAccountClientComponent() {
  return (
    <div className='myAccountContainter'>
      <div className='profile'>
        <img src={profile} />
      </div>
      <div className='information'>
        <h1>Andres Domingo Mouthon Mancera</h1>
        <div className='referringInformation'>
          <section className='personalInformation'>
            <h4><MdPhonelink className='icon' /> Reservas: 1</h4>
            <h4><MdOutlineTravelExplore className='icon' /> Lugares diferentes: 1</h4>
            <h4><MdModeOfTravel className='icon' /> Ultimo destino: 1</h4>
          </section>
          <section className='logo'>
            <h1>TransporTecnology</h1>
          </section>
        </div>
      </div>
    </div>
  )
}
