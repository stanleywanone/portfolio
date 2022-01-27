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
import { CircleIcon } from "../../../common/Icons/CircleIcon"
import { ProjectCard } from "common/ProjectCard/ProjectCard"

const projectsData = [
  {
    link: "https://github.com/stanleywanone/FitnessU",
    projectName: "FitnessU App",
    description:
      "Personal workout assistant app based on the React native, Expo and firebase",
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
]

export const Projects: FC = () => {
  return (
    <Flex w="full">
      <Flex w="30%" justifyContent="center">
        <Text fontSize="5xl" fontFamily="monospace">
          Projects
        </Text>
      </Flex>
      <Flex w="70%" flexDirection="column" my="5%">
        {projectsData.map((data) => {
          return (
            <ProjectCard
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
