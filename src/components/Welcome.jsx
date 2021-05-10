import Icon from '@chakra-ui/icon'
import { Image } from '@chakra-ui/image'
import { Box, Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import { FaArrowDown } from 'react-icons/fa'

function Welcome() {
    return (
        <Flex as="section" id="welcome"  w="100vw" h="100vh" bg="teal.900" alignItems="center" justify="space-around" >
             <Box as="article" maxW="40%" >
                <Text color="whiteAlpha.800" fontSize="4xl" >
                    ¡Hola, bienvenidos sean!
                </Text>
                <Text color="whiteAlpha.800" fontSize="4xl" >
                    Soy Lewis Contreras
                </Text>
                <Text color="whiteAlpha.400" fontSize="xl" >
                    Soy un desarrollador al que le gusta estar en constante aprendizaje y en seguimiento de las nuevas tecnologías.
                </Text>
                <Icon mt={12} as={FaArrowDown} boxSize={8}  color="whiteAlpha.800" />

             </Box>
             <Box as="article" boxSize="sm" >
                <Image src="https://www.labicok.com/wp-content/uploads/2020/06/default-user-image.png" alt="Lewis Contreras" ></Image>
             </Box>
        </Flex>
    )
}

export default Welcome
