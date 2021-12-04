import { Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/animated-section'
import { WorkGridItem } from '../components/grid-item'

import thumbPortfolio from '../public/img/first-portfolio.png'
import thumbCoder from '../public/img/project-coder.png'
import thumbJs from '../public/img/jscourse.png'
import thumbNext from '../public/img/next-portfolio.png'
import { BluredContainer, TextSectionTitle } from '../components/container-styles'




const Works = () => (
  <Layout title="Works">
      <BluredContainer>
    <Container maxW='container.sm' >
      <TextSectionTitle >
        Works
      </TextSectionTitle>

      <SimpleGrid columns={[1, 1, 3]} gap={6}>
        <Section>
          <WorkGridItem id="portfolio" title="First Project" thumbnail={thumbPortfolio}>
            This was the first project I made. It&apos;s plain HTML and CSS.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="coder"
            title="Final Project"
            thumbnail={thumbCoder}
          >
            This is the final project I made for the Web development course.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="js"
            title="Js Course"
            thumbnail={thumbJs}
          >
            Part of the Js course I&apos;m taking.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="portfolio-next"
            title="Next.js Portfolio"
            thumbnail={thumbNext}
          >
            I wanted to learn React and Next, so I build this! 
          </WorkGridItem>
        </Section>
      </SimpleGrid>

    </Container>
    </BluredContainer>
  </Layout>
)

export default Works