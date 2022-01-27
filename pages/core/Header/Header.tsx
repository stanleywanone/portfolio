import { FC, useMemo } from "react"
import { useRouter } from "next/router"
import { Flex, Box, Text, Link } from "@chakra-ui/react"

export const Header: FC = () => {
  const router = useRouter()

  const routerName = useMemo(() => {
    return router.pathname.substring(6)
  }, [router.pathname])

  return (
    <Flex
      w="full"
      backgroundColor="blackAlpha.200"
      flexDirection="row"
      justifyContent="space-between"
      px="10%"
      shadow="lg"
    >
      <Flex w="60%" fontSize={36}>
        <Text fontWeight="bold">Stanley Wan</Text>
      </Flex>

      <Flex alignItems="center" w="40%" justifyContent="space-around">
        <Link
          cursor="pointer"
          onClick={() => router.push("/core/Biography")}
          fontWeight={routerName === "Biography" ? "bold" : "normal"}
        >
          Biography
        </Link>
        <Link
          cursor="pointer"
          onClick={() => router.push("/core/Experience")}
          fontWeight={routerName === "Experience" ? "bold" : "normal"}
        >
          Experience
        </Link>
        <Link
          cursor="pointer"
          onClick={() => router.push("/core/Projects")}
          fontWeight={routerName === "Projects" ? "bold" : "normal"}
        >
          Projects
        </Link>
        <Link
          cursor="pointer"
          onClick={() => router.push("/core/Resume")}
          fontWeight={routerName === "Resume" ? "bold" : "normal"}
        >
          Resume
        </Link>
        <Link
          cursor="pointer"
          onClick={() => router.push("/core/Contact")}
          fontWeight={routerName === "Contact" ? "bold" : "normal"}
        >
          Contact
        </Link>
      </Flex>
    </Flex>
  )
}
export default Header
