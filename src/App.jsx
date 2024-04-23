import { Link, useLoaderData } from "react-router-dom"
import Coffee from "./components/Coffee";


function App() {
  const loaderData = useLoaderData()
  console.log(loaderData);

  return (
    <div className="max-w-7xl mx-auto my-3">
      <div className="text-center space-x-5">
      <Link to={'/addCoffee'}><button className="btn">Go to Add Coffee</button></Link>
      <Link to={'/updateCoffee'}><button className="btn">Go to Update Coffee</button></Link>
      </div>
      <h1 className="text-4xl font-bold text-center my-8">Coffee House</h1>
      <div className="my-10 grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {
          loaderData.map(data => <Coffee key={data._id} data={data}></Coffee>)
        }
      </div>
    </div>
  )
}

export default App
