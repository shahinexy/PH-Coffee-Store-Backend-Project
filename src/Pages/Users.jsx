import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Skeleton } from "@nextui-org/react";

const Users = () => {
  // const loaderData = useLoaderData();
  // const [users, setUser] = useState(loaderData)

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://coffee-store-server-henna-chi.vercel.app/user"
      );
      return res.json();
    },
  });

  const handleDelete = (id) => {
    console.log(id);

    axios
      .delete(`https://coffee-store-server-henna-chi.vercel.app/user/${id}`)
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          // set new user data
          // const remaining = users.filter(user => user._id !== id);
          // setUser(remaining)
        }
      });

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
  };
  console.log(data);

  if (isPending) {
    return (
      <div className="flex grid-cols-2 w-full h-screen justify-center items-center gap-10">
        <Card className="w-[400px] space-y-5 p-4" radius="lg">
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="max-w-[300px] w-full flex items-center gap-3">
      <div>
        <Skeleton className="flex rounded-full w-12 h-12"/>
      </div>  
      <div className="w-full flex flex-col gap-2">
        <Skeleton className="h-3 w-3/5 rounded-lg"/>
        <Skeleton className="h-3 w-4/5 rounded-lg"/>
      </div>
    </div>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </Card>
      </div>
    );
  }

  if (isError) {
    return <p>{error.message}</p>;
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
                  <td>
                    <button
                      onClick={() => handleDelete(data._id)}
                      className="btn"
                    >
                      X
                    </button>
                  </td>
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
