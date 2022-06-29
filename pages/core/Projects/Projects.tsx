import { FC } from "react"
import { Flex, Text } from "@chakra-ui/react"
import { ProjectCard } from "common/ProjectCard/ProjectCard"

const projectsData = [
  {
    link: "https://github.com/stanleywanone/shopping-cart",
    projectName: "Shopping cart",
    description:
      "Shopping cart is a virtual online shopping platform, customers can buy items online and checkout at the end of their shopping",
  },
  {
    link: "https://github.com/stanleywanone/smart-website",
    projectName: "Smart Website",
    description:
      "Smart web control intelligent home in lives based on ReactJS, PHP and IFTTT",
  },
  {
    link: "https://github.com/stanleywanone/studenthub",
    projectName: "Studenthub",
    description:
      "A self-community for studnets exchange knowledge based on ReactJS, AWS",
  },
  {
    link: "https://github.com/stanleywanone/movie-review",
    projectName: "Movie Review",
    description:
      "Find out the most pupular movies lists based on ReactJS, MongoDB and Next.js",
  },
  {
    link: "https://github.com/stanleywanone/chat-web",
    projectName: "Chat Web",
    description:
      "Users can communicate with each other with the real time data, based on Socket.io and ReactJS",
  },
]

export const Projects: FC = () => {
  return (
    <Flex w="full">
      <Flex w="30%" justifyContent="center">
        <Text
          fontFamily="monospace"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          mb="2%"
        >
          Projects
        </Text>
      </Flex>
      <Flex
        w="70%"
        flexDirection="column"
        my={{ base: "12%", md: "8%", lg: "8%" }}
        ml={{ base: "12%", md: "8%", lg: "8%" }}
      >
        {projectsData.map((data) => {
          return (
            <ProjectCard
              key={data.link}
              link={data.link}
              projectName={data.projectName}
              description={data.description}
            />
          )
        })}
      </Flex>
    </Flex>
  )
}

export default Projects
