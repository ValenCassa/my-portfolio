import { BluredContainer, TextSectionTitle } from "../components/container-styles";
import { Container } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { SimpleGrid } from "@chakra-ui/layout"
import Section from '../components/animated-section'
import PostsArticles  from "../components/layouts/posts-layout"
import { fetchAPI } from "../lib/api";


const Posts = ({ articles }) => {

    return (
    <Layout title='Posts'>
 
    <BluredContainer>
        <Container maxW='container.sm'>
        <TextSectionTitle>
            Posts
        </TextSectionTitle>
      <PostsArticles art={articles}/>
        </Container>
    </BluredContainer>

    </Layout>

    )

}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}

export default Posts;