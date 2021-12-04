import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work-components'
import { TextSection, BluredContainer } from '../../components/container-styles'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Js Course">

    <BluredContainer>
    <Container maxW='container.sm'>
      <Title href='/works' link='Works'>
        Js Course <Badge>2021</Badge>
      </Title>
      <TextSection>
        This is part of the Javascript course I&apos;m taking.
      </TextSection>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://valencassa.github.io/coderhouse-js/" target='_blank'>
          https://valencassa.github.io/coderhouse-js/ <ExternalLinkIcon mx="2px" />
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

      <WorkImage src="/img/jscourse.png" alt="Js Course" />
    </Container>
    </BluredContainer>
  </Layout>
)

export default Work