import { Icon, createIcon } from "@chakra-ui/react"

export const CircleIcon = (props: any) => (
  <Icon viewBox="0 0 200 200" {...props} boxSize={14}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
)
