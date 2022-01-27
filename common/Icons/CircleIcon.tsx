import { FC } from "react"
import { Icon, createIcon, BoxProps, Box } from "@chakra-ui/react"

interface CircleIconProps extends BoxProps {
  circleIconProps?: BoxProps
}

export const CircleIcon: FC<CircleIconProps> = ({ ...props }) => {
  const circleStyleProps = {
    borderRadius: "100%",
    h: "20px",
    w: "20px",
    bgColor: "yellow.700",
    ...props,
  }
  return <Box {...circleStyleProps}></Box>
}
