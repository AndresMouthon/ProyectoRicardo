import React from 'react';
import './LoadingComponent.css';

export default function LoadingComponent() {
    return (
        <div className="loading-container">
            <span className="loading-text">Cargando</span>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
    );
}