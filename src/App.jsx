import { Link } from "react-router-dom"


function App() {

  return (
    <>
      <div className="text-center space-x-5">
      <Link to={'/addCoffee'}><button className="btn">Go to Add Coffee</button></Link>
      <Link to={'/updateCoffee'}><button className="btn">Go to Update Coffee</button></Link>
      </div>
      <h1 className="text-red-400">Vite + React</h1>
    </>
  )
}

export default App
