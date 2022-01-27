import { FC, useEffect } from "react"

import { Flex, Spinner } from "@chakra-ui/react"
import dynamic from "next/dynamic"

export const Resume: FC = () => {
  const Viewer = dynamic(() => import("../../../components/Viewer"), {
    ssr: false,
  })

  return (
    <Flex w="full" h="full">
      <Viewer />
    </Flex>
  )
}

export default Resume
