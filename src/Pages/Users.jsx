import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loaderData = useLoaderData();
//   const { email, pass, createdAt } = loaderData;
console.log(loaderData);
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
              </tr>
            </thead>
            <tbody>
              {loaderData.map((data, idx) => (
                <>
                  <tr>
                    <th>{idx+1}</th>
                    <td>{data.email}</td>
                    <td>{data.pass}</td>
                    <td>{data.createdAt}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
