import { FC } from "react"
import { chakra } from "@chakra-ui/react"
import { Icon as IconComponent, IconProps as ChakraIconProps } from "./types"
// Icons

import Warning from "./svg/icon-warning.svg"
import Timelapse from "./svg/icon-timelapse.svg"
import ExitToApp from "./svg/icon-exit-to-app.svg"
// Logo Icons
import Jupyter from "./svg/logo-jupyter.svg"
import JupyterWithText from "./svg/logo-jupyter-with-text.svg"
import JupyterLab from "./svg/logo-jupyter-lab.svg"

// Logos
import Instgram from "./svg/instgram.svg"

const img = (c: FC, baseStyle = {}): IconComponent =>
  chakra(c, { baseStyle: { role: "img", ...baseStyle } })

const icon = (c: FC, baseStyle = {}): IconComponent =>
  chakra(c, {
    baseStyle: {
      h: 4,
      w: 4,
      flexShrink: 0,
      fill: "currentColor",
      ...baseStyle,
    },
  })

export const IconInstgram = icon(Instgram)

export const iconsByName = {
  Instgram: IconInstgram,
}

export type IconNames = keyof typeof iconsByName

export type IconProps = { name: IconNames } & ChakraIconProps

export const Icon: FC<IconProps> = ({
  name,
  flipY,
  flipX,
  transform,
  ...iconProps
}) => {
  const Component = iconsByName[name] as IconComponent
  return (
    <Component
      transform={
        transform
          ? transform
          : flipY
          ? "scaleY(-1)"
          : flipX
          ? "scaleX(-1)"
          : undefined
      }
      {...(iconProps as any)}
    />
  )
}
