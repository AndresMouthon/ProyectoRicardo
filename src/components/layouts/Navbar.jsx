import React from 'react';
import {
  FcFinePrint,
  FcHome,
  FcInfo,
  FcList,
  FcPaid,
  FcTimeline
} from "react-icons/fc";
import { IoLogOutSharp } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import '../../assets/css/layouts/Navbar.css';
import useNavbar from '../../hooks/layouts/useNavbar';
import useAuth from '../../hooks/public/useAuth';
import { CUSTOMERRUTAS, PATHS } from '../../models/RoutesModels';

export default function Navbar() {

  const location = useLocation();
  const {
    toggleNavbar,
    isNavbarOpen,
  } = useNavbar();
  const { cerrarSesion } = useAuth();
  return (
    <>
      <nav className="navbar">
        <h1 className='logo'>
          TransporTecnology
        </h1>
        <ul className={`menu ${isNavbarOpen ? 'openNavbar' : ''}`}>
          <li>
            <Link to={PATHS.CLIENTE + "/" + CUSTOMERRUTAS.HOME} className={`inicio ${location.pathname.substring(1).split("/")[1] === CUSTOMERRUTAS.HOME ? "activateHome" : ""}`} onClick={toggleNavbar} >
              <FcHome className='icon' />
              Inicio
            </Link>
          </li>
          <li>
            <Link to={PATHS.CLIENTE + "/" + CUSTOMERRUTAS.HISTORY} className={`historial ${location.pathname.substring(1).split("/")[1] === CUSTOMERRUTAS.HISTORY ? "activateHistory" : ""}`} onClick={toggleNavbar} >
              <FcFinePrint className='icon' />
              Historial
            </Link>
          </li>
          <li>
            <Link to={PATHS.CLIENTE + "/" + CUSTOMERRUTAS.TRAVELS} className={`viajes ${location.pathname.substring(1).split("/")[1] === CUSTOMERRUTAS.TRAVELS ? "activateTrevols" : ""}`} onClick={toggleNavbar} >
              <FcTimeline className='icon' />
              Viajes
            </Link>
          </li>
          <li>
            <Link to={PATHS.CLIENTE + "/" + CUSTOMERRUTAS.RESERVATIONS} className={`reservas ${location.pathname.substring(1).split("/")[1] === CUSTOMERRUTAS.RESERVATIONS ? "activateReservations" : ""}`} onClick={toggleNavbar} >
              <FcPaid className='icon' />
              Reservas
            </Link>
          </li>
          <li>
            <Link to={PATHS.CLIENTE + "/" + CUSTOMERRUTAS.RESERVATIONSTATUS} className={`estado ${location.pathname.substring(1).split("/")[1] === CUSTOMERRUTAS.RESERVATIONSTATUS ? "activateReservationStatus" : ""}`} onClick={toggleNavbar} >
              <FcInfo className="icon" />
              Estado
            </Link>
          </li>
          <li>
            <button onClick={cerrarSesion} className="cerrarSesion">
              <IoLogOutSharp className="icon" />
              Logout
            </button>
          </li>
        </ul>
        <button className="btn-menu" onClick={toggleNavbar}>
          <FcList className='icon-menu' />
        </button>
      </nav >
    </>
  )
}