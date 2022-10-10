import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { Biography } from "./index"

describe("test", () => {
  it("renders", () => {
    const { getByText } = render(<Biography />)

    getByText("Biography")
  })
})
