import { FC } from "react"
import { useRouter } from "next/router"
import { Flex, Text } from "@chakra-ui/react"
import { FaGithub } from "react-icons/fa"

export interface ProjectCardProps {
  link: string
  projectName: string
  description: string
}

export const ProjectCard: FC<ProjectCardProps> = ({
  link,
  projectName,
  description,
}) => {
  const router = useRouter()
  return (
    <Flex w="full" mb="5%">
      <Flex
        w="80%"
        p="2%"
        flexDirection="column"
        borderColor="blackAlpha.400"
        borderWidth="1px"
        shadow="lg"
        rounded="md"
        onClick={() => router.push(link)}
      >
        <Text fontFamily="monospace" fontWeight="bold" fontSize="md">
          {projectName}
        </Text>
        <Text fontSize="xs" mb={5}>
          {description}
        </Text>
        <Text color="blackAlpha.700" mb={2} fontSize="sm">
          Stanley Wan
        </Text>
        <Flex
          border="1px solid #975A16"
          alignItems="center"
          justifyContent="space-around"
          w={{ base: "24%", md: "18%", lg: "12%" }}
          cursor="pointer"
        >
          <FaGithub size="0.7em" color="#975A16" />
          <Text
            fontSize={{ base: "xx-small", md: "xx-small", lg: "xs" }}
            fontWeight="bold"
            color="yellow.700"
          >
            Code
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
