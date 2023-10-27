/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap"


export const PreparacionCarta = ({plato}) => {
  return (
    <div  className="m-3">
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
  )
}
