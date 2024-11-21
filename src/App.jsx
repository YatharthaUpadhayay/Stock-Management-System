import { useState } from 'react'
import './App.css'
import StocksList from './StocksList'
import ToolBar from './ToolBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-red-600'>Stocks Management System</h1>
      <ToolBar />
      <StocksList />
    </>
  )
}

export default App
