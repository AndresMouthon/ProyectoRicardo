import React from 'react';
import {
    MdDirectionsBus,
    MdOutlineCalendarToday,
    MdOutlineFeaturedPlayList,
    MdOutlineStarBorderPurple500
} from "react-icons/md";
import '../../../../assets/css/private/clients/travels/TravelsOptionsClientComponent.css';

export default function TravelsOptionsClientComponent() {
    return (
        <>
            <button className='btnOptions active'><MdOutlineFeaturedPlayList className='icon' /> Todos</button>
            <button className='btnOptions'><MdDirectionsBus className='icon' /> Mis viajes</button>
            <button className='btnOptions'><MdOutlineCalendarToday className='icon' /> Temporadas</button>
            <button className='btnOptions'><MdOutlineStarBorderPurple500 className='icon' /> Populares</button>
        </>
    )
}
