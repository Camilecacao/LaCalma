'use client';

import { Footer } from 'flowbite-react';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';

export const FooterRRSS=()=> {
  return (
    <Footer container className="w-full bg-zinc-800">
      <div>
        <div className="grid w-full justify-between sm:flex sm:justify-between md:px-48 md:flex md:grid-cols-1">
          <div className='flex flex-row gap-5'> 
            <div>
            <img 
              alt="Flowbite Logo"
              href="https://flowbite.com"
              name="La Calma"
              src="/images/logo.png" className="h-auto w-24"
            />
            </div>
            <h4 className=' text-white text-2xl'>La Calma</h4>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:mt-4 sm:gap-24">
            <div>
              <Footer.Title title="Nosotros" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Flowbite
                </Footer.Link>
                <Footer.Link href="#">
                  Tailwind CSS
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contacto" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Teléfono
                </Footer.Link>
                <Footer.Link href="#">
                  Correo
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full md:px-96 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="Hecho con 💜 por CEJ & MRB"
            href="#"
            year={2023}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="#"
              icon={BsWhatsapp}
            />
          </div>
          
        </div>
      </div>
    </Footer>
  )
}


