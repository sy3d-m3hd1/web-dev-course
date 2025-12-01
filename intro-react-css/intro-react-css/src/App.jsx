import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='myHeading'>Intro to react-css </h1>
      <p className='myParagraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laborum ea soluta perspiciatis, odit dicta. Amet, iste nihil deleniti sed itaque nemo et earum culpa numquam explicabo! Alias quos facere hic ratione, fugiat, laudantium unde quis rem mollitia inventore sit? Repudiandae eligendi, quaerat dolorem cupiditate a sint facilis animi tenetur.</p>
    </>
  )
}

export default App
