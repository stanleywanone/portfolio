import { FC } from "react"
import { Flex, Text, Spacer, UnorderedList, ListItem } from "@chakra-ui/react"
import { CircleIcon } from "../../../common/Icons/CircleIcon"

export const Experience: FC = () => {
  return (
    <Flex w="full">
      <Flex w="30%" justifyContent="center">
        <Text fontSize="5xl" fontFamily="monospace">
          Experience
        </Text>
      </Flex>
      <Flex w="70%">
        <Flex w="20%" alignItems="center" flexDirection="column" pt="10%">
          <CircleIcon border="1px solid #975A16" mb={3} />
          <Flex h="40%" w="0.5%" bgColor="yellow.700" />
          <CircleIcon bgColor="white" border="0.5px solid #975A16" my={3} />
          <Flex h="40%" w="0.5%" bgColor="yellow.700" my={3} />
          <CircleIcon
            color="white"
            bgColor="white"
            border="1px solid #975A16"
          />
        </Flex>
        <Flex w="80%" flexDirection="column">
          <Flex
            w="90%"
            mb="8%"
            flexDirection="column"
            p="3%"
            border="1px solid #CBD5E0"
            shadow="lg"
            rounded="md"
            _hover={{ shadow: "xl" }}
          >
            <Text
              color="blackAlpha.700"
              fontWeight="bold"
              fontFamily="monospace"
              fontSize="md"
            >
              UI Engineer
            </Text>
            <Text fontFamily="monospace">Hypergiant</Text>
            <Text fontSize="sm" color="blackAlpha.700">
              2021 - present, Austin, TX
            </Text>
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
            border="1px solid #CBD5E0"
            shadow="lg"
            rounded="md"
            _hover={{ shadow: "xl" }}
          >
            <Text
              color="blackAlpha.700"
              fontWeight="bold"
              fontFamily="monospace"
              fontSize="md"
            >
              Full Stack Software Engineer
            </Text>
            <Text fontFamily="monospace">Asiayo</Text>
            <Text fontSize="sm" color="blackAlpha.700">
              2020 - 2021, Taipei, Taiwan
            </Text>
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
          <Flex
            w="90%"
            flexDirection="column"
            p="3%"
            border="1px solid #CBD5E0"
            shadow="lg"
            rounded="md"
            _hover={{ shadow: "xl" }}
          >
            <Text
              color="blackAlpha.700"
              fontWeight="bold"
              fontFamily="monospace"
              fontSize="md"
            >
              Full Stack Engineer
            </Text>
            <Text fontFamily="monospace">
              Lyles Center for Innovation and Entrepreneurship
            </Text>
            <Text fontSize="sm" color="blackAlpha.700">
              2019 - 2020, Fresno, CA
            </Text>
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
