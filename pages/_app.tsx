import { FC } from "react"
import { PageComponent } from "common/types/page"
import { ChakraProvider } from "@chakra-ui/react"
import { Layout } from "common/Layout/Layout"

export const App: FC<{
  Component: PageComponent
  pageProps: any
}> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)

  return (
    <div style={{ minHeight: "100vh" }}>
      <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
    </div>
  )
}

export default App
