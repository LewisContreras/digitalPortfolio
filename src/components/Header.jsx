
import { Button, IconButton } from '@chakra-ui/button'
import { Box, HStack, Stack, Text, Flex, Link } from '@chakra-ui/layout'
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import React from 'react'

import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { FaBars } from 'react-icons/fa';


function Header() {
    return (
        <Box as="header" display="flex" w="100vw" h="88px" bg="teal.900" zIndex="100" position="fixed" top="0" left="0" alignItems="center" >
            <Stack as="section" w="90%" mx="auto" direction="row" justify="space-between" alignItems="baseline" color="whiteAlpha.800">
                <Flex as="article" alignItems="center" spacing={5} >
                    <Box display={["block", "block", "none"]} >
                    <Menu isLazy>
                        <MenuButton  boxShadow="none" bg="teal.900" mr={3}  as={IconButton} icon={<FaBars/>}></MenuButton>
                        <MenuList  bg="teal.900" borderColor="teal.900" position="relative" bottom="2px" >
                            {/* MenuItems are not rendered unless Menu is open */}
                            <MenuItem borderBottom="2px solid teal" ><Link href="#welcome">Hola</Link></MenuItem>
                            <MenuItem borderBottom="2px solid teal" ><Link href="#projects">Proyectos</Link></MenuItem>
                            <MenuItem borderBottom="2px solid teal" ><Link href="#services">Servicios</Link></MenuItem>
                            <MenuItem borderBottom="2px solid teal" >Contacto</MenuItem>
                        </MenuList>
                    </Menu>
                    </Box>
                <Text as="p" fontWeight="extrabold" mr={4} >LOGO</Text>
                <HStack display={["none", "none", "contents"]} listStyleType="none" spacing={7}>
                    <li><Link href="#welcome">Hola</Link></li>
                    <li><Link href="#projects">Proyectos</Link></li>
                    <li><Link href="#services">Servicios</Link></li>
                    <li><Link href="#contact">Contacto</Link></li>
                </HStack>
                </Flex>
            <Box as="article">
                <Button colorScheme="teal" >Descargar curriculum</Button>
                <ColorModeSwitcher display="none" />
            </Box>
            </Stack>

        </Box >
    )
}

export default Header
