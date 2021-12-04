import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import logo from '/public/img/logo.png'

const LogoBox = styled.span `
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
    img {
    transition: 200ms ease;
    }
    &:hover img {
    transform: rotate(45deg);
`

const Logo = () => {
    const logoImage = `/img/logo${useColorModeValue('', '-dark')}.png`

    return (

        <Link href='/'>
            <a>
                <LogoBox>
                    <Image src={logoImage} width='21px' height='21px' alt='logo' />
                    <Text
                    color={useColorModeValue('#202020', 'white')}
                    fontFamily = '"M PLUS Rounded 1c", sans-serif'
                    fontWeight='600'
                    ml={2.5}
                    >
                        Valentin Cassarino
                    </Text>
                </LogoBox>
            </a>
        </Link>
     )
}

export default Logo