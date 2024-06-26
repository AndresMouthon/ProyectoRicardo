import React from "react";
import { useParams } from "react-router-dom";
import "../../../../assets/css/private/clients/reservations/ContinueReservationClientPage.css";
import FormContinueReservationClientComponent from "../../../../components/private/clients/reservations/FormContinueReservationClientComponent";
import ImageContinueReservationClientComponent from "../../../../components/private/clients/reservations/ImageContinueReservationClientComponent";
import useHorario from "../../../../hooks/private/useHorario";
import useReserva from "../../../../hooks/private/useReserva";
import useTransporte from "../../../../hooks/private/useTransporte";

export default function ContinueReservationClientPage() {

  const { id } = useParams();
  const {
    reservaLocalStorage,
    loadingButton,
    handleChange,
    registrarReserva,
  } = useReserva(id);
  const { horariosReserva } = useHorario(id);
  const { transporteViajes } = useTransporte(id);

  const { imagen, ciudad } = reservaLocalStorage;

  return (
    <div className="continueReservationContainer">
      <FormContinueReservationClientComponent
        ciudad={ciudad}
        horariosReserva={horariosReserva}
        transporteViajes={transporteViajes}
        handleChange={handleChange}
        codigoViaje={id}
        registrarReserva={registrarReserva}
        loading={loadingButton}
      />
      <ImageContinueReservationClientComponent imagen={imagen} />
    </div>
  );
}
