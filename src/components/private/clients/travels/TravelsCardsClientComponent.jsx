import React from 'react';
import '../../../../assets/css/private/clients/travels/TravelsCardsClientComponent.css';
import cardBarranquilla from '../../../../assets/img/private/clients/cardBarranquilla.png';
import cardBogota from '../../../../assets/img/private/clients/cardBogota.png';
import cardBucaramanga from '../../../../assets/img/private/clients/cardBucaramanga.png';
import cardMedellin from '../../../../assets/img/private/clients/cardMedellin.png';
import TravelsOptionsClientComponent from './TravelsOptionsClientComponent';
import { FaCity } from "react-icons/fa6";

export default function TravelsCardsClientComponent() {
    return (
        <div className='cardContainer'>
            <div className="card">
                <TravelsOptionsClientComponent />
            </div>
            <div className="card">
                <section className='imgCity'>
                    <img src={cardBogota} alt="..." />
                </section>
                <section className='informationCity'>
                    <h1>Bogotá</h1>
                    <span className='footerGroup'>
                        <p>$ 90.000</p>
                        <button>
                            <FaCity className="icon" />
                            Reservar
                        </button>
                    </span>
                </section>
            </div>
            <div className="card">
                <section className='imgCity'>
                    <img src={cardMedellin} alt="..." />
                </section>
                <section className='informationCity'>
                    <h1>Medellin</h1>
                    <span className='footerGroup'>
                        <p>$ 90.000</p>
                        <button>
                            <FaCity className="icon" />
                            Reservar
                        </button>
                    </span>
                </section>
            </div>
            <div className="card">
                <section className='imgCity'>
                    <img src={cardBucaramanga} alt="..." />
                </section>
                <section className='informationCity'>
                    <h1>Bucaramanga</h1>
                    <span className='footerGroup'>
                        <p>$ 90.000</p>
                        <button>
                            <FaCity className="icon" />
                            Reservar
                        </button>
                    </span>
                </section>
            </div>
            <div className="card">
                <section className='imgCity'>
                    <img src={cardBarranquilla} alt="..." />
                </section>
                <section className='informationCity'>
                    <h1>Barranquilla</h1>
                    <span className='footerGroup'>
                        <p>$ 90.000</p>
                        <button>
                            <FaCity className="icon" />
                            Reservar
                        </button>
                    </span>
                </section>
            </div>
        </div>
    )
}
