import { FC, useEffect } from "react"
import { useRouter } from "next/router"

export const Home: FC = () => {
  const router = useRouter()

  useEffect(() => {
    router.push("/core/Biography")
  }, [router])
  return <></>
}

export default Home
