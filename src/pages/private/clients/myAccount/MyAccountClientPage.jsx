import React from 'react';
import MyAccountClientComponent from '../../../../components/private/clients/myAccount/MyAccountClientComponent';
import useReserva from '../../../../hooks/private/useReserva';
import Container from '../../../../utils/containers/Container';

export default function MyAccountClientPage() {
    const { historialReservas } = useReserva();
    let cantidadReservas = historialReservas.length;
    return (
        <Container>
            <MyAccountClientComponent cantidadReservas={cantidadReservas} />
        </Container>
    )
}
