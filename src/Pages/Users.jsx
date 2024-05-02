import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  // const loaderData = useLoaderData();
  // const [users, setUser] = useState(loaderData)

  const {data , isPending, isError, error} = useQuery({
    queryKey: ['users'],
    queryFn: async() =>{
          const res = await fetch("https://coffee-store-server-henna-chi.vercel.app/user")
          return res.json()
    }
  })

  const handleDelete = id =>{
    console.log(id);

    axios.delete(`https://coffee-store-server-henna-chi.vercel.app/user/${id}`)
    .then(data => {
      console.log(data)
      if(data.deletedCount > 0){
        // set new user data
        // const remaining = users.filter(user => user._id !== id);
        // setUser(remaining)
    }
    })

    // fetch(`https://coffee-store-server-henna-chi.vercel.app/user/${id}`, {
    //     method: "DELETE"
    // })
    // .then(res => res.json())
    // .then(data =>{
    //     console.log(data);
    //     if(data.deletedCount > 0){
    //         // set new user data
    //         const remaining = users.filter(user => user._id !== id);
    //         setUser(remaining)
    //     }
    // })
  }
  console.log(data);

  if(isPending){
    return <span className="h-screen mx-auto flex justify-center items-center loading loading-spinner loading-lg"></span>
  }

  if(isError){
    return <p>{error.message}</p>
  }

  return (
    <div>
      <div className="text-center ">
        <Link to={"/"}>
          <button className="btn">Go to Home</button>
        </Link>
      </div>

      <div className="max-w-5xl mx-auto m-8">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Password</th>
                <th>CreatedAt</th>
                <th>Last Login</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{data.email}</td>
                  <td>{data.pass}</td>
                  <td>{data.createdAt}</td>
                  <td>{data.lastLoginAt}</td>
                  <td><button onClick={() => handleDelete(data._id)} className="btn">X</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
