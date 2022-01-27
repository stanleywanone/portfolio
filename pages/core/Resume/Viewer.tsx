import { Flex } from "@chakra-ui/react"
import React, { useRef, useEffect, FC } from "react"
import WebViewer from "@pdftron/webviewer"

export const Viewer: FC = () => {
  const viewer = useRef(null)

  useEffect(() => {
    WebViewer(
      {
        path: "/lib",
        initialDoc: "../../../Resume.pdf",
      },
      viewer.current as any
    )
  }, [])

  return <Flex w="full" h="full" ref={viewer}></Flex>
}

export default Viewer
