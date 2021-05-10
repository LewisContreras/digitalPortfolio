import { Button } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import { Box,  Grid, GridItem, Text } from '@chakra-ui/layout'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function Projects() {
    return (
        <Box  as="section" id="projects" maxW="100vw" bg="teal.400" py={10}>
            <Grid gridTemplateColumns="1fr 1fr"  templateRows="100px 400px 300px" maxW="90%" mx="auto" gap={6} >
                <GridItem fontSize="3xl" >Parece magia, funciona con codigo</GridItem>
                <GridItem>A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles.</GridItem>
                <GridItem colSpan={2} bgImg="url('https://www.ealde.es/wp-content/uploads/2019/02/gestion-alcance-direccion-de-proyectos.jpg')" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" display="flex" alignItems="center" >
                    <Box padding="10px 50px 0 10px" bgColor="teal.800" height="70%" maxW="90%" flexBasis="500px" position="relative" right={3} >
                    <Text fontSize="2xl" fontWeight="bold" color="whiteAlpha.800" >Titulo del proyecto</Text>
                    <Text fontSize="xl" color="whiteAlpha.800">Informacion relacionada a lo tratado en el proyecto y lo genial que fue realizarlo</Text>
                    <Button position="absolute" bottom="10px" left="10px" bgColor="teal.400" >Ir al repositorio</Button>
                    </Box>

                </GridItem>
                <GridItem bgImg="url('https://www.ealde.es/wp-content/uploads/2019/02/gestion-alcance-direccion-de-proyectos.jpg')" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" display="flex" alignItems="center" >
                <Box padding="10px 50px 0 10px" bgColor="teal.800" height="70%" maxW="90%" flexBasis="500px" position="relative" right={3} >
                    <Text fontSize="2xl" fontWeight="bold" color="whiteAlpha.800" >Titulo del proyecto</Text>
                    <Text fontSize="xl" color="whiteAlpha.800">Informacion relacionada a lo tratado en el proyecto y lo genial que fue realizarlo</Text>
                    <Button position="absolute" bottom="10px" left="10px" bgColor="teal.400" >Ir al repositorio</Button>
                    </Box>

                </GridItem>
                <GridItem bgImg="url('https://www.ealde.es/wp-content/uploads/2019/02/gestion-alcance-direccion-de-proyectos.jpg')" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" display="flex" alignItems="center" >
                <Box padding="10px 50px 0 10px" bgColor="teal.800" height="70%" maxW="90%" flexBasis="500px" position="relative" right={3} >
                    <Text fontSize="2xl" fontWeight="bold" color="whiteAlpha.800" >Titulo del proyecto</Text>
                    <Text fontSize="xl" color="whiteAlpha.800">Informacion relacionada a lo tratado en el proyecto y lo genial que fue realizarlo</Text>
                    <Button position="absolute" bottom="10px" left="10px" bgColor="teal.400" >Ir al repositorio</Button>
                    </Box>

                </GridItem>
            </Grid>
            <Box textAlign="center" pt={8}>
                <Button display="flex" alignItems="center" mx="auto" bgColor="teal.700" color="whiteAlpha.700" >Ver más proyectos<Icon ml={2}  as={FaArrowRight} /> </Button>
            </Box>
        </Box>
    )
}

export default Projects
