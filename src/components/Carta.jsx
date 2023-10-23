import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase"
import { Button, Card, CardGroup, } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


const Carta = () => {

    const[menu, setMenu] = useState([])

    useEffect(() => {
        const getCarta = async () => {
            try {
                const collectionRef = collection(db, "Menu")
                const requestDocs = await getDocs(collectionRef)
                
                const docs = requestDocs.docs.map((doc) => {
                    const data = doc.data()
                    
                    return data
                })

                setMenu(docs)
                
            } catch (error) {
                console.log(error)
                
            }
        }
        
      getCarta()
    }, [])

    console.log(menu)
    

    return(
        <section>
            <div>
            <h1 className="text-center">Menú</h1>
            <h2 className="text-center">Mariscos</h2>
            <h2 className="text-center">Carnes</h2>
            <h2 className="text-center">Postres</h2>
            
            <Row xs={1} md={2} className="justify-content-center g-8 bg-dark">
            <CardGroup className="mt-5" >
                {menu.map((plato) => (
                    <div key={plato.id} className="m-3">
                        <Card border="light" bg="dark" text="white" style={{width: "18rem"}}>
                            <Card.Img style={{height: "12rem"}} variant="top" src={plato.imagen} alt={plato.nombre} />
                            <Card.Body className="text-center">
                                <Card.Title>
                                    {plato.nombre}
                                </Card.Title>
                                 
                                <Card.Text>
                                Precio: ${plato.precio}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </CardGroup>
            </Row>
            
        </div>

        </section>
        
    )
}
export default Carta


// function Carta() {
//     const [carta, setCarta] = useState([])
//     const getCarta = async () => {
//         try {
//             const collCarta = collection(db, "Menu")
//             const cartaSnapshot = await getDocs(collCarta)
//             const listaCarta = cartaSnapshot.docs.map((doc) => {
//                 const data = doc.data()
//                 data.id = doc.id
//                 return data
//             })
//             setCarta(listaCarta)
//         } catch (error) {
//             console.log(error)

//         }
//     }

// useEffect(() => {
//     getCarta()
  

 
// }, [])



//     return (
//         <div>{carta.map(carta => (<p key={carta.id}>{carta.nombre}</p>))}</div>
//     )
// }

// export default Carta