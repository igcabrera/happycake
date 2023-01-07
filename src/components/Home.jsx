import React from 'react'
import CakeImg from '../assets/img/cake.png'

export default function Home() {
  return (
    <div className='contenedor'>
        <h1>Bienvenido a <span>Happy Cake</span></h1>
        <h3>El lugar de los pasteles felices</h3>
        <img src={CakeImg} alt="foto" />
    </div>
  )
}
