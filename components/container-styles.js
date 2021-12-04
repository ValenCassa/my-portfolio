import { Container, Text, useColorModeValue, Box, chakra, Image, Heading } from '@chakra-ui/react'

export const BluredContainer = ({children}) => {
    const changeColors = useColorModeValue('rgba(174, 174, 174, 0.2)', 'rgba(0, 0, 0, 0.25)')

    return (
        <Container maxW='container.sm' px={{base: '1em', md: '2.5em'}}>
            <Container maxW='container.sm' p='2em' mt={4} background={changeColors} borderRadius='5px'>{children}</Container>
        </Container>

    )
}

export const BluredContainerPost = ({children}) => {
    const changeColors = useColorModeValue('rgba(174, 174, 174, 0.2)', 'rgba(0, 0, 0, 0.25)')

    return (
        <Container maxW='container.md' px={{base: '1em', md: '2.5em'}}>
            <Container maxW='container.sm' p='2em' mt={4} background={changeColors} borderRadius='5px'>{children}</Container>
        </Container>

    )
}

export const TextSectionTitle = ({children}) => {
    const colorText = useColorModeValue('#272727', '#E7E7E7')
    return (
        <Box mb={4} borderBottom='2px' display='inline-block' borderColor='#1AB0BA'>
            <Heading as='h2' fontWeight='600' color={colorText} fontSize='22px'>{children}</Heading>
        </Box>

    )

}

export const TextSection = ({children , ...props}) => {
    const toggleText = useColorModeValue('#202020', '#E7E7E7')

    return (
        <Text {...props} textAlign='justify' fontFamily='M PLUS Rounded 1c' lineHeight='170%' color={toggleText} fontSize='18px' fontWeight='300'>{children}</Text>
    )
}

export const BioYear = ({children}) => {
    const toggleText = useColorModeValue('#202020', '#E7E7E7')
    return (
        <Box px={3}>
            <Heading  color={toggleText} fontSize='18px' fontWeight='500'>{children}</Heading>
        </Box>
    )
}

export const BioData = ({children}) => {
    const toggleText = useColorModeValue('#202020', '#E7E7E7')
    return (
        <chakra.span  ml={6} color={toggleText} fontSize='18px' fontWeight='300'>{children}</chakra.span>
    )
}

export const Profile = () => {
    const toggleText = useColorModeValue('#202020', '#E7E7E7')
    return (
        <Box display='flex' flexDirection={{base:'column', md:'row'}} alignItems={{base:'center', md: undefined}}>
            <Box flex='78%'>
                <Heading  color={toggleText} fontSize='28px' fontWeight='500'>Valentin Cassarino</Heading>
                <Text textAlign={{base:'center', md:'left'}} color={toggleText} fontSize='18px' fontWeight='300'>Front-end developer</Text>
            </Box>

            <Box flex='22%'>
                    <Image mt={{base:'1em', md: undefined}} border='1px' borderColor={toggleText} borderRadius='250px' w='100px' h='100px' src='/img/profile.jpg' />
            </Box>

        </Box>
    )

}

