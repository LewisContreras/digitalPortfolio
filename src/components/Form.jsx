import { Button } from '@chakra-ui/button'
import { FormControl } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import {  Center, Text } from '@chakra-ui/layout'
import { Textarea } from '@chakra-ui/textarea'
import React from 'react'

function Form() {
    return (
        <Center as="section" id="contact" bgColor="teal.400" h="100vh" w="100vw">
            <FormControl bgColor="teal.900" padding={4} rounded={10} maxWidth="500px">
                <Text  fontSize="3xl" fontWeight="semibold" color="whiteAlpha.800">Contacto</Text>
                <Text my={4} fontSize="md" color="whiteAlpha.600" >
                Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto.
                </Text>

                <Input mb={3} type="text" placeholder="Nombre Completo" color="whiteAlpha.900" isRequired></Input>
                <Input mb={3} type="email" placeholder="Correo Electrónico" color="whiteAlpha.900" isRequired ></Input>
                <Textarea mb={3} placeholder="Mensaje" color="whiteAlpha.900"></Textarea>
                <Button width="100%" type="submit" >Enviar Mensaje</Button>
            </FormControl>
        </Center>
    )
}

export default Form
