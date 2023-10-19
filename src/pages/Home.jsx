import { Carousel } from "flowbite-react"
import { NavbarAvatar } from "../components/Navbar"
import { FooterRRSS } from "../components/Footer"


export const Home = () => {
  return (
   <>
   {/* <NavbarAvatar/> */}
    <div></div>
    {/* <img src="/images/caracolas.jpeg"></img> */}
    <div className="w-full h-[500px]">
      <Carousel indicators={false}>
        <img
          alt="..."
          src="/images/caracolas.jpeg"
        />
        <img
          alt="..."
          src="/images/atún.jpeg"
        />
        <img
          alt="..."
          src="/images/erizo.jpeg"
        />
        <img
          alt="..."
          src="/images/surtido.jpeg"
        />
      </Carousel>
      </div>
      {/* <FooterRRSS/> */}
   </>
  )
}
