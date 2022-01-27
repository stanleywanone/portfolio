import { FC } from "react"
import { Flex, Text, Spacer, UnorderedList, ListItem } from "@chakra-ui/react"

export interface ExperienceCardProps {
  title: string
  company: string
  time: string
  location: string
  about: string
  features: string
}

export const ExperienceCard: FC<ExperienceCardProps> = ({
  title,
  company,
  time,
  location,
  about,
  features,
}) => {
  return (
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
        {title}
      </Text>
      <Text fontFamily="monospace">{company}</Text>
      <Text fontSize="sm" color="blackAlpha.700">
        {time}, {location}
      </Text>
      <UnorderedList ml="10%">
        <ListItem fontSize="xs" fontWeight="bold">
          About
        </ListItem>
        <Text fontSize="xs">{about}</Text>
        <ListItem fontSize="xs" fontWeight="bold">
          Features
        </ListItem>
        <Text fontSize="xs">{features}</Text>
      </UnorderedList>
    </Flex>
  )
}
