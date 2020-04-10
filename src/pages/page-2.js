import React, {useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function SecondPage(){ 
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState('red')
  return (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p style={{color:`${count}`}}>You clicked {count} times</p>
    <button onClick={()=>setCount(`purple`)}>Click me</button>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
  }
export default SecondPage
