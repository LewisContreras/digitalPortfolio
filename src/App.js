import React from 'react';
import {
  ChakraProvider,
  CSSReset,
  theme
} from '@chakra-ui/react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Services from './components/Services';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';


function App() {
  return (
    <ChakraProvider theme={theme}>
          <CSSReset/>
          <Header></Header>
          <Welcome></Welcome>
          <Projects></Projects>
          <Services></Services>
          <Banner></Banner>
          <Form></Form>
          <Footer></Footer>
    </ChakraProvider>
  );
}

export default App;
