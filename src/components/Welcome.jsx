import Icon from '@chakra-ui/icon'
import { Image } from '@chakra-ui/image'
import { Box, Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import { FaArrowDown } from 'react-icons/fa'

function Welcome() {
    return (
        <Flex pt={["100px", "100px", "100px"]} as="section" flexDirection={["column-reverse", "column-reverse", "row"]} id="welcome"  w="100vw" h={["130vh","130vh", "100vh"]} bg="teal.900" alignItems="center" justify="space-around" >
             <Box as="article" maxW={["80%", "80%","40%"]} >
                <Text color="whiteAlpha.800" textAlign={["center", "center", "left"]} fontSize="4xl" >
                    ¡Hola, bienvenidos sean!
                </Text>
                <Text color="whiteAlpha.800" textAlign={["center", "center", "left"]}  fontSize={["3xl","3xl", "4xl"]} >
                    Soy Lewis Contreras
                </Text>
                <Text color="whiteAlpha.400" textAlign={["center", "center", "left"]}  fontSize="xl" >
                    Soy un desarrollador al que le gusta estar en constante aprendizaje y en seguimiento de las nuevas tecnologías.
                </Text>
                <Icon mt={12} as={FaArrowDown} boxSize={8}  color="whiteAlpha.800" />

             </Box>
             <Box as="article" boxSize={["250px", "250px", "300px", "sm"]} >
                <Image src="https://www.labicok.com/wp-content/uploads/2020/06/default-user-image.png" alt="Lewis Contreras" ></Image>
             </Box>
        </Flex>
    )
}

export default Welcome
