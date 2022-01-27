import { FC } from "react"
import {
  Flex,
  Box,
  Text,
  Spacer,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react"

export const Skills: FC = () => {
  return (
    <Flex w="full" bg="gray.300" flexDirection="column" p="10%">
      <Flex w="full" justifyContent="center" bgColor="gray.400">
        <Text fontSize="5xl">Skills</Text>
      </Flex>
      <Flex w="full" justifyContent="space-evenly" bgColor="gray.400" mb="5%">
        <Flex
          w="20%"
          flexDirection="column"
          alignItems="center"
          bgColor="gray.200"
        >
          <Box h="100px" w="100px" bg="gray.700" />
          <Text>Javascript</Text>
          <Text>Typescript, Jest</Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center" bgColor="gray.200">
          <Box h="100px" w="100px" bg="gray.700" />
          <Text>UI Framework</Text>
          <Text>React, ReactJS, Angular</Text>
        </Flex>
        <Flex w="20%" flexDirection="column" alignItems="center">
          <Box h="100px" w="100px" bg="gray.700" />
          <Text>Cloud Engineering</Text>
          <Text>AWS S3, Lambda, MongoDB, Firebase, etc</Text>
        </Flex>
      </Flex>
      <Flex w="full" justifyContent="space-evenly" bgColor="gray.400" mb="5%">
        <Flex
          w="20%"
          flexDirection="column"
          alignItems="center"
          bgColor="gray.200"
        >
          <Box h="100px" w="100px" bg="gray.700" />
          <Text>Database</Text>
          <Text>SQL, MySQL, NoSQL</Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center" bgColor="gray.200">
          <Box h="100px" w="100px" bg="gray.700" />
          <Text>Responsive Web Design</Text>
          <Text>CSS, SASS, HTML5</Text>
        </Flex>
        <Flex w="20%" flexDirection="column" alignItems="center">
          <Box h="100px" w="100px" bg="gray.700" />
          <Text>Scrum</Text>
          <Text>Git, Jira, Atlassian</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Skills
