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
  useToast,
} from "@chakra-ui/react"
import emailjs from "emailjs-com"
import { AnyNaptrRecord } from "dns"

export const Contact: FC = () => {
  const [message, setMessage] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const toast = useToast()

  const sendEmail = (e: any) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_bfezyzr",
        "template_uynxe8w",
        e.target,
        "user_EQtCQMx5xcaDVV7NMZenU"
      )
      .then(
        (result) => {
          toast({
            title: "Sent Successfully",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <Flex w="full">
      <Flex w="30%" justifyContent="center">
        <Text
          fontFamily="monospace"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          mb="2%"
        >
          Contact
        </Text>
      </Flex>
      <Flex w="70%" flexDirection="column" mt="10%">
        <form onSubmit={sendEmail}>
          <FormControl mb={5}>
            <FormLabel>Name</FormLabel>
            <Input
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              name="name"
            />
          </FormControl>
          <FormControl mb={5}>
            <FormLabel>Email address</FormLabel>
            <Input
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
            />
          </FormControl>

          <FormLabel>Message</FormLabel>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            size="sm"
            h="30%"
            mb={5}
            name="message"
          />
          <Button w="20%" variant="outline" type="submit">
            Send
          </Button>
        </form>
      </Flex>
    </Flex>
  )
}

export default Contact
