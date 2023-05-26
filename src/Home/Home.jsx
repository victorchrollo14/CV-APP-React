import "./style.css"

import { Header } from './Header'
import { Form } from './Form'
import { DownLoadResume } from "../Template/Resume"

function Home() {

  return (
    <>
      <Header />
      <Form />
      <DownLoadResume />
    </>
  )
}

export default Home
