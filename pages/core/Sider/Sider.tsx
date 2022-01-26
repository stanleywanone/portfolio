import { FC } from "react"
import { useRouter } from "next/router"
import { FaFacebook, FaInstagramSquare, FaGithub } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { SiLinkedin } from "react-icons/si"
import { Flex, Box, Text, Icon, Image } from "@chakra-ui/react"

export const Sider: FC = () => {
  const router = useRouter()
  return (
    <Flex w="full" h="full" flexDirection="column">
      <Flex justifyContent="center">
        <Image
          borderRadius="100%"
          src={"../../../photo.jpg"}
          alt="photo"
          w="70%"
        />
      </Flex>
      <Flex
        w="full"
        pt={3}
        flexDir="column"
        alignItems="center"
        fontFamily="monospace"
      >
        <Text fontSize="4xl">Stanley Wan</Text>
        <Text fontSize="2xl" color="blackAlpha.500">
          UI Engineer
        </Text>
        <Text fontSize="xl" color="yellow.700">
          Hypergiant
        </Text>
      </Flex>
      <Flex justifyContent="center" mx="10%" my={5}>
        <MdEmail
          size="3em"
          color="#975A16"
          cursor="pointer"
          onClick={() => router.push("mailto:stanleywanone@gmail.com")}
        />
        <FaFacebook
          size="3em"
          color="#975A16"
          cursor="pointer"
          onClick={() => router.push("https://www.facebook.com/stanley.wan.9/")}
        />
        <FaInstagramSquare
          size="3em"
          color="#975A16"
          cursor="pointer"
          onClick={() =>
            router.push("https://www.instagram.com/stanley_wanwanwan/")
          }
        />
        <FaGithub
          size="3em"
          color="#975A16"
          cursor="pointer"
          onClick={() => router.push("https://github.com/stanleywanone")}
        />
      </Flex>
    </Flex>
  )
}
