import { FC, useMemo } from "react"
import { useRouter } from "next/router"
import {
  Flex,
  Text,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react"
import { GiHamburgerMenu } from "react-icons/gi"

export interface LinkComponentProps {
  name: string
  route: string
  routerName: string
}

export const LinkComponent: FC<LinkComponentProps> = ({
  name,
  routerName,
  route,
}) => {
  const router = useRouter()
  console.log("routerName, ", routerName)
  return (
    <Link
      cursor="pointer"
      onClick={() => (name !== "Resume" ? router.push(`/${route}`) : undefined)}
      fontWeight={routerName === route ? "bold" : "normal"}
      href={name === "Resume" ? "../../../Resume.pdf" : undefined}
      target={name === "Resume" ? "_blank" : undefined}
    >
      {name}
    </Link>
  )
}

export interface MenuComponentProps {
  name: string
  route: string
}

export const MenuComponent: FC<MenuComponentProps> = ({ name, route }) => {
  const router = useRouter()
  return <MenuItem onClick={() => router.push(`/${route}`)}>{name}</MenuItem>
}

const routerData = [
  { name: "Biography", route: "biography" },
  { name: "Experiences", route: "experiences" },
  { name: "Projects", route: "projects" },
  { name: "Resume", route: "resume" },
  { name: "Contact", route: "contact" },
]

export const Header: FC = () => {
  const router = useRouter()

  const routerName = useMemo(() => {
    return router.pathname.substring(1)
  }, [router.pathname])

  return (
    <Flex
      w="full"
      backgroundColor="gray.200"
      flexDirection="row"
      justifyContent="space-between"
      px="10%"
      shadow="lg"
    >
      <Flex fontSize={36}>
        <Text
          fontWeight="bold"
          fontSize={{ base: "24px", md: "32px", lg: "40px" }}
        >
          Stanley Wan
        </Text>
      </Flex>
      <Flex display={{ lg: "none" }}>
        <Menu>
          <MenuButton
            icon={<GiHamburgerMenu />}
            as={IconButton}
            bgColor="#E2E8F0"
            m="0"
          />
          <MenuList>
            {routerData.map((data) => {
              return (
                <MenuComponent
                  key={data.name}
                  name={data.name}
                  route={data.route}
                />
              )
            })}
          </MenuList>
        </Menu>
      </Flex>

      <Flex
        alignItems="center"
        w="40%"
        justifyContent="space-around"
        display={{ base: "none", lg: "flex" }}
      >
        {routerData.map((data) => {
          return (
            <LinkComponent
              key={data.name}
              routerName={routerName}
              name={data.name}
              route={data.route}
            />
          )
        })}
      </Flex>
    </Flex>
  )
}
export default Header
