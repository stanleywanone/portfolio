import { FC } from "react"
import { Flex, Text, Spacer, UnorderedList, ListItem } from "@chakra-ui/react"
import { CircleIcon } from "../../../common/Icons/CircleIcon"
import { ExperienceCard } from "common/ExperienceCard/ExperienceCard"

const experienceData = [
  {
    title: "UI Engineer",
    company: "Hypergiant",
    time: "2021 - present",
    location: "Austin, TX",
    about:
      "Develops artificial intelligence products, and invests in other AI technologies and AI companies",
    features: "SaaS platform in AI model traingng and building",
  },
  {
    title: "Full Stack Software Engineer",
    company: "Asiayo",
    time: "2020 - 2021",
    location: "Taipei, Taiwan",
    about:
      "A secured transaction of travelling and reservation booking website likes air b&b programming in JavaScript, PHP and MySQL.",
    features:
      "Designing front-end features across multiple platforms using modern industry-adopted languages and frameworks",
  },
  {
    title: "Full Stack Engineer",
    company: "Lyles Center for Innovation and Entrepreneurship",
    time: "2019 - 2020",
    location: "Fresno, CA",
    about: "Innovation team.",
    features:
      "Design and define the architectures of Alexa innovation projects with IoT based devices",
  },
]

export const Experience: FC = () => {
  return (
    <Flex w="full">
      <Flex w="30%" justifyContent="center">
        <Text fontSize="5xl" fontFamily="monospace">
          Experience
        </Text>
      </Flex>
      <Flex w="70%" my="2%">
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
          {experienceData.map((data) => {
            return (
              <ExperienceCard
                title={data.title}
                company={data.company}
                time={data.time}
                location={data.location}
                about={data.about}
                features={data.features}
              />
            )
          })}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Experience
