import { FC, useState } from "react"
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Flex,
  Text,
  Button,
  Textarea,
} from "@chakra-ui/react"

export const Contact: FC = () => {
  const [message, setMessage] = useState("")
  const [name, setName] = useState("")
  const [email, setAddress] = useState("")
  return (
    <Flex w="full">
      <Flex w="30%" justifyContent="center">
        <Text fontSize="5xl">Contact</Text>
      </Flex>
      <Flex w="70%" flexDirection="column" mt="10%">
        <FormControl mb={5}>
          <FormLabel>Name</FormLabel>
          <Input id="name" />
        </FormControl>
        <FormControl mb={5}>
          <FormLabel>Email address</FormLabel>
          <Input id="email" />
        </FormControl>

        <FormLabel>Message</FormLabel>
        <Textarea
          // value={value}
          // onChange={handleInputChange}

          size="sm"
          h="30%"
          mb={5}
        />

        <Button w="20%" variant="outline">
          Send
        </Button>
      </Flex>
    </Flex>
  )
}

export default Contact
