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
    <Flex w="full">
      <Flex w="30%" justifyContent="center">
        <Text fontSize="5xl">Projects</Text>
      </Flex>
      <Flex w="70%" flexDirection="column" my="5%">
        <Flex w="full" mb="5%">
          <Flex w="80%" flexDirection="column">
            <Text>Fitness App</Text>
            <Text fontSize="xs" mb={5}>
              Personal workout assistant app based on the React native, Expo and
              firebase several inbuilt features
            </Text>
            <Text>Stanley Wan</Text>
            <Flex>
              <Badge>Code</Badge>
            </Flex>
          </Flex>
          <Flex w="20%">
            <Box h="full" w="full" bgColor="green.300"></Box>
          </Flex>
        </Flex>
        <Flex mb="5%">
          <Flex w="80%" flexDirection="column">
            <Text>Smart Website</Text>
            <Text fontSize="xs" mb={5}>
              Smart web control intelligent home in lives based on ReactJS, PHP
              and IFTTT
            </Text>
            <Text>Stanley Wan</Text>
            <Flex>
              <Badge>Code</Badge>
            </Flex>
          </Flex>
          <Flex w="20%">
            <Box h="full" w="full" bgColor="green.300"></Box>
          </Flex>
        </Flex>
        <Flex mb="5%">
          <Flex w="80%" flexDirection="column">
            <Text>Studenthub</Text>
            <Text fontSize="xs" mb={5}>
              A self-community for studnets exchange knowledge based on ReactJS,
              AWS
            </Text>
            <Text>Stanley Wan</Text>
            <Flex>
              <Badge>Code</Badge>
            </Flex>
          </Flex>
          <Flex w="20%">
            <Box h="full" w="full" bgColor="green.300"></Box>
          </Flex>
        </Flex>
        <Flex mb="5%">
          <Flex w="80%" flexDirection="column">
            <Text>Movie reivew</Text>
            <Text fontSize="xs" mb={5}>
              Find out the most pupular movies lists based on ReactJS, MongoDB
              and Next.js
            </Text>
            <Text>Stanley Wan</Text>
            <Flex>
              <Badge>Code</Badge>
            </Flex>
          </Flex>
          <Flex w="20%">
            <Box h="full" w="full" bgColor="green.300"></Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Projects
