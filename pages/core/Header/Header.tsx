import { FC } from "react"
import { Flex, Box, Text } from "@chakra-ui/react"

export const Header = () => {
  return (
    <Flex
      w="full"
      backgroundColor="blackAlpha.900"
      color="white"
      flexDirection="row"
      py="5"
      justifyContent="space-between"
      px="10%"
    >
      <Flex w="60%">
        <Text fontSize={36}>Stanley Wan</Text>
      </Flex>

      <Flex alignItems="center" w="40%" justifyContent="space-around">
        <Text>Home</Text>
        <Text>Experience</Text>
        <Text>Projects</Text>
        <Text>Resume</Text>
        <Text>Contact</Text>
      </Flex>
    </Flex>
  )
}
