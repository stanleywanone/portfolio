import { FC } from "react"
import { Flex, Text, Spacer, UnorderedList, ListItem } from "@chakra-ui/react"
import { CircleIcon } from "../common/Icons/CircleIcon"

export const Experience: FC = () => {
  return (
    <Flex w="full">
      <Flex w="30%" justifyContent="center">
        <Text fontSize="5xl">Experience</Text>
      </Flex>
      <Flex w="70%">
        <Flex w="20%" alignItems="center" flexDirection="column" pt="10%">
          <CircleIcon border="1px solid black" mb={3} />
          <Flex h="40%" w="1%" bgColor="blackAlpha.500" />
          <CircleIcon bgColor="white" border="1px solid black" my={3} />
          <Flex h="40%" w="1%" bgColor="blackAlpha.500" my={3} />
          <CircleIcon color="white" bgColor="white" border="1px solid black" />
        </Flex>
        <Flex w="80%" flexDirection="column">
          <Flex
            w="90%"
            mb="8%"
            flexDirection="column"
            p="3%"
            border="1px solid black"
          >
            <Text>UI Engineer</Text>
            <Text>Hypergiant</Text>
            <Text>2021 - present, Austin, TX</Text>
            <UnorderedList ml="10%">
              <ListItem fontSize="xs" fontWeight="bold">
                About
              </ListItem>
              <Text fontSize="xs">
                Develops artificial intelligence products, and invests in other
                AI technologies and AI companies
              </Text>
              <ListItem fontSize="xs" fontWeight="bold">
                Features
              </ListItem>
              <Text fontSize="xs">
                SaaS platform in AI model traingng and building
              </Text>
            </UnorderedList>
          </Flex>
          <Flex
            w="90%"
            mb="8%"
            flexDirection="column"
            p="3%"
            border="1px solid black"
          >
            <Text>Full Stack Software Engineer</Text>
            <Text>Asiayo</Text>
            <Text>2020 - 2021, Taipei, Taiwan</Text>
            <UnorderedList ml="10%">
              <ListItem fontSize="xs" fontWeight="bold">
                About
              </ListItem>
              <Text fontSize="xs">
                A secured transaction of travelling and reservation booking
                website likes air b&b programming in JavaScript, PHP and MySQL.
              </Text>
              <ListItem fontSize="xs" fontWeight="bold">
                Features
              </ListItem>
              <Text fontSize="xs">
                Designing front-end features across multiple platforms using
                modern industry-adopted languages and frameworks
              </Text>
            </UnorderedList>
          </Flex>
          <Flex w="90%" flexDirection="column" p="3%" border="1px solid black">
            <Text>Full Stack Engineer</Text>
            <Text>Lyles Center for Innovation and Entrepreneurship</Text>
            <Text>2019 - 2020, Fresno, CA</Text>
            <UnorderedList ml="10%">
              <ListItem fontSize="xs" fontWeight="bold">
                About
              </ListItem>
              <Text fontSize="xs">Innovation team</Text>
              <ListItem fontSize="xs" fontWeight="bold">
                Features
              </ListItem>
              <Text fontSize="xs">
                Design and define the architectures of Alexa innovation projects
                with IoT based devices
              </Text>
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Experience
