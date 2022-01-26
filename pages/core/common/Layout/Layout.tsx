import { FC } from "react"
import { Box, Flex } from "@chakra-ui/react"
import { Header } from "@/core/Header/Header"
import { Sider } from "@/core/Sider/Sider"

/**Color map :1B262C, 0F4C75, 3282B8 BBE1FA */
export const Layout: FC = ({ children }) => {
  return (
    <Flex flexDir="column">
      <Header />
      <Flex h={"full"} pt={5} overflow="scroll">
        <Flex w="30%" h="full">
          <Sider />
        </Flex>
        <Flex w="70%" h="full">
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}
