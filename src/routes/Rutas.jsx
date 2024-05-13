import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Model from "../components/layouts/Model";
import { CUSTOMERRUTAS, PATHS, PUBLICRUTAS } from "../models/RoutesModels";
import HistoryClientPage from '../pages/private/clients/history/HistoryClientPage';
import HomeClientPage from '../pages/private/clients/home/HomeClientPage';
import ReservationsStatusClientPage from '../pages/private/clients/reservationStatus/ReservationsStatusClientPage';
import ReservationsClientPage from '../pages/private/clients/reservations/ReservationsClientPage';
import TravelsClientPage from '../pages/private/clients/travels/TravelsClientPage';
import LoginPage from "../pages/public/login/LoginPage";
import RegisterPage from "../pages/public/register/RegisterPage";

export default function Rutas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={PUBLICRUTAS.LOGIN} element={<LoginPage />} />
                <Route path={PUBLICRUTAS.REGISTRO} element={<RegisterPage />} />
                <Route element={<Model />}>
                    <Route path={PATHS.CLIENTE}>
                        <Route path={CUSTOMERRUTAS.HOME} element={<HomeClientPage />} />
                        <Route path={CUSTOMERRUTAS.HISTORY} element={<HistoryClientPage />} />
                        <Route path={CUSTOMERRUTAS.TRAVELS} element={<TravelsClientPage />} />
                        <Route path={CUSTOMERRUTAS.RESERVATIONS} element={<ReservationsClientPage />} />
                        <Route path={CUSTOMERRUTAS.RESERVATIONSTATUS} element={<ReservationsStatusClientPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}