import { Button, Checkbox, Label, TextInput } from "flowbite-react"
import { useState } from "react";

const initialBooking = {
  email:'', name:'', date:'', amount:'', comments:''
}


export const Reservation = () => {
  const [booking, setBooking] = useState(initialBooking)
    function onSubmitBooking (event, ) {
      event.preventDefault()
      console.log (booking);
    }

    const onChangeBooking = (event) => {
      setBooking({
        ...booking,
        [event.target.name]:event.target.value
      })
    }

  return (
    <form onSubmit={onSubmitBooking} className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email1"
            value="Ingresa tu correo"
          />
        </div>
        <TextInput
          name="email"
          value={booking.email}
          onChange={onChangeBooking}
          id="email1"
          placeholder="name@flowbite.com"
          required
          type="email"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="name"
            value="Ingresa tu nombre"
          />
        </div>
        <TextInput
        name="name"
        value={booking.name}
        onChange={onChangeBooking}
          id="name"
          required
          type="text"
        />
      </div>
      
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="invitados"
            value="Comensales"
          />
        </div>
        <TextInput
          name="amount"
          value={booking.amount}
          onChange={onChangeBooking}
          id="invitados"
          placeholder="cantidad"
          required
          type="number"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="date"
            value="Elige una fecha"
          />
        </div>
        <TextInput
          name="date"
          value={booking.date}
          onChange={onChangeBooking}
          id="date"
          placeholder="Fecha"
          required
          type="date"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="comentarios"
            value="Comentarios"
          />
        </div>
        <TextInput
          name="comments"
          value={booking.comments}
          onChange={onChangeBooking}
          id="comentarios"
          placeholder="Comentarios"
          required
          type="text"
        />
      </div>
      <Button type="submit">
        Submit
      </Button>
    </form>
    // <Fragment>
    //   <h1>Reservas</h1> <br />
    //   <form action="">
    //     <label htmlFor="date">Escoja una fecha </label>
    //     <input type="date" /><br /><br />
    //     <input type="number" placeholder="Cantidad de personas" /><br /> <br />
    //     <input type="text" placeholder="Nombre y apellido" /><br /> <br />
    //     <input type="email" placeholder="example@mail.com" /><br /> <br />
    //     <input type="text" placeholder="Teléfono" /><br /> <br />
    //     <input type="text" placeholder="Comentarios/solicitudes" /><br /> <br />
    //     <button type="submit">Enviar</button>
    //   </form>
    // </Fragment>


  )
}

//  <h1 className="text-3xl font-bold underline">
//Hello world!
//</h1>
