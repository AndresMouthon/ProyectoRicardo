import React from 'react'
import '../../../assets/css/public/login/LoginPage.css'
import LeftBienvenidaComponent from '../../../components/public/login/LeftBienvenidaComponent'
import RightLoginComponent from '../../../components/public/login/RightLoginComponent'
export default function LoginPage() {
  return (
    <div className="login-container">
      <LeftBienvenidaComponent title = "Iniciar sesion" />
      <RightLoginComponent />
    </div>
  )
}