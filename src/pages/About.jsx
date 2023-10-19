

export const About = () => {
  return (
  <>
    <h1 className="text-5xl mx-auto text-center mt-10 font-bold">QUIÉNES SOMOS</h1>
    <section className="flex flex-col md:flex-row gap-8 justify-around mt-20 px-10">
     <article className="w-full md:h-1/2"> 
     <h4 className="text-3xl text-center mb-5">Un concepto moderno de cocina</h4>
     <p>Somos un Restaurante comprometidos con los sabores y la frescura desde el mar a tu plato. </p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ut eligendi voluptas excepturi, accusantium eaque nostrum, incidunt aliquam provident officia obcaecati fuga enim suscipit impedit reiciendis voluptatibus ad illo vitae.</p>
     </article>
    <img src="/images/Ignacio.jpg" className="w-full md:w-1/2 rounded-full"/>
    </section>
  </>
  
  )

}
