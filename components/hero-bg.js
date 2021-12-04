import Ellipse from '../public/img/Ellipse19.svg'
import Ellipse2 from '../public/img/Ellipse 12.svg'
import Ellipse4 from '../public/img/Ellipse 14.svg'
import Ellipse5 from '../public/img/Ellipse 15.svg'
import Ellipse6 from '../public/img/Ellipse 16.svg'
import Ellipse7 from '../public/img/Ellipse 17.svg'
import Ellipse8 from '../public/img/Ellipse 18.svg'
import Ellipse9 from '../public/img/Ellipse 19.svg'
import { Box, Container, Image } from '@chakra-ui/react'
import Script from 'next/script'




export const Circle = () => {
    
      return (

        <div>
            <Container pos='relative' maxW='container.md'>
                            
                <Box mt='14em' data-speed='2' ml='-2em' pos='absolute' zIndex={-1} className='layer'>
                <Ellipse />
                </Box>
                <Box ml={9} mt='6em' pos='absolute' zIndex={-1}>
                <Ellipse2 />
                </Box>
                <Box right={0} mr='15em' mt='9.5em' pos='absolute' zIndex={-1}>
                <Ellipse4 />
                </Box>
                <Box right={0} mr='2em' mt='5em' pos='absolute' zIndex={-1} display={{base: 'none', md:'block'}}>
                <Ellipse5 />
                </Box>
                <Box  ml='3em' mt='-1em' pos='absolute' zIndex={-1}>
                <Ellipse6 />
                </Box>
                <Box  ml='11em' mt='13em' pos='absolute' zIndex={-1} display={{base: 'none', md:'block'}}>
                <Ellipse7 />
                </Box>
                <Box  ml='11em' mt='13em' pos='absolute' zIndex={4} display={{base: 'none', md:'block'}}>
                <Ellipse7 />
                </Box>
                <Box  ml='15em' mt='3em' pos='absolute' zIndex={-1}>
                <Ellipse8 />
                </Box>
                <Box  ml='15em' mt='3em' pos='absolute' zIndex={4}>
                <Ellipse8 />
                </Box>
                <Box  right={0} mt='15em' mr='4em' pos='absolute' zIndex={-1}>
                <Ellipse9 />
                </Box>
                <Box  right={0} mt='15em' mr='4em' pos='absolute' zIndex={4}>
                <Ellipse9 />
                </Box>

            </Container>
            
        </div>


      )
};
