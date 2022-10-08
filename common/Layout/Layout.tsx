import { FC, useMemo } from "react"
import { useRouter } from "next/router"
import { Flex } from "@chakra-ui/react"
import { Header } from "../Header"
import { Sider } from "../Sider"

/**Color map :1B262C, 0F4C75, 3282B8 BBE1FA */
export const Layout: FC = ({ children }) => {
  const router = useRouter()

  const routerName = useMemo(() => {
    return router.pathname.substring(6)
  }, [router.pathname])
  return (
    <Flex flexDir="column" h="full" w="full" minH="2xl">
      {routerName !== "Resume" && <Header />}

      <Flex
        h={"full"}
        pt={routerName !== "Resume" ? 14 : 0}
        flexDir={{ base: "column", lg: "row" }}
      >
        {routerName !== "Resume" && (
          <Flex w={{ base: "full", md: "full", lg: "30%" }} h="full">
            <Sider />
          </Flex>
        )}
        <Flex
          w={{
            base: "full",
            md: "full",
            lg: routerName === "Resume" ? "full" : "70%",
          }}
          h="full"
          px={routerName !== "Resume" ? "5%" : "0"}
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Layout
