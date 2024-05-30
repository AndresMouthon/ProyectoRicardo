import React from 'react';
import DataTable from "react-data-table-component";
import { CiCalendar, CiClock2, CiLocationOn } from "react-icons/ci";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { PiBusThin, PiChalkboardSimpleLight, PiMoneyThin } from "react-icons/pi";
import '../../../../assets/css/private/clients/history/ViewHistoryComponent.css';

export default function ViewHistoryComponent({ historialReservas, verReserva, verReservaUsuario }) {

  const columns = [
    {
      name: (
        <>
          <CiCalendar className="icon" /> Fecha
        </>
      ),
      selector: (row) => row.horario.fecha,
      sortable: true,
      width: "110px",
    },
    {
      name: (
        <>
          <CiClock2 className="icon" /> Hora
        </>
      ),
      selector: (row) => row.horario.horario,
      sortable: true,
      width: "110px",
    },
    {
      name: (
        <>
          <CiLocationOn className="icon" /> Destino
        </>
      ),
      selector: (row) => row.viaje.ciudad,
      sortable: true,
      width: "120px",
    },
    {
      name: (
        <>
          <PiMoneyThin className="icon" /> Precio
        </>
      ),
      selector: (row) => "$ " + row.viaje.precio,
      sortable: true,
      width: "120px",
    },
    {
      name: (
        <>
          <PiBusThin className="icon" /> Transporte
        </>
      ),
      selector: (row) => row.transporte.empresa + " " + row.transporte.placa,
      sortable: true,
      width: "150px",
    },
    {
      name: (
        <>
          <PiChalkboardSimpleLight className="icon" /> Ver
        </>
      ),
      selector: (row) => (
        <div className="cellAction">
          <button className="btnViewReserva" onClick={() => verReserva(row.codigo)}>
            {
              verReservaUsuario.codigo === row.codigo
                ? <FaEyeSlash className="icon" />
                : <IoEyeSharp className="icon" />
            }
          </button>
        </div>
      ),
      sortable: true,
      width: "130px",
    },
  ];

  return (
    <div className='tableContent'>
      <DataTable
        columns={columns}
        data={historialReservas}
        // progressPending={loading}
        pagination
      />
    </div>
  )
}
