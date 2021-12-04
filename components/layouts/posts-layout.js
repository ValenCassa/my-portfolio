import { SimpleGrid } from "@chakra-ui/layout";
import { Box, LinkBox, LinkOverlay, Heading, Badge  } from '@chakra-ui/react'
import NextLink from 'next/link'
import  ImageBlog  from '../blog-image';
import Section from "../animated-section";

const PostsArticles = ({art}) => {

    return (
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
            {art.map((article) => {
                return(
                    <Section key={`article_${article.slug}`}>
                    <Box w="100%" >
                    <NextLink as={`/articles/${article.slug}`} href={`/articles/${article.slug}`}>
                      <LinkBox cursor="pointer">
                        <ImageBlog
                          image={article.image}
                          post='grid-item-thumbnail grid-post-thumb'
                        />
                    <Box mt={2} >
                      <Badge id='category' colorScheme='purple'>
                        {article.category.name}
                      </Badge>
                      <Badge ml={2} id='date' colorScheme=''>
                        {article.date}
                      </Badge>
                      </Box>
                        <LinkOverlay href={`/article/[id]`}>
                          <Heading mt={2} fontSize={18} fontWeight='500' fontFamily='M PLUS 1p'>
                            {article.title}
                          </Heading>
                        </LinkOverlay>
                
                      </LinkBox>
                    </NextLink>
                  </Box>
                  </Section>
                )


            })}
        </SimpleGrid>
    );
};

export default PostsArticles;

