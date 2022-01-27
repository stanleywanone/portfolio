import { FC } from "react"

import { Flex, Spinner } from "@chakra-ui/react"
import dynamic from "next/dynamic"

export const Resume: FC = () => {
  const Viewer = dynamic(() => import("./Viewer"), { ssr: false })
  // console.log("window, ", window)
  return (
    <Flex w="full" h="full">
      {/* {typeof window !== "undefined" ? <Spinner /> : <Viewer />} */}
      <Viewer />
    </Flex>
  )
}

export default Resume
