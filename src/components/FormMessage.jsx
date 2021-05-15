import { Button } from '@chakra-ui/button'
import { FormControl } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import {  Center, Link, Text } from '@chakra-ui/layout'
import { Textarea } from '@chakra-ui/textarea'
import React from 'react'

function FormMessage() {

    function handleSubmit(e) {
        e.preventDefault();
        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let message = document.getElementById("message");
        let sendEmail = document.getElementById("send-email");

        sendEmail.setAttribute("href", `mailto:legiconba4@gmail.com?subject=${name.value} ${email.value}&body=${message.value}`)
        sendEmail.click();
        
        
    }

    return (
        <Center as="section" id="contact" bgColor="teal.400" h="100vh" w="100vw">
            <form style={{padding: "5px"}}  onSubmit={(e) => handleSubmit(e)}>
            <FormControl bgColor="teal.900"  padding={4} rounded={10} maxWidth="500px"  >
                <Text  fontSize="3xl" fontWeight="semibold" color="whiteAlpha.800">Contacto</Text>
                <Text my={4} fontSize="md" color="whiteAlpha.600" >
                Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto.
                </Text>

                <Input mb={3} id="name" name="name" type="text" placeholder="Nombre Completo" color="whiteAlpha.900" isRequired></Input>
                <Input mb={3} id="email" name="email" type="email" placeholder="Correo Electrónico" color="whiteAlpha.900" isRequired ></Input>
                <Textarea mb={3} id="message" name="message" placeholder="Mensaje" color="whiteAlpha.900"></Textarea>
                <Button width="100%"  type="submit" >Enviar Mensaje</Button>
                <Link id="send-email" href="" ></Link>
            </FormControl>
            </form>
            
        </Center>
    )
}

export default FormMessage
