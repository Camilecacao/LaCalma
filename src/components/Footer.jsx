'use client';

import { Footer } from 'flowbite-react';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';

export const FooterRRSS=()=> {
  return (
    <Footer container className="w-full bg-zinc-800">
      <div>
        <div className="grid w-full justify-between sm:flex sm:justify-between gap-5 md:px-48 md:flex md:grid-cols-1">
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
          <div className="flex flex-col md:flex-row gap-5 sm:mt-4 sm:gap-24">
            <div className='flex flex-col justify-start items-center'>
              <Footer.Title title="¿Dónde nos encuentras?" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Av. Nueva Costanera #3832, Vitacura
                </Footer.Link>
                <Footer.Link href="#">
                  <div className='w-24 h-auto'><iframe className='w-full h-auto' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.9029565608853!2d-70.59830769999999!3d-33.3996959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf49f8b91445%3A0x42bc49a00488e9a0!2sAv.%20Nueva%20Costanera%203832%2C%207630357%20Vitacura%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1698454934806!5m2!1ses!2scl" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className='flex flex-col justify-start items-center'>
              <Footer.Title title="Contacto" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Teléfono: +56912345678
                </Footer.Link>
                <Footer.Link href="#">
                  Correo: lacalma@lacalma.cl
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


