import { useState } from 'react'
import MeuContador from './MeuContador'

function App() {
  const [count, setCount] = useState(0)

  return (

<div>
  <MeuContador />
</div>

  )
}

export default App
