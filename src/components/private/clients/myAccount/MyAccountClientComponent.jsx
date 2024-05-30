import React from 'react';
import { HiIdentification } from "react-icons/hi2";
import { MdModeOfTravel } from "react-icons/md";
import { RiAccountPinBoxFill } from "react-icons/ri";
import '../../../../assets/css/private/clients/myAccount/MyAccountClientComponent.css';
import profile from '../../../../assets/img/private/clients/ImagenIconoMasculino.png';

export default function MyAccountClientComponent({ cantidadReservas }) {
  const { nombre, apellido, cedula, usuario } = JSON.parse(localStorage.getItem("usuario")) || [];
  return (
    <div className='myAccountContainter'>
      <div className='profile'>
        <img src={profile} />
      </div>
      <div className='information'>
        <h1>{nombre} {apellido}</h1>
        <div className='referringInformation'>
          <section className='personalInformation'>
            <h4><HiIdentification className='icon' /> Documento identidad: {cedula}</h4>
            <h4><RiAccountPinBoxFill className='icon' /> Usuario: {usuario}</h4>
            <h4><MdModeOfTravel className='icon' /> Viajes con nosotros: {cantidadReservas}</h4>
          </section>
          <section className='logo'>
            <h1>TransporTecnology</h1>
          </section>
        </div>
      </div>
    </div>
  )
}
