import React from 'react'
import '../../../assets/css/public/login/LoginPage.css'
import LeftBienvenidaComponent from '../../../components/public/login/LeftBienvenidaComponent'
import RightRegisterComponent from '../../../components/public/register/RightRegisterComponent'

export default function RegisterPage() {
  return (
    <div className="login-container">
      <LeftBienvenidaComponent title = "Registrarse" />
      <RightRegisterComponent />
    </div>
  )
}
