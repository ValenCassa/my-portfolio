import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Heading, useColorModeValue, Badge  } from '@chakra-ui/react'
import { Global } from '@emotion/react'





export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (

  <Box w="100%" textAlign="center">
    <NextLink href={`/works/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Heading mt={2} fontSize={19} fontWeight='500' fontFamily='M PLUS 1p'>
            {title}
          </Heading>
        </LinkOverlay>
        <Text fontSize={14} color={useColorModeValue('black', '#BDBDBD')} >{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)



export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
      .grid-post-thumb {
        width: 100%;
        height: 130px;
        object-fit: cover;
      }
      .post {
        width: 100%;
        height: 300px;
        object-fit: cover;
      }
    `}
  />
)