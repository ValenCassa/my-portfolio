import { Container, Badge} from '@chakra-ui/react'
import { Title } from '../../components/work-components'
import { TextSection, BluredContainerPost } from '../../components/container-styles'
import Layout from '../../components/layouts/article'
import Seo from '../../components/blog-seo'
import { getStrapiMedia } from "../../lib/media";
import { fetchAPI } from "../../lib/api";
import Image from '../../components/blog-image'
import ReactShowdown from 'react-showdown'



const Article = ({article}) => {
  const imageUrl = getStrapiMedia(article.image);
  const seo = {
    metaTitle: article.title,
    metaDescription : article.description,
    shareImage : article.image,
    article: true,
  }

  return(

  <Layout>
    <Seo seo={seo} />

    <BluredContainerPost p={4}>
    <Container maxW='container.sm'>
      <Title href='/posts' link='Posts'>
      {article.title}
      </Title>
      
      <Image image={article.image} post='post grid-item-thumbnail' />
      <Badge fontSize='0.8em' colorScheme='purple' mt={2}>{article.category.name}</Badge><Badge fontSize='0.8em' colorScheme='' ml={1} mt={2}>{article.date}</Badge>
        <TextSection mt={6}>
        <ReactShowdown markdown={article.content} />
        </TextSection>

    </Container>
    </BluredContainerPost>
  </Layout>
    )
  }

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(
    `/articles?slug=${params.slug}`
  );
  const categories = await fetchAPI("/categories");
  return {
    
    props: { article: articles[0], categories },
    revalidate: 1,
  };
}

export default Article