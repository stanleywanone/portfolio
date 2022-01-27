import { FC } from "react"

import { Flex } from "@chakra-ui/react"
import dynamic from "next/dynamic"
const Viewer = dynamic(() => import("./Viewer"), { ssr: false })

export const Resume: FC = () => {
  return (
    <Flex w="full" h="full">
      <Viewer />
    </Flex>
  )
}

export default Resume
