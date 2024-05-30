import React from 'react';
import ContainerContent from '../../../../components/layouts/ContainerContent';
import TravelsCardsClientComponent from '../../../../components/private/clients/travels/TravelsCardsClientComponent';
import TravelsTitleClientComponent from '../../../../components/private/clients/travels/TravelsTitleClientComponent';
import useReserva from '../../../../hooks/private/useReserva';
import useViaje from '../../../../hooks/private/useViaje';

export default function TravelsClientPage() {
    const { viajes, loading } = useViaje();
    const { agregarReservaLocalStorage } = useReserva();
    return (
        <ContainerContent>
            <TravelsTitleClientComponent />
            <TravelsCardsClientComponent 
                viajes={viajes} 
                agregarReservaLocalStorage={agregarReservaLocalStorage} 
                loading={loading}
            />
        </ContainerContent>
    )
}
