import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffee = ({ data, coffee, setCoffee }) => {
  const { _id, name, chef, photo, supplier } = data;

  const danhleDelete = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-henna-chi.vercel.app/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json)
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            const remainig = coffee.filter((cof) => cof._id !== id);
            setCoffee(remainig);
          });
      }
    });
  };
  return (
    <div>
      <div className="p-6 border shadow-lg flex gap-4">
        <div className="w-2/6">
          <img className="w-full h-full" src={photo} alt="" />
        </div>
        <div className="w-3/6 space-y-2">
          <p>Name: {name}</p>
          <p>Chef: {chef}</p>
          <p>Supplier: {supplier}</p>
          <p>Price: 20$</p>
        </div>
        <div>
          <button className="btn bg-slate-500">View</button>
          <br />
          <Link to={`/updateCoffee/${_id}`}>
            <button className="btn bg-purple-500">Edit</button>
          </Link>
          <br />
          <button onClick={() => danhleDelete(_id)} className="btn bg-red-300">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
