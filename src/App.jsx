import { Link, useLoaderData } from "react-router-dom";
import Coffee from "./components/Coffee";
import { useContext, useState } from "react";
import { authContext } from "./AuthProvider";

function App() {
  const loaderData = useLoaderData();
  const [coffee, setCoffee] = useState(loaderData)
  const {shin} = useContext(authContext)
  console.log(shin);

  return (
    <div className="max-w-7xl mx-auto my-3">
      <div className="text-center space-x-5">
        <Link to={"/addCoffee"}>
          <button className="btn">Go to Add Coffee</button>
        </Link>
        <Link to={"/register"}>
          <button className="btn">Register</button>
        </Link>
      </div>
      <h1 className="text-4xl font-bold text-center my-8">Coffee House</h1>
      <div className="my-10 grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {coffee.map((data) => (
          <Coffee key={data._id} data={data} coffee={coffee} setCoffee={setCoffee}></Coffee>
        ))}
      </div>
    </div>
  );
}

export default App;
