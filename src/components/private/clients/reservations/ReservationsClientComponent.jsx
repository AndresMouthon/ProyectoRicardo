import React from "react";
import { FaCity } from "react-icons/fa";
import {
  FaCircleCheck,
  FaCircleXmark,
  FaMoneyCheckDollar,
} from "react-icons/fa6";
import { HiIdentification } from "react-icons/hi2";
import { Link } from "react-router-dom";
import "../../../../assets/css/private/clients/reservations/ReservationsClientComponent.css";
import { APIUSER } from "../../../../models/EnpointsModels";
import { CUSTOMERRUTAS, PATHS } from "../../../../models/RoutesModels";

export default function ReservationsClientComponent({
  reservasLocalStorage,
  borrarReservaLocalStorage,
}) {
  return (
    <div className="reservationsContainer">
      {reservasLocalStorage.map((reserva, index) => (
        <div className="card" key={index}>
          <section className="imgCity">
            <img
              src={APIUSER.RUTAFRONT + reserva.imagen}
              alt={reserva.imagen}
            />
          </section>
          <section className="informationCity">
            <span className="informationGroup">
              <HiIdentification className="iconIdentification" />
              <h1 className="textIdentification">{reserva.cedula}</h1>
            </span>
            <span className="informationGroup">
              <FaCity className="iconCity" />
              <h1 className="textCity">{reserva.ciudad}</h1>
            </span>
            <span className="informationGroup">
              <FaMoneyCheckDollar className="iconMoney" />
              <h1 className="textMoney">{reserva.precio} $</h1>
            </span>
            <span className="btnGroup">
              <Link className="finalizaReservation" to={CUSTOMERRUTAS.RESERVATIONRUTAS.CONTINUERESERVATION + "/" + reserva.codigo}>
                <FaCircleCheck />
                Continuar
              </Link>
              <button
                className="cancelReservation"
                onClick={() => borrarReservaLocalStorage(reserva.codigo)}
              >
                <FaCircleXmark />
                Cancelar
              </button>
            </span>
          </section>
          {/* <p>Reservas pendientes: {reservasLocalStorage.length}</p> */}
        </div>
      ))}
    </div>
  );
}
