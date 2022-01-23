import { FC } from "react"
import {
  Flex,
  Box,
  Text,
  Spacer,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react"
import { CircleIcon } from "../common/Icons/CircleIcon"

export const Experience: FC = () => {
  return (
    <Flex w="full" pt="8%" pb="8%">
      <Flex w="35%" bg="blue.200" justifyContent="center">
        <Text fontSize="5xl">Experience</Text>
      </Flex>
      <Flex w="65%" bg="red.200">
        <Flex
          w="20%"
          bg="red.700"
          alignItems="center"
          flexDirection="column"
          pt="10%"
        >
          <CircleIcon />
          <Box h="40%" w="2%" bgColor="black"></Box>
          <CircleIcon />
          <Box h="sm" w="2%" bgColor="black"></Box>
          <CircleIcon />
        </Flex>
        <Flex w="80%" bgColor="red.500" flexDirection="column">
          <Box mx="10%" h="20%" bgColor="red.300" mb="10%">
            <Flex flexDirection="column">
              <Text>UI Engineer</Text>
              <Text>Hypergiant</Text>
              <Text>2021 - present, Austin, Tx</Text>
              <UnorderedList ml="10%">
                <ListItem>About</ListItem>
                <ListItem>Features</ListItem>
              </UnorderedList>
            </Flex>
          </Box>
          <Box mx="10%" h="20%" bgColor="red.300" mb="10%">
            <Flex flexDirection="column">
              <Text>UI Engineer</Text>
              <Text>Hypergiant</Text>
              <Text>2021 - present, Austin, Tx</Text>
              <UnorderedList ml="10%">
                <ListItem>About</ListItem>
                <ListItem>Features</ListItem>
              </UnorderedList>
            </Flex>
          </Box>
          <Box mx="10%" h="20%" bgColor="red.300">
            <Flex flexDirection="column">
              <Text>UI Engineer</Text>
              <Text>Hypergiant</Text>
              <Text>2021 - present, Austin, Tx</Text>
              <UnorderedList ml="10%">
                <ListItem>About</ListItem>
                <ListItem>Features</ListItem>
              </UnorderedList>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}
