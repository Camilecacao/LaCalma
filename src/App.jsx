import { } from 'react'

import './App.css'
// import {  } from './components/Saludos'
// import { Home } from './pages/Home'
// import { Menu } from './pages/Menu'
// import { Reservation } from './pages/Reservation'
// import {About} from "./pages/About"
import { MainRouter } from './Router/MainRouter'
import { NavbarAvatar } from './components/Navbar'
import { FooterRRSS } from './components/Footer'

function App() {
  

  return (
    <>
    {/* <Reservation/> */}
    {/* <Menu/> */}
   {/* <Home/>    */}
   <NavbarAvatar/>
   <MainRouter/>
   {/* <About/> */}
   <FooterRRSS/>
    </>
  )
}

export default App
