import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Services from './components/Services';
import Banner from './components/Banner';
import Footer from './components/Footer';
import FormMessage from './components/FormMessage';


function App() {
  return (
    <ChakraProvider>
          <Header></Header>
          <Welcome></Welcome>
          <Projects></Projects>
          <Services></Services>
          {/* <Banner></Banner> */}
          <FormMessage></FormMessage>
          <Footer></Footer>
    </ChakraProvider>
  );
}

export default App;
