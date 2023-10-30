import "./index.css"

import AboutMe from "../components/AboutMe"
import HeaderContainer from "../components/HeaderContainer"


function IndexPage() {
  return (
    <div className={'body light'}>
      <HeaderContainer />
      <AboutMe />
    </div>
  )
}


export default IndexPage
