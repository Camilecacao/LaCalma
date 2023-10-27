import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase"
import { Card, CardGroup, } from 'react-bootstrap'
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
                 console.log(docs)   
                    
                setMenus(docs)
                
            } catch (error) {
                console.log(error)
                
            }
        }
        
      getCarta()
    }, [])

    
    

    return(
        <section className="mt-5 bg-[url('https://images.squarespace-cdn.com/content/v1/6260b3366c0480435312cb9c/856fee83-2b59-4341-84ff-22feed030cc8/DSC09297-Enhanced-NR-2.jpg?format=1500w')] bg-cover bg-no-repeat">
            <div className="backdrop-filter backdrop-grayscale">
            <h1 className="text-center text-white">Menú</h1>
            
            <article className="flex flex-col">
            <div className="mt-5 w-full" >
                {menus.map((menu) => (
                    <div className="text-white" key={menu.id}>
                    <h2 className="text-center">{menu.id}</h2>
                    <div className="flex flex-row flex-wrap justify-center">
                    {menu.platos.map((plato) => (
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
    
                    ))}</div>   
                    
                    </div> 
                ))}
            </div>
            </article>
            
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