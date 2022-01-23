import type { NextPage } from "next"
import { Flex } from "@chakra-ui/react"
import { Header } from "./core/Header/Header"

const Home: NextPage = () => {
  return (
    <Flex w="full" h="full">
      <Header />
    </Flex>
  )
}

export default Home
