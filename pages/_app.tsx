// export default App;
import { FC } from "react"
import { PageComponent } from "@/core/common/types/page"
import { ChakraProvider } from "@chakra-ui/react"
import { Layout } from "@/core/common/Layout/Layout"

export const App: FC<{
  Component: PageComponent
  pageProps: any
}> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)

  return (
    <div style={{ height: "100vh" }}>
      <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
    </div>
  )
}

export default App
