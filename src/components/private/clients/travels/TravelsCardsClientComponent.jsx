import React from 'react';
import { FaCity } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import '../../../../assets/css/private/clients/travels/TravelsCardsClientComponent.css';
import { APIUSER } from '../../../../models/EnpointsModels';
import LoadingComponent from '../../../../utils/tools/LoadingComponent';
import TravelsOptionsClientComponent from './TravelsOptionsClientComponent';

export default function TravelsCardsClientComponent({ viajes, agregarReservaLocalStorage, loading }) {

    return (
        <div className='cardContainer'>
            <div className="card">
                <TravelsOptionsClientComponent />
            </div>
            {loading && (
                <div className="card">
                    <LoadingComponent />
                </div>
            )}
            {viajes.map((viaje) => (
                <div key={viaje.codigo} className="card">
                    <section className='imgCity'>
                        <img src={APIUSER.RUTAFRONT + viaje.imagen} alt={APIUSER.RUTAFRONT + viaje.imagen} />
                    </section>
                    <section className='informationCity'>
                        <h1>{viaje.ciudad}</h1>
                        <span className='footerGroup'>
                            <p>$ {viaje.precio}</p>
                            <div className='btnGroup'>
                                <button className='addCity' onClick={() => agregarReservaLocalStorage(viaje)}>
                                    <FaCity className="icon" />
                                    Add
                                </button>
                                <button className="viewdetail">
                                    <IoEyeSharp className="icon" />
                                    Ver
                                </button>
                            </div>
                        </span>
                    </section>
                </div>
            ))}
        </div>
    )

}
