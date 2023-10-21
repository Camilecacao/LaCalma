import { useEffect, useState } from "react"
import { db } from "../config/firebase"
import { collection, getDocs } from "firebase/firestore/lite"


function Carta() {
    const [carta, setCarta] = useState([])
    const getCarta = async () => {
        try {
            const collCarta = collection(db, "Menu")
            const cartaSnapshot = await getDocs(collCarta)
            const listaCarta = cartaSnapshot.docs.map(doc => ({...doc.data(), id:doc.id}))
            setCarta(listaCarta)
        } catch (error) {
            console.log(error)

        }
    }

useEffect(() => {
    getCarta()
  

 
}, [])

    return (
        <div>{carta.map(carta => (<p key={carta.id}>{carta.nombre}</p>))}</div>
    )
}

export default Carta