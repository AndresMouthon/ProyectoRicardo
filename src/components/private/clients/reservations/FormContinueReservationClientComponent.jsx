import React from "react";
import { CiCalendarDate, CiUser } from "react-icons/ci";
import { MdAddComment } from "react-icons/md";
import { PiBusThin } from "react-icons/pi";
import "../../../../assets/css/private/clients/reservations/FormContinueReservationClientComponent.css";
import Spiner from "../../../../utils/tools/Spiner";

export default function FormContinueReservationClientComponent({
  ciudad,
  horariosReserva,
  transporteViajes,
  handleChange,
  codigoViaje,
  registrarReserva,
  loading,
}) {
  const { cedula } = JSON.parse(localStorage.getItem("usuario"));
  return (
    <div className="formContainer">
      <h1 className="formTitle">Finalizar reserva</h1>
      <h3 className="formSubtitle">{ciudad}</h3>
      <span className="input-group">
        <label>
          <CiCalendarDate className="icon" />
          Horario
        </label>
        <select name="idHorario" onChange={handleChange}>
          <option value="">Seleccione el horario...</option>
          {horariosReserva.map((horario) => (
            <option key={horario.idHorario} value={horario.idHorario}>
              {horario.fecha} - {horario.horario}
            </option>
          ))}
        </select>
      </span>
      <span className="input-group">
        <label>
          <PiBusThin className="icon" />
          Autobus
        </label>
        <select name="placa" onChange={handleChange}>
          <option value="">Seleccione un autobus...</option>
          {transporteViajes.map((transporte) => (
            <option key={transporte.placa} value={transporte.placa}>
              {transporte.empresa}/Ruta: {transporte.ruta}
            </option>
          ))}
        </select>
      </span>
      <span className="input-group">
        <label>
          <CiUser className="icon" />
          Pasajeros
        </label>
        <input type="number" placeholder="Digite la cantidad de pasajeros..." onChange={handleChange} name="pasajeros" />
      </span>
      <button className="btn-finalizar" onClick={() => registrarReserva(cedula, codigoViaje)}>
        {
          loading ? (
            <Spiner />
          ) : (
            <>
              <MdAddComment className="icon" /> Realizar reserva
            </>
          )
        }
      </button>
    </div>
  );
}
