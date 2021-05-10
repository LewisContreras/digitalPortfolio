
import { Button } from '@chakra-ui/button'
import { Box, HStack, Stack, Text, Flex, Link} from '@chakra-ui/layout'
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import React from 'react'


function Header() {
    return (
        <Box as="header" display="flex" w="100vw" h="88px" bg="teal.900" zIndex="100" position="fixed" top="0" left="0" alignItems="center" >
            <Stack  as="section"  w="90%" mx="auto" direction="row" justify="space-between" alignItems="baseline" color="whiteAlpha.800">
                <Flex as="article" spacing={5} >
                    <Text as="p" fontWeight="extrabold" mr={4} >LOGO</Text>
                    <HStack listStyleType="none" spacing={7}>
                        <li><Link href="#welcome">Hola</Link></li>
                        <li><Link href="#projects">Proyectos</Link></li>
                        <li><Link href="#services">Servicios</Link></li>
                        <li><Link href="#contact">Contacto</Link></li>
                    </HStack>
                </Flex>
                <Box as="article">
                    <Button bg="teal.300" >Descargar curriculum</Button>
                    <ColorModeSwitcher />
                </Box>
            </Stack>

        </Box>
    )
}

export default Header
