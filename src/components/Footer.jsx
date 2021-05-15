import Icon from '@chakra-ui/icon'
import { Box, Flex, HStack, Link, Text } from '@chakra-ui/layout'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
    return (
        <Box  as="footer" bgColor="teal.900" w="100vw" h={["180px","180px" , "80px","80px"]} >
            <Flex height="100%" flexDirection={["column","column","row", "row"]} maxW="90%" mx="auto" alignItems="center" justify={["space-evenly", "space-evenly","space-between" ,"space-between"]} >
                <Text color="whiteAlpha.700" as="p" fontWeight="extrabold" mr={4} >LOGO</Text>
                <Text textAlign="center" color="whiteAlpha.700" as="p"  mr={4} >Hecho con cariño de Lewis, Copyright 2021 - Todos los derechos reservados</Text>
                <HStack spacing={2} >
                    <Link href="https://github.com/LewisContreras" isExternal><Icon boxSize={5} color="whiteAlpha.700" as={FaGithub} ></Icon></Link>
                    <Link href="https://www.linkedin.com/in/lewis-contreras-9b2410151/" isExternal ><Icon boxSize={5} color="whiteAlpha.700" as={FaLinkedin} ></Icon></Link>
                    
                </HStack>
            </Flex>
        </Box>
    )
}

export default Footer
