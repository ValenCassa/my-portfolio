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
        Next.js Portfolio <Badge>2021</Badge>
      </Title>
      <TextSection>
        I made this to learn React and Next.js. Hope you like it!
      </TextSection>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://portfolio-react-git-main-valencassa.vercel.app/" target='_blank'>
          https://portfolio-react-git-main-valencassa.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>All platforms</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JS, React, Next</span>
        </ListItem>
      </List>

      <WorkImage src="/img/next-portfolio.png" alt="Portfolio-Next" />
    </Container>
    </BluredContainer>
  </Layout>
)

export default Work