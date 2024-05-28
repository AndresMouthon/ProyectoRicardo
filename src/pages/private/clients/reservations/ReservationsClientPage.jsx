import React from "react";
import ContainerContent from "../../../../components/layouts/ContainerContent";
import ReservationsClientComponent from "../../../../components/private/clients/reservations/ReservationsClientComponent";
import useReserva from "../../../../hooks/private/useReserva";

export default function ReservationsClientPage() {
  const { reservasLocalStorage, borrarReservaLocalStorage } = useReserva();
  return (
    <ContainerContent>
      <ReservationsClientComponent
        reservasLocalStorage={reservasLocalStorage}
        borrarReservaLocalStorage={borrarReservaLocalStorage}
      />
    </ContainerContent>
  );
}
