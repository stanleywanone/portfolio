import type { NextPage } from "next"
import type { ReactNode } from "react"

export type PageLayout = (page: ReactNode) => ReactNode

export type PageComponent<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: PageLayout
}
