import "@testing-library/jest-dom"
import{render, screen}from "@testing-library/react"
import Header from "..components/Header"
import About from "..components/About"
import Article from "../components/Article"

test("renders Header, About, and Article with passed reports", ()=>{
  render(
    <>
    <Header name="underreacted"/>
    <About about="Ablog about learning react"/>
    <Article title="components 101"
    date="December 15, 2020"
    preview="settings up the building block of your site"/>
    </>
  )

  expect(screen.getByText("Underreacted")).toBeInTheDocument()
  expect(screen.getByText("A blog about learning react")).toBeInTheDocument()
  expect(screen.getByText("components 101")).toBeInTheDocument()
  expect(
    screen.getByText("Settings up the building blocks of your site").toBeInTheDocument()
  )
})


export default App;
