import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';

const Contact = () => {
    return (
        <section className="bg-[url('https://images.squarespace-cdn.com/content/v1/6260b3366c0480435312cb9c/f60b5dab-9108-48cd-9f97-29f21729f5bc/La+Calma+by+Fredes+2.jpg?format=1500w')]">
            <form className="flex max-w-md flex-col gap-4 mt-5 mb-5">
            <h1>Formulario de contacto</h1>
            <div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name1"
                            value="Nombre completo"
                        />
                    </div>
                    <TextInput
                        id="name1"
                        required
                        type="name"
                    />
                </div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="email1"
                        value="Correo electrónico"
                    />
                </div>
                <TextInput
                    id="email1"
                    placeholder="email@email.com"
                    required
                    type="email"
                />
            </div>
            <div
      className="max-w-md"
      id="textarea"
    >
      <div className="mb-2 block">
        <Label
          htmlFor="comment"
          value="Comentarios"
        />
      </div>
      <Textarea
        id="comment"
        placeholder="Escribe tu comentario..."
        required
        rows={4}
      />
    </div>

            <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">
                    Remember me
                </Label>
            </div>
            
            <Button type="submit">
                Submit
            </Button>
        </form>
        </section>
        
    )
}

export default Contact
