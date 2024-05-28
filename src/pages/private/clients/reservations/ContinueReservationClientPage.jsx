import React from "react";
import { useParams } from "react-router-dom";
import "../../../../assets/css/private/clients/reservations/ContinueReservationClientPage.css";
import FormContinueReservationClientComponent from "../../../../components/private/clients/reservations/FormContinueReservationClientComponent";
import ImageContinueReservationClientComponent from "../../../../components/private/clients/reservations/ImageContinueReservationClientComponent";
import useReserva from "../../../../hooks/private/useReserva";

export default function ContinueReservationClientPage() {
  const { id } = useParams();
  const { reservaLocalStorage } = useReserva(id);
  const { imagen } = reservaLocalStorage;
  return (
    <div className="continueReservationContainer">
      <FormContinueReservationClientComponent />
      <ImageContinueReservationClientComponent imagen={imagen} />
    </div>
  );
}
