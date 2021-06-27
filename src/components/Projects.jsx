import { Button } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import { Box,  Grid, GridItem, Link, Text } from '@chakra-ui/layout'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function Projects() {
    return (
        <Box  as="section" id="projects" w="100vw" bg="teal.400" py={10}>
            <Grid gridTemplateColumns={["1fr", "1fr 1fr"]}  templateRows={["1fr 1fr 3fr 3fr 3fr", "100px 400px 300px"]} maxW="90%" mx="auto" gap={7} >
                <GridItem fontWeight="600" fontSize={["3xl", "2xl", "3xl"]} color="teal.900" >Parece magia, funciona con código</GridItem>
                <GridItem fontWeight="400" fontSize="18px" >A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles.</GridItem>
                <GridItem colSpan={[1,2]} bgImg="url('https://i.imgur.com/6yXz4Kk.png')" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" display="flex" alignItems="center" >
                    <Box padding="10px 50px 0 10px" bgColor="teal.800" height="70%" maxW="90%" flexBasis="500px" position="relative" right={3} >
                    <Text fontSize="2xl" fontWeight="bold" color="whiteAlpha.800" >Principe Fresco</Text>
                    <Text fontSize="xl" color="whiteAlpha.800">E-commerce con la temática de la serie del principe fresco.</Text>
                    <Link href="https://github.com/LewisContreras/principe_fresco" isExternal>
                    <Button position="absolute" bottom="10px" left="10px" bgColor="teal.400" >Ir al repositorio</Button>
                    </Link>
                    </Box>

                </GridItem>
                <GridItem bgImg="url('https://i.imgur.com/oR1sYs3.png')" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" display="flex" alignItems="center" >
                <Box padding="10px 50px 0 10px" bgColor="teal.800" height="70%" maxW="90%" flexBasis="500px" position="relative" right={3} >
                    <Text fontSize="2xl" fontWeight="bold" color="whiteAlpha.800" >App de adopción</Text>
                    <Text fontSize="xl" color="whiteAlpha.800">Una app en la que puedes publicar y adoptar mascotas</Text>
                    <Link href="https://github.com/LewisContreras/adoptionApp" isExternal>
                    <Button position="absolute" bottom="10px" left="10px" bgColor="teal.400" >Ir al repositorio</Button>
                    </Link>
                    </Box>

                </GridItem>
                <GridItem bgImg="url('https://i.imgur.com/GnnPpLP.png')" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" display="flex" alignItems="center" >
                <Box padding="10px 50px 0 10px" bgColor="teal.800" height="70%" maxW="90%" flexBasis="500px" position="relative" right={3} >
                    <Text fontSize="2xl" fontWeight="bold" color="whiteAlpha.800" >Guappjolotas</Text>
                    <Text fontSize="xl" color="whiteAlpha.800">Una app en la que puedes pedir guajolotas, tamales y bebidas.</Text>
                    <Link href="https://github.com/LewisContreras/SprintII"  isExternal>
                    <Button position="absolute" bottom="10px" left="10px" bgColor="teal.400" >Ir al repositorio</Button>
                    </Link>
                    </Box>

                </GridItem>
            </Grid>
            <Box textAlign="center" pt={8}>
                <Link href="https://github.com/LewisContreras" textDecoration="none" _hover={{textDecoration:"none"}} isExternal >
                    <Button display="flex" alignItems="center" mx="auto" colorScheme="teal" bg="teal.700" color="whiteAlpha.700" textDecoration="none" > Ver más proyectos<Icon ml={2}  as={FaArrowRight} /></Button>
                </Link>
            </Box>
        </Box>
    )
}

export default Projects
