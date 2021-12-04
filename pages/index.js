import { Box, Text, Container, Image, useColorModeValue, Divider,chakra, Button, List, ListItem, Icon, Link} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import {BluredContainer, TextSectionTitle, TextSection, BioYear, BioData, Profile} from '../components/container-styles'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/animated-section'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
import Head from 'next/head'



function Home( ) {



  return (

    <Layout title='Homepage'>
          
            <Head>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@valen_cassa" />
            <meta name="twitter:creator" content="@valen_cassa" />
            <meta name="twitter:image" content="/img/og.png" />
            <meta name="twitter:title" content="Valentin Cassarino's Homepage" />
            <meta name="twitter:description" content="Go have a look at my portfolio!" />
            <meta property="og:site_name" content="Valentin Cassarino's Homepage" />
            <meta property="og:title" content="Valentin Cassarino's Homepage" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="/img/og.png" />
            </Head>
          

        <Section>
          <BluredContainer>
            <TextSectionTitle>Bio</TextSectionTitle>
            <Profile />

            <Box mt={6} mb={5}>
              <TextSection>Valen is a freelance and a front-end developer based in Argentina with a passion for designing and coding stuff. He also likes solving real life problems through code. When not online, he loves hanging out with his friends. Currently, he is studying Computer Science at UNNOBA!</TextSection>
            </Box>

            <BioYear>2001<BioData>Born in Junin, Buenos Aires, Argentina</BioData></BioYear>
            <Divider borderRadius='20px' orientation="vertical" height='15px' width='1.5px' background='#56E4ED' ml='2em' my={1}/>
            <BioYear>2019<BioData>Started studying Computer Science</BioData></BioYear>
            <Divider borderRadius='21px' orientation="vertical" height='15px' width='1.5px' background='#56E4ED' ml='2em' my={1}/>
            <BioYear>2021<BioData>Certificate in <chakra.a _hover={{textDecoration: 'underline'}} color='#DB6262' href='https://www.coderhouse.com/certificados/6161e4d95b1b800011c8ebd2?lang=en' target='_blank'>Web development</chakra.a></BioData></BioYear>

            <Box mt={7}>
              <NextLink href='/works'>
                  <Button  fontSize='16px' fontWeight='500' _hover={{background: useColorModeValue('#202020', '#E7E7E7'), color: useColorModeValue('#E7E7E7', '#202020')}} w='100%' background="rgba(0, 0, 0, 0.3)">
                      My portfolio <ChevronRightIcon ml={3} />
                  </Button>
              </NextLink>
            </Box>

          </BluredContainer>
        </Section>


        <Section delay='0.4'>
          <BluredContainer>
            <TextSectionTitle>I <chakra.span color='#DB6262'>&#10084;</chakra.span></TextSectionTitle>
            <TextSection>Music, Blockchain, Machine Learning, Designing, Reading, Gym</TextSection>
          </BluredContainer>
        </Section>

        <Section delay={0.4}>
          <BluredContainer>
            <TextSectionTitle>Find me</TextSectionTitle>
            <Box>
              <List>
                <ListItem>
                  <Link href='https://github.com/ValenCassa' target='_blank'>
                  <Button _hover={{background: useColorModeValue('#202020', '#E7E7E7'), color: useColorModeValue('#E7E7E7', '#202020')}} color={useColorModeValue('#202020', '#E7E7E7')} background='transparent' leftIcon={<Icon as={ FaGithub } />}>/ValenCassa</Button>
                  </Link>
                </ListItem>

                <ListItem>
                  <Link href='https://twitter.com/valen_cassa' target='_blank'>
                  <Button _hover={{background: useColorModeValue('#202020', '#E7E7E7'), color: useColorModeValue('#E7E7E7', '#202020')}} color={useColorModeValue('#202020', '#E7E7E7')} background='transparent' leftIcon={<Icon as={ FaTwitter } />}>@valen_cassa</Button>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href='https://www.linkedin.com/in/valent%C3%ADn-cassarino/' target='_blank'>
                  <Button _hover={{background: useColorModeValue('#202020', '#E7E7E7'), color: useColorModeValue('#E7E7E7', '#202020')}} color={useColorModeValue('#202020', '#E7E7E7')} background='transparent' leftIcon={<Icon as={ FaLinkedin } />}>Valentin Cassarino</Button>
                  </Link>
                </ListItem>
              </List>
            </Box>
          </BluredContainer>
        </Section>
    </Layout>

      
  )
}

export default Home
