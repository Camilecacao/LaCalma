import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase"
import { Button, Card, CardGroup, } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';

const Carta = () => {

    const[menus, setMenus] = useState([])

    useEffect(() => {
        const getCarta = async () => {
            try {
                const collectionRef = collection(db, "Menu")
                const requestDocs = await getDocs(collectionRef)
                
                const docs = requestDocs.docs.map((doc) => ({ ...doc.data(),
                    id: doc.id,}))
                    
                    
                setMenus(docs)
                
            } catch (error) {
                console.log(error)
                
            }
        }
        
      getCarta()
    }, [])

    
    

    return(
        <section className="mt-5">
            <div>
            <h1 className="text-center">Menú</h1>
            
            <Row xs={1} md={2} className="justify-content-center g-8">
            <CardGroup className="mt-5" >
                {menus.map((menu) => (
                    
                    menu.platos.map((plato) => (
                        <div key={menu.id} className="m-3">
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
                    )),
                    
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