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
    <Flex w="full" h="full" flexDirection="column">
      <Text fontSize="5xl" mb="2%">
        Biography
      </Text>
      <Text fontSize="xl">
        Hi, I’m Stanley Wan, currently working as a UI Engineer (Member of
        Technical Staff) at Hypergiant in the SaaS Platform team. I have a
        Master’s degree in CS from CSU, Fresno State and a Master’s in MSE from
        the Feng Chia University in Taiwan.
        <Spacer mb="2%" />
        Previously, I worked at Asiayo, Taiwan as a Full Stack Software
        Engineer, where I worked on designing front-end features across multiple
        platforms using modern industry-adopted languages and framework and
        Optimizing API calls using modular application design and light weight
        dependencies. Aside from work, I am also an open-source enthusiast and
        have created projects that were listed in GitHub trending.{" "}
        <Spacer mb="2%" />
        <Spacer />
        My interests lie in delivering the concept of ideas on the front-end
        features related to mutilple areas of software engineerings.
      </Text>
      <Flex w="full" mt={16}>
        <Flex flexDirection="column" w="50%">
          <Text fontSize="2xl" fontWeight="bold">
            Interest
          </Text>
          <UnorderedList ml="10%">
            <ListItem>Front-End Engineer</ListItem>
            <ListItem>UI Engineer</ListItem>
            <ListItem>Software Engineer</ListItem>
            <ListItem>Full Stack Engineer</ListItem>
          </UnorderedList>
        </Flex>
        <Flex flexDirection="column" w="50%">
          <Text fontSize="2xl" fontWeight="bold">
            Education
          </Text>
          <UnorderedList ml="10%">
            <ListItem>MS in Computer Science, 2020</ListItem>
            <Text fontSize="xs">California State University, Fresno</Text>
            <ListItem>MS in Material Science and Engineering, 2013</ListItem>
            <Text fontSize="xs">Feng Chia University, Taiwan</Text>
          </UnorderedList>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Biography
