'use client';

import { Navbar } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';

export const NavbarAvatar=()=> {
  return (
    <Navbar className='bg-zinc-800'fluid rounded>
      <Navbar.Brand as={Link} to="/">
        <img src="https://images.squarespace-cdn.com/content/v1/6260b3366c0480435312cb9c/a551c10f-99de-43f7-8bc7-fb6b8cfbb947/lc_logo%403.png?format=1500w" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-3xl font-semibold text-white">La Calma</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link className="text-white" as={NavLink} to="/">Inicio</Navbar.Link>
        <Navbar.Link className="text-white" as={NavLink} to="/About">Nosotros</Navbar.Link>
        <Navbar.Link className="text-white" as={NavLink} to="/Menu">Menú</Navbar.Link>
        <Navbar.Link className="text-white" as={NavLink} to="/Reservation">Reserva</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


