import { useEffect, useRef, FC, useState } from "react"
import WebViewer from "@pdftron/webviewer"

import { Flex } from "@chakra-ui/react"

export const Resume: FC = () => {
  const viewer = useRef(null)

  useEffect(() => {
    WebViewer(
      {
        path: "/lib",
        initialDoc: "../../../Resume.pdf",
      },
      viewer.current as any
    ).then((instance) => {})
  }, [viewer])
  return <Flex w="full" h="full" ref={viewer}></Flex>
}

export default Resume
