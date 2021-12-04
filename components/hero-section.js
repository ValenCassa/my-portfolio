import styled from "@emotion/styled"
import { Box, Text, Divider, useColorModeValue, Image, chakra, Heading} from '@chakra-ui/react'
import {Circle} from '../components/hero-bg'
import { FaBorderNone } from "react-icons/fa"

const BluredBox = ({children, ...props}) => {
    const boxColor = useColorModeValue('rgba(174, 174, 174, 0.2)', 'rgba(0, 0, 0, 0.25)')
    return (
        <Box 
        as='main'
        borderRadius={4}
        zIndex={3}
        background={boxColor} 
        paddingX={10} 
        paddingY={16} 
        marginTop={7} 
        css={{ backdropFilter: 'blur(6px)' }} 
        display={{base: 'block', md: 'flex'}}
        {...props}
        >
        {children} 
        </Box>
    )
}

const TextHero = ({children}) => {
    const textColor = useColorModeValue('#202020', '#E7E7E7');
    return (
        <Heading fontWeight="400" fontSize='40px' lineHeight='44px' color= {textColor} >{children}</Heading>
    )

}

const heroSection = () => {
    return (
      <Box mb={6}>
        <Circle />
        <BluredBox >
          <Box textAlign={{base: 'center', md: 'left'}}>
            <TextHero >Hello<chakra.span color='#DB6262'>.</chakra.span></TextHero>
            <Divider w='100%' pos='absolute' ml='-2.5em' background='#2D323C'/>
            <TextHero >I&apos;m Valen<chakra.span color='#DB6262'>.</chakra.span></TextHero>
            <Divider w='100%' pos='absolute' ml='-2.5em' background='#2D323C' mt='-0.1em'/>
            <Text fontSize='17.5px' fontWeight='300' mt={2}>I&apos;m a front-end developer based in Argentina!</Text>
          </Box>

          <Box display={{base: 'none', md: 'block'}}>
            <Image src='/img/rose.png' pos='absolute' right={0} marginTop='-6.4em' />
          </Box>

        </BluredBox>
      </Box>
    )

    
}

export default heroSection