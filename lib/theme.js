import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#E7E7E7', '#1A202C')(props)
    }
  })
}

const fonts = {
    
    heading: '"M PLUS Rounded 1c"',
    body: "'M PLUS 1p'"

}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
  }

const theme = extendTheme({fonts, config, styles})
export default theme