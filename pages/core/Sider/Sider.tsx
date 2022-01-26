import { FC } from "react"
import { FaFacebook, FaInstagramSquare, FaGithub } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { SiLinkedin } from "react-icons/si"
import { Flex, Box, Text, Icon, Image } from "@chakra-ui/react"

export const Sider: FC = () => {
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
      <Flex w="full" pt={3} flexDir="column" alignItems="center">
        <Text fontSize="5xl">Stanley Wan</Text>
        <Text fontSize="3xl">UI Engineer</Text>
        <Text fontSize="2xl">Hypergiant</Text>
      </Flex>
      <Flex justifyContent="space-around" mx="10%" my={5}>
        <MdEmail size="3em" />
        <FaFacebook size="3em" />
        <FaInstagramSquare size="3em" />
        <FaGithub size="3em" />
      </Flex>
    </Flex>
  )
}
