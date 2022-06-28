import { FC } from "react"
import { FaGraduationCap } from "react-icons/fa"
import {
  Flex,
  Text,
  Spacer,
  HStack,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
} from "@chakra-ui/react"

export const Biography: FC = () => {
  return (
    <Flex w="full" h="full" flexDirection="column">
      <Flex flexDirection="column">
        <Text
          fontFamily="monospace"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          mb="2%"
        >
          Biography
        </Text>
        <Text fontSize="xl">
          Hi, I’m Stanley Wan, currently working as a UI Engineer at Apple in
          the Retail App team. I have a Master’s degree in CS from CSU, Fresno
          State and a Master’s in MSE from the Feng Chia University in Taiwan.
          <Spacer mb="2%" />
          In Apple, I’m responsible for developing a SaaS platform which help
          the data scientises and maching learning engineers monior and anylsis
          the data more straightforward. On the other hand, I worked on
          designing front-end features across multiple platforms using modern
          industry-adopted languages and framework and Optimizing API calls
          using modular application design and light weight dependencies. Aside
          from work, I am also an open-source enthusiast and have created
          projects that were listed in GitHub trending. <Spacer mb="2%" />
          <Spacer />
          My interests lie in delivering the concept of ideas on the front-end
          features related to mutilple areas of software engineerings.
        </Text>
      </Flex>
      <HStack mt={10} flexDirection="row">
        <Flex flexDirection="column" w="50%">
          <Text fontSize="2xl" fontWeight="bold" fontFamily="monospace">
            Interests
          </Text>

          <UnorderedList ml="10%">
            <ListItem>Front-End Engineer</ListItem>
            <ListItem>UI Engineer</ListItem>
            <ListItem>Software Engineer</ListItem>
            <ListItem>Full Stack Engineer</ListItem>
          </UnorderedList>
        </Flex>
        <Flex flexDirection="column" w="50%">
          <Text fontSize="2xl" fontWeight="bold" fontFamily="monospace">
            Education
          </Text>
          <List ml="10%">
            <ListItem>
              <ListIcon as={FaGraduationCap} />
              MS in Computer Science, 2020
            </ListItem>
            <Text fontSize="xs">California State University, Fresno</Text>
            <ListItem>
              <ListIcon as={FaGraduationCap} />
              MS in Material Science and Engineering, 2013
            </ListItem>
            <Text fontSize="xs">Feng Chia University, Taiwan</Text>
          </List>
        </Flex>
      </HStack>
    </Flex>
  )
}

export default Biography
