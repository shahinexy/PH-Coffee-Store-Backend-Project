import { Link, useLoaderData } from "react-router-dom";
import Coffee from "./components/Coffee";
import { useEffect, useState } from "react";
function App() {
  const loaderData = useLoaderData();
  const [coffee, setCoffee] = useState(loaderData)

  const [mode, setMode] = useState('ligth')


  const html = document.documentElement;
  const changeTheme = () => {

      if (mode === "light") {
          html.classList.remove("light")
          html.classList.add("dark")
          localStorage.setItem("mode", 'dark')
          setMode('dark')
      }
      else {
          html.classList.remove("dark")
          html.classList.add("light")
          localStorage.setItem("mode", 'light')
          setMode('light')
      }
  }

  useEffect(() => {
      const currentMode = localStorage.getItem('mode') ;
      console.log(currentMode);
      html.classList.add(currentMode);
      setMode(currentMode)
  }, [ mode, html])


  return (
    <div className="max-w-7xl mx-auto my-3">
      <div className="text-center space-x-5">
        <Link to={"/addCoffee"}>
          <button className="btn">Go to Add Coffee</button>
        </Link>
        <Link to={"/users"}>
          <button className="btn">Users</button>
        </Link>
        <Link to={"/register"}>
          <button className="btn">Register</button>
        </Link>
        <button onClick={changeTheme} className="btn">Change theme</button>
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
