import React from 'react';
import { IoLogOutSharp } from "react-icons/io5";
import {
  FcFinePrint,
  FcHome,
  FcInfo,
  FcPaid,
  FcTimeline
} from "react-icons/fc";
import { Link, useLocation } from 'react-router-dom';
import '../../assets/css/layouts/Navbar.css';
import { CUSTOMERRUTAS, PATHS, PUBLICRUTAS } from '../../models/RoutesModels';
import { FcList } from "react-icons/fc";
import useNavbar from '../../hooks/layouts/useNavbar';

export default function Navbar() {

  const location = useLocation();
  const {
    toggleNavbar,
    isNavbarOpen,
  } = useNavbar();

  // return (
  //   <>
  //     <nav className="navbar">
  //       <section className="logo">
  //         <h1>TransporTecnology</h1>
  //       </section>
  //       <ul className={`menu ${isNavbarOpen ? 'openNavbar' : ''}`}>
  //         <li>
  //           <Link to={PATHS.CLIENTE + "/" + CUSTOMERRUTAS.HOME} className={`inicio ${location.pathname.substring(1).split("/")[1] === CUSTOMERRUTAS.HOME ? "activateHome" : ""}`} onClick={toggleNavbar} >
  //             <FcHome className='icon' />
  //             Inicio
  //           </Link>
  //         </li>
  //         <li>
  //           <Link to={PATHS.CLIENTE + "/" + CUSTOMERRUTAS.HISTORY} className={`historial ${location.pathname.substring(1).split("/")[1] === CUSTOMERRUTAS.HISTORY ? "activateHistory" : ""}`} onClick={toggleNavbar} >
  //             <FcFinePrint className='icon' />
  //             Historial
  //           </Link>
  //         </li>
  //         <li>
  //           <Link to={PATHS.CLIENTE + "/" + CUSTOMERRUTAS.TRAVELS} className={`viajes ${location.pathname.substring(1).split("/")[1] === CUSTOMERRUTAS.TRAVELS ? "activateTravels" : ""}`} onClick={toggleNavbar} >
  //             <FcTimeline className='icon' />
  //             Viajes
  //           </Link>
  //         </li>
  //         <li>
  //           <Link to={PATHS.CLIENTE + "/" + CUSTOMERRUTAS.RESERVATIONS} className={`reservas ${location.pathname.substring(1).split("/")[1] === CUSTOMERRUTAS.RESERVATIONS ? "activateReservations" : ""}`} onClick={toggleNavbar} >
  //             <FcPaid className='icon' />
  //             Reservas
  //           </Link>
  //         </li>
  //         <li>
  //           <Link to={PATHS.CLIENTE + "/" + CUSTOMERRUTAS.RESERVATIONSTATUS} className={`carrito ${location.pathname.substring(1).split("/")[1] === CUSTOMERRUTAS.RESERVATIONSTATUS ? "activateReservationStatus" : ""}`} onClick={toggleNavbar} >
  //             <FcInfo className="icon" />
  //             Estado
  //           </Link>
  //         </li>
  //         <ul className="cerrarSesion">
  //           <li>
  //             <Link to={PUBLICRUTAS.LOGIN} className="cerrarSesion">
  //               <IoLogOutSharp className="icon" />
  //               Cerrar sesion
  //             </Link>
  //           </li>
  //         </ul>
  //       </ul>
  //       <button className="btn-menu" onClick={toggleNavbar}>
  //         <FcList className='icon-menu' />
  //       </button>
  //     </nav>
  //     <hr className="linea" />
  //   </>
  // )

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
            <Link to={PUBLICRUTAS.LOGIN} className="cerrarSesion">
              <IoLogOutSharp className="icon" />
              Logout
            </Link>
          </li>
        </ul>
        <button className="btn-menu" onClick={toggleNavbar}>
          <FcList className='icon-menu' />
        </button>
      </nav >
      <center>
        <hr className="linea" />
      </center>
    </>
  )
}