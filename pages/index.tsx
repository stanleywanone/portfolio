import { FC, useEffect } from "react"
import { useRouter } from "next/router"

export const Home: FC = () => {
  const router = useRouter()

  return <div>this is the index page</div>
}

export default Home
