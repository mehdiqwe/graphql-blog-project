import Index from "./components/Layout/Index"
import HomePage from "./components/home/HomePage"

import {Routes, Route} from "react-router-dom"
import AuthorPage from "./components/authors/AuthorPage"
import BlogPage from "./components/blog/BlogPage"
import PageNotFound from "./components/404/404"

function App() {

  return (
    <Index>
      <Routes>
        <Route index element={<HomePage />}/>
        <Route path="/authors/:slug" element={<AuthorPage />}/>
        <Route path="/blogs/:slug" element={<BlogPage />}/>
        <Route path="/*" element={<PageNotFound />}/>
      </Routes>
    </Index>
  )
}

export default App
