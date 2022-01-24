import { FC } from "react"
import { Flex, Box, Text } from "@chakra-ui/react"

export const Sider: FC = () => {
  return (
    <Flex w="full" h="full" flexDirection="column">
      <Flex justifyContent="center">
        <Box w="300px" h="300px" borderRadius="100%" bg="green.300"></Box>
      </Flex>
      <Flex w="full" pt={3} flexDir="column" alignItems="center">
        <Text fontSize="5xl">Stanley Wan</Text>
        <Text fontSize="3xl">UI Engineer</Text>
        <Text fontSize="2xl">Hypergiant</Text>
      </Flex>
      <Flex justifyContent="space-around" mx="10%" my={5}>
        <Box w="50px" h="50px" bg="green.300" />
        <Box w="50px" h="50px" bg="green.300" />
        <Box w="50px" h="50px" bg="green.300" />
        <Box w="50px" h="50px" bg="green.300" />
        <Box w="50px" h="50px" bg="green.300" />
      </Flex>
    </Flex>
  )
}
