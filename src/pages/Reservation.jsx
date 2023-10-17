import React, { Fragment } from "react"

export const Reservation = () => {
  return (
    <Fragment>
      <h1>Reservas</h1> <br />
      <form action="">
        <label htmlFor="date">Escoja una fecha </label>
        <input type="date" /><br /><br />
        <input type="number" placeholder="Cantidad de personas" /><br /> <br />
        <input type="text" placeholder="Nombre y apellido" /><br /> <br />
        <input type="email" placeholder="example@mail.com" /><br /> <br />
        <input type="text" placeholder="Teléfono" /><br /> <br />
        <input type="text" placeholder="Comentarios/solicitudes" /><br /> <br />
        <button type="submit">Enviar</button>
      </form>
    </Fragment>


  )
}

//  <h1 className="text-3xl font-bold underline">
//Hello world!
//</h1>
