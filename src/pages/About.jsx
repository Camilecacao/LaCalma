

export const About = () => {
  return (
  <>
    <h1 className="text-5xl mx-auto text-center mt-10 font-bold">QUIÉNES SOMOS</h1>
    <section className="flex flex-col md:flex-row gap-8 justify-around mt-20 px-10">
     <article className="w-full md:h-1/2"> 
     <h4 className="text-3xl text-center mb-5">Un concepto moderno de cocina</h4>
     <p>La Calma fue fundada en el año 2017 por Gabriel Layera y familia. Posteriormenete, en el año 2021 Mauridio Fredes e Ignacio Ovalle se hacen cargo del proyecto agregando valor por su larga experiencia.
     La clave de La Calma es el fresco marino, donde destacamos una cocina marina telúrica, dado que siempre se encuentra en constante movimiento, moverse al ritmo de las mareas, dejar de lado la rigidez de la carta fija.
     La pesca en La Calma está basada en nuestra mejor elección en el terminal pesquero, donde se encuentra un fuerte lazo con los buzos arponeros, orilleros, algueros y pescadores artesanales. Quienes trabajan en nuestra costa Chilena con el producto fresco, el cual termina direactamente en la mesa, en donde puedes desgustar la frescura marina que nos entrega nuestra costa marina pacífica de 6.400km. </p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ut eligendi voluptas excepturi, accusantium eaque nostrum, incidunt aliquam provident officia obcaecati fuga enim suscipit impedit reiciendis voluptatibus ad illo vitae.</p>
     </article>
    <img src="/images/Ignacio.jpg" className="w-full md:w-1/2 rounded-full"/>
    </section>
  </>
  
  )

}
