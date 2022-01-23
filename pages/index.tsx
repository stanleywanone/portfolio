import type { NextPage } from "next"
import { Flex } from "@chakra-ui/react"
import { Header } from "./core/Header/Header"
import { Biography } from "./core/Biography/Biography"
import { Skills } from "./core/Skills/Skills"
import { Experience } from "./core/Experience/Experience"

const Home: NextPage = () => {
  return (
    <Flex w="full" h="full" flexDir="column">
      <Header />
      <Flex px="10%" flexDirection="column">
        <Biography />
      </Flex>
      <Flex>
        <Skills />
      </Flex>
      <Flex px="10%" flexDirection="column">
        <Experience />
      </Flex>
    </Flex>
  )
}

export default Home
