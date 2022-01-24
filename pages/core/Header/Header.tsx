import { FC } from "react"
import router from "next/router"
import { Flex, Box, Text, Link } from "@chakra-ui/react"

export const Header: FC = () => {
  return (
    <Flex
      w="full"
      backgroundColor="blackAlpha.900"
      color="white"
      flexDirection="row"
      justifyContent="space-between"
      px="10%"
    >
      <Flex w="60%" fontSize={36}>
        <Text>Stanley Wan</Text>
      </Flex>

      <Flex alignItems="center" w="40%" justifyContent="space-around">
        <Text cursor="pointer" onClick={() => router.push("/core/Biography")}>
          Home
        </Text>
        <Text cursor="pointer" onClick={() => router.push("/core/Experience")}>
          Experience
        </Text>
        <Text cursor="pointer" onClick={() => router.push("/core/Projects")}>
          Projects
        </Text>
        <Text>
          Resume
          <Link href="/Users/wan/Documents/GitHub/portfolio/pages/Resume.pdf">
            example
          </Link>
        </Text>
        <Text>Contact</Text>
      </Flex>
    </Flex>
  )
}
