import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore"
import { Button, Label, TextInput } from "flowbite-react"
import { useState } from "react";

const initialBooking = {
  email: '', name: '', date: '', amount: '', comments: ''
}


export const Reservation = () => {
  const [booking, setBooking] = useState(initialBooking)
  async function onSubmitBooking(event,) {
    event.preventDefault()
    try {
      const collectionRef = collection(db, "Reservas");
      await addDoc(collectionRef, {
        ...booking
      })
    } catch (error) {
      console.error(error)
    }
    setBooking({ ...initialBooking })
  }

  const onChangeBooking = (event) => {
    setBooking({
      ...booking,
      [event.target.name]: event.target.value
    })

  }


  return (
    <section className="bg-[url('https://images.squarespace-cdn.com/content/v1/6260b3366c0480435312cb9c/25bc1aae-5185-4c87-8111-216fc5d40874/DSC09227.jpg?format=1500w')] ">
      <div className="flex w-full flex-col bg-zinc-900/50 md:px-48 py-10 gap-4 mt-5 mb-5">
        <form onSubmit={onSubmitBooking} className="flex w-full flex-col md:px-48 gap-4 mb-5 p-5">
          <h1 className="text-center">Reservas</h1>
          <div>
            <div className="mb-2 block">
              <Label
                color={"gray"}
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
                color={"gray"}
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
                color={"gray"}
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
                color={"gray"}
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
                color={"gray"}
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
            Enviar
          </Button>
        </form>
      </div>

    </section>

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
