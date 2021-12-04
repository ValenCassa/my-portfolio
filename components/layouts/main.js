import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Hero from '../hero-section'
import Layout from './article'



const Main = ({ children, router }) => {
    return (
      <Box as="main" pb={8}>
      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <Layout>
        <Hero />
        </Layout>
        {children}
      </Container>
      <Layout>
      </Layout>
    </Box>
    )
  }

export default Main
