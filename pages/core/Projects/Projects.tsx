import { FC } from "react"
import {
  Flex,
  Box,
  Text,
  Spacer,
  UnorderedList,
  ListItem,
  Badge,
  Center,
} from "@chakra-ui/react"
import { CircleIcon } from "../common/Icons/CircleIcon"

export const Projects: FC = () => {
  return (
    <Flex w="full" pt="8%" pb="8%">
      <Flex w="35%" bg="blue.200" justifyContent="center">
        <Text fontSize="5xl">Projects</Text>
      </Flex>
      <Flex w="65%" bg="red.200" flexDirection="column">
        <Flex bgColor="red.500" w="full" mb="5%">
          <Flex w="80%" flexDirection="column">
            <Text>Fitness</Text>
            <Text>
              Personal assistant based on the command line with several inbuilt
              features
            </Text>
            <Text>Stanley Wan</Text>
            <Text>Code</Text>
          </Flex>
          <Flex w="20%">
            <Box h="full" w="full" bgColor="green.300"></Box>
          </Flex>
        </Flex>
        <Flex bgColor="red.500" w="full" mb="5%">
          <Flex w="80%" flexDirection="column">
            <Text>Fitness</Text>
            <Text>
              Personal assistant based on the command line with several inbuilt
              features
            </Text>
            <Text>Stanley Wan</Text>
            <Text>Code</Text>
          </Flex>
          <Flex w="20%">
            <Box h="full" w="full" bgColor="green.300"></Box>
          </Flex>
        </Flex>
        <Flex bgColor="red.500" w="full" mb="5%">
          <Flex w="80%" flexDirection="column">
            <Text>Fitness</Text>
            <Text>
              Personal assistant based on the command line with several inbuilt
              features
            </Text>
            <Text>Stanley Wan</Text>
            <Text>Code</Text>
          </Flex>
          <Flex w="20%">
            <Box h="full" w="full" bgColor="green.300"></Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
