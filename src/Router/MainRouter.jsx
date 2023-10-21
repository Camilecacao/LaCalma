import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { About } from "../pages/About"
import { Menu } from "../pages/Menu"
import { Reservation } from "../pages/Reservation"
export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Reservation" element={<Reservation />} />
      <Route path="/*" element={<h1>Error 404</h1>} />
    </Routes>

  )
}
