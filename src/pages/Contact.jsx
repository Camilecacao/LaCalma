

import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';

const Contact = () => {
    return (
        <form className="flex max-w-md flex-col gap-4">
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
    )
}

export default Contact
