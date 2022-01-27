import { FC } from "react"
import { HTMLChakraProps } from "@chakra-ui/react"

export type IconProps = HTMLChakraProps<"svg"> & {
  flipY?: boolean
  flipX?: boolean
}
export type Icon = FC<IconProps>
