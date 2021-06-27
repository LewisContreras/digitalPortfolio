import { Button } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import { Box, Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function Services() {
    return (
        <Box w="100vw" as="section" id="services" bgColor="gray.300" >
            <Box maxW={["98%", "98%","90%", "90%"]} mx="auto" py={["20px", "80px", "125px"]}>
                <Text fontWeight="semibold" fontSize="3xl" >Servicios</Text>
                <Flex py={10} flexDirection={["column", "row", "row"]} justifyContent="space-between"   alignItems="center">
                    <Box mb={5} >
                        <Text fontSize="xl" >Diseño</Text>
                        <Text my={2} fontSize="md" >Interfaz de usuario</Text>
                        <Text my={2}  fontSize="md" >Aplicaciones web</Text>
                        <Text my={2} fontSize="md" >Prueba de concepto</Text>
                        <Button mt={4} display="flex" alignItems="center" >Ver servicios <Icon ml={2}   as={FaArrowRight} /> </Button>
                    </Box>
                    <Box mb={5} >
                        <Text fontSize="xl" >Desarrollo</Text>
                        <Text my={2} fontSize="md" >Aplicaciones móviles</Text>
                        <Text my={2} fontSize="md" >Sitios web</Text>
                        <Button mt={4} display="flex" alignItems="center" >Ver servicios <Icon ml={2}   as={FaArrowRight} /> </Button>
                    </Box>
                    <Box mb={5} >
                        <Text fontSize="xl" >Marca</Text>
                        <Text my={2} fontSize="md" >Identidad de marca</Text>
                        <Text my={2} fontSize="md" >Estrategia de marca</Text>
                        <Button mt={4} display="flex" alignItems="center" >Ver servicios <Icon ml={2}   as={FaArrowRight} /> </Button>
                    </Box>
                    
                </Flex>
            </Box>


        </Box>
    )
}

export default Services
