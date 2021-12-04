import { Badge } from "@chakra-ui/layout"

export const Category = ({children ,category, ...props }) => {

    return (
        <Badge ml={2} colorScheme={ category } {...props}>
        {children}
      </Badge>
    )
}
  
