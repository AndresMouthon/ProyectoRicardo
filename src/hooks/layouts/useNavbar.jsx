import React, { useState } from 'react'

export default function useNavbar() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen)
  }

  return {
    toggleNavbar,
    isNavbarOpen,
  }
}
