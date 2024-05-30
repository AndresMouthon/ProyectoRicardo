import React from 'react';
import ContainerContent from '../../../../components/layouts/ContainerContent';
import HistoryClientComponent from '../../../../components/private/clients/history/HistoryClientComponent';
import useReserva from '../../../../hooks/private/useReserva';

export default function HistoryClientPage() {
    const { historialReservas, verReserva, verReservaUsuario } = useReserva();
    return (
        <ContainerContent>
            <HistoryClientComponent
                historialReservas={historialReservas}
                verReserva={verReserva}
                verReservaUsuario={verReservaUsuario}
            />
        </ContainerContent>
    )
}
