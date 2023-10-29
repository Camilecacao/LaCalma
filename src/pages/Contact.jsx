import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { db } from '../config/firebase';
import { useState } from 'react';



const Contact = () => {
    return (
        <section className="bg-[url('https://images.squarespace-cdn.com/content/v1/6260b3366c0480435312cb9c/25bc1aae-5185-4c87-8111-216fc5d40874/DSC09227.jpg?format=1500w')]">
            <form className="flex w-full flex-col bg-zinc-900/50 md:px-48 py-10 gap-4 mt-5 mb-5 p-5">
                <h1 className='text-center'>Formulario de contacto</h1>
                <div className='text-white'>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                color={"gray"}
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
                            color={"gray"}
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

                    id="textarea"
                >
                    <div className="mb-2 block">
                        <Label color={"gray"}

                            htmlFor="comment"
                            value="Comentarios"
                        />
                    </div>
                    <TextInput className='w-full'
                        id="comment"
                        placeholder="Escribe tu comentario..."
                        required
                        rows={4}
                    />
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label color={"gray"} htmlFor="remember">
                        Recordarme
                    </Label>
                </div>

                <Button type="submit">
                    Enviar
                </Button>
            </form>
        </section>

    )
}

export default Contact
