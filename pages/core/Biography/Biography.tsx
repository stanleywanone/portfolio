import { FC } from "react"
import {
  Flex,
  Box,
  Text,
  Spacer,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react"

export const Biography: FC = () => {
  return (
    <Flex w="full" pt="8%">
      <Flex w="35%" bg="blue.200" flexDirection="column">
        <Flex justifyContent="center">
          <Box w="300px" h="300px" bg="green.300"></Box>
        </Flex>
        <Flex
          w="full"
          bg="yellow.200"
          pt={3}
          flexDir="column"
          alignItems="center"
        >
          <Text fontSize="5xl">Stanley Wan</Text>
          <Text fontSize="3xl">UI Engineer</Text>
          <Text fontSize="2xl">Hypergiant</Text>
        </Flex>
        <Flex justifyContent="space-around" mx="10%">
          <Box w="50px" h="50px" bg="green.300"></Box>
          <Box w="50px" h="50px" bg="green.300"></Box>
          <Box w="50px" h="50px" bg="green.300"></Box>
          <Box w="50px" h="50px" bg="green.300"></Box>
          <Box w="50px" h="50px" bg="green.300"></Box>
        </Flex>
      </Flex>
      <Flex w="65%" bg="red.200" flexDirection="column">
        <Text fontSize="5xl" mb="2%">
          Biography
        </Text>
        <Text fontSize="xl">
          Hi, I’m Man Parvesh, currently working as a Software Engineer (Member
          of Technical Staff) at VMware in the SRE Automation Platform team. I
          have a Master’s degree in CS from UT Dallas and a Bachelor of
          Technology degree from the Indian Institute of Technology (IIT)
          Guwahati.
          <Spacer mb="2%" />
          Previously, I worked at Works Applications, Singapore as a Software
          Engineer, where I worked on delivering libraries, microservices and
          distributed multi-tenant architecture to thousands of developers
          inside the company who utilized them to build various products for our
          customers. Aside from work, I am also an open-source enthusiast and
          have created projects that were listed in GitHub trending.{" "}
          <Spacer mb="2%" />
          <Spacer />
          My interests lie in solving problems related to large-scale
          distributed software systems.
        </Text>
        <Flex w="full" bg="red.500">
          <Flex flexDirection="column" w="50%">
            <Text>Interest</Text>
            <UnorderedList ml="10%">
              <ListItem>Front-End Engineer</ListItem>
              <ListItem>UI Engineer</ListItem>
              <ListItem>Software Engineer</ListItem>
              <ListItem>Full Stack Engineer</ListItem>
            </UnorderedList>
          </Flex>
          <Flex flexDirection="column" w="50%">
            <Text>Education</Text>
            <UnorderedList ml="10%">
              <ListItem>MS in Computer Science, 2020</ListItem>
              <Text fontSize="xs">California State University, Fresno</Text>
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
