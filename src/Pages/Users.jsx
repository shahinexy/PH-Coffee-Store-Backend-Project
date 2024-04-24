import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loaderData = useLoaderData();
  const [users, setUser] = useState(loaderData)

  const handleDelete = id =>{
    console.log(id);

    fetch(`http://localhost:5000/user/${id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if(data.deletedCount > 0){
            // set new user data
            const remaining = users.filter(user => user._id !== id);
            setUser(remaining)
        }
    })
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
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((data, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{data.email}</td>
                  <td>{data.pass}</td>
                  <td>{data.createdAt}</td>
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
