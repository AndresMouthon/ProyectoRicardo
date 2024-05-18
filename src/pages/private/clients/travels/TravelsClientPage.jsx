import React from 'react';
import ContainerContent from '../../../../components/layouts/ContainerContent';
import TravelsCardsClientComponent from '../../../../components/private/clients/travels/TravelsCardsClientComponent';
import TravelsTitleClientComponent from '../../../../components/private/clients/travels/TravelsTitleClientComponent';

export default function TravelsClientPage() {
    return (
        <ContainerContent>
            <TravelsTitleClientComponent />
            <TravelsCardsClientComponent />
        </ContainerContent>
    )
}
