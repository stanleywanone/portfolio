import { FC, useEffect } from "react"
import { useRouter } from "next/router"

export const Home: FC = () => {
  const { basePath } = useRouter()

  console.log("the base Path", basePath)

  return <div>this is the index page</div>
}

export default Home
