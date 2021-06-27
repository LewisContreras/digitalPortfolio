import { Image } from '@chakra-ui/image'
import { Box, Flex, Text } from '@chakra-ui/layout'
import React from 'react'

function Welcome() {
    return (
        <Flex pt={["100px", "100px", "100px"]} as="section" flexDirection={["column-reverse", "column-reverse", "row"]} id="welcome"  w="100vw" h={["100vh","130vh", "100vh"]} bg="teal.900" alignItems="center" justify={["center","space-around" ]}>
             <Box as="article" maxW={["80%", "80%","40%"]} >
                <Text color="whiteAlpha.800"  textAlign={["center", "center", "left"]} fontSize="3xl" >
                    ¡Hola, bienvenido, soy Lewis Contreras!
                </Text>
                <Text py="6px" color="teal.400" fontWeight="600" textAlign={["center", "center", "left"]}  fontSize={["3xl","3xl", "4xl"]} >
                    Front-End Developer
                </Text>
                <Text color="whiteAlpha.600" textAlign={["center", "center", "left"]}  fontSize="xl" >
                    Un desarrollador al que le gusta estar en constante aprendizaje y en seguimiento de las nuevas tecnologías.
                </Text>

             </Box>
             <Box as="article" mb={["20px"]} boxSize={["250px", "250px", "300px", "300px"]} >
                <Image src="https://www.labicok.com/wp-content/uploads/2020/06/default-user-image.png" alt="Lewis Contreras" ></Image>
             </Box>
        </Flex>
    )
}

export default Welcome
