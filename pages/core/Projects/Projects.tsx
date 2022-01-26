import { FC } from "react"
import { useRouter } from "next/router"
import {
  Flex,
  Box,
  Text,
  Spacer,
  UnorderedList,
  ListItem,
  Badge,
  Center,
  Image,
  Link,
} from "@chakra-ui/react"
import { FaGithub } from "react-icons/fa"
import { CircleIcon } from "../common/Icons/CircleIcon"

export const Projects: FC = () => {
  const router = useRouter()
  return (
    <Flex w="full">
      <Flex w="30%" justifyContent="center">
        <Text fontSize="5xl" fontFamily="monospace">
          Projects
        </Text>
      </Flex>
      <Flex w="70%" flexDirection="column" my="5%">
        <Flex w="full" mb="5%">
          <Flex
            w="80%"
            p="2%"
            flexDirection="column"
            borderColor="blackAlpha.400"
            borderWidth="1px"
            shadow="lg"
            rounded="md"
            onClick={() =>
              router.push("https://github.com/stanleywanone/FitnessU")
            }
          >
            <Text fontFamily="monospace" fontWeight="bold" fontSize="md">
              FitnessU App
            </Text>
            <Text fontSize="xs" mb={5}>
              Personal workout assistant app based on the React native, Expo and
              firebase
            </Text>
            <Text color="blackAlpha.700" mb={2} fontSize="sm">
              Stanley Wan
            </Text>
            <Flex
              border="1px solid #975A16"
              alignItems="center"
              justifyContent="space-around"
              w="10%"
              cursor="pointer"
            >
              <FaGithub size="0.7em" color="#975A16" />
              <Text fontSize="xs" fontWeight="bold" color="yellow.700">
                Code
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex mb="5%">
          <Flex
            w="80%"
            p="2%"
            flexDirection="column"
            borderColor="blackAlpha.400"
            borderWidth="1px"
            shadow="lg"
            rounded="md"
            onClick={() =>
              router.push("https://github.com/stanleywanone/smart-website")
            }
          >
            <Text fontFamily="monospace" fontWeight="bold" fontSize="md">
              Smart Website
            </Text>
            <Text fontSize="xs" mb={5}>
              Smart web control intelligent home in lives based on ReactJS, PHP
              and IFTTT
            </Text>
            <Text color="blackAlpha.700" mb={2} fontSize="sm">
              Stanley Wan
            </Text>
            <Flex
              border="1px solid #975A16"
              alignItems="center"
              justifyContent="space-around"
              w="10%"
              cursor="pointer"
            >
              <FaGithub size="0.7em" color="#975A16" />
              <Text fontSize="xs" fontWeight="bold" color="yellow.700">
                Code
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex mb="5%">
          <Flex
            w="80%"
            p="2%"
            flexDirection="column"
            borderColor="blackAlpha.400"
            borderWidth="1px"
            shadow="lg"
            rounded="md"
          >
            <Text fontFamily="monospace" fontWeight="bold" fontSize="md">
              Studenthub
            </Text>
            <Text fontSize="xs" mb={5}>
              A self-community for studnets exchange knowledge based on ReactJS,
              AWS
            </Text>
            <Text color="blackAlpha.700" mb={2} fontSize="sm">
              Stanley Wan
            </Text>
            <Flex
              border="1px solid #975A16"
              alignItems="center"
              justifyContent="space-around"
              w="10%"
              cursor="pointer"
              onClick={() =>
                router.push("https://github.com/stanleywanone/studenthub")
              }
            >
              <FaGithub size="0.7em" color="#975A16" />
              <Text fontSize="xs" fontWeight="bold" color="yellow.700">
                Code
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex mb="5%">
          <Flex
            w="80%"
            p="2%"
            flexDirection="column"
            borderColor="blackAlpha.400"
            borderWidth="1px"
            shadow="lg"
            rounded="md"
          >
            <Text fontFamily="monospace" fontWeight="bold" fontSize="md">
              Movie reivew
            </Text>
            <Text fontSize="xs" mb={5}>
              Find out the most pupular movies lists based on ReactJS, MongoDB
              and Next.js
            </Text>
            <Text color="blackAlpha.700" mb={2} fontSize="sm">
              Stanley Wan
            </Text>
            <Flex
              border="1px solid #975A16"
              alignItems="center"
              justifyContent="space-around"
              w="10%"
              cursor="pointer"
              onClick={() =>
                router.push("https://github.com/stanleywanone/movie-review")
              }
            >
              <FaGithub size="0.7em" color="#975A16" />
              <Text fontSize="xs" fontWeight="bold" color="yellow.700">
                Code
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Projects
