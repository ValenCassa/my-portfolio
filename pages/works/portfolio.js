import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work-components'
import { TextSection, BluredContainer } from '../../components/container-styles'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="First portfolio">

    <BluredContainer>
    <Container maxW='container.sm'>
      <Title href='/works' link='Works'>
        First Portfolio <Badge>2020</Badge>
      </Title>
      <TextSection>
        This was the first project I made when I started learning web development.
      </TextSection>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://valencassa.github.io/portfolio-prototype/" target='_blank'>
          https://valencassa.github.io/portfolio-prototype/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>All platforms</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JS</span>
        </ListItem>
      </List>

      <WorkImage src="/img/first-portfolio.png" alt="Portfolio" />
    </Container>
    </BluredContainer>
  </Layout>
)

export default Work