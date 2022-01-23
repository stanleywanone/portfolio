import { FC } from "react"
import {
  Flex,
  Box,
  Text,
  Spacer,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react"

export const Experience: FC = () => {
  return (
    <Flex w="full" pt="8%">
      <Flex w="35%" bg="blue.200" justifyContent="center">
        <Text fontSize="5xl">Experience</Text>
      </Flex>
      <Flex w="65%" bg="red.200" flexDirection="column"></Flex>
    </Flex>
  )
}
