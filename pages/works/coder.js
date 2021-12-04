import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work-components'
import { TextSection, BluredContainer } from '../../components/container-styles'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Final Project">

    <BluredContainer>
    <Container maxW='container.sm'>
      <Title href='/works' link='Works'>
        Final Project <Badge>2020</Badge>
      </Title>
      <TextSection>
        This was the final project I made for the Web Development course.
      </TextSection>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://valencassa.github.io/orbitproject-cassarino/" target='_blank'>
          https://valencassa.github.io/orbitproject-cassarino/ <ExternalLinkIcon mx="2px" />
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

      <WorkImage src="/img/project-coder.png" alt="Final Project" />
    </Container>
    </BluredContainer>
  </Layout>
)

export default Work