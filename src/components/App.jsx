import "@testing-library/jest-dom"
import{render, screen}from "@testing-library/react"
import Header from "../components/Header"
import About from "../components/About"
import Article from "../components/Article"
import blogData from "../data/blog"
import ArticleList from "./ArticleList"

function App(){
  return(
    <div className="App">
    <Header name={blogData.name}/>
    <About image ={blogData.image} about={blogData.about}/>
    <ArticleList posts={blogData.posts}/>
    </div>
  )
}


export default App;
