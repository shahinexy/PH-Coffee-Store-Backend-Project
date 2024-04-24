import { Link, useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const loaderData = useLoaderData();
  const { _id, name, chef, photo, supplier, taste, category, detail } = loaderData;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const detail = form.detail.value;
    const photo = form.photo.value;

    const updateCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      detail,
      photo,
    };
    console.log(updateCoffee);

    fetch(`https://coffee-store-server-henna-chi.vercel.app/coffee/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount > 0){
          alert('User updated succecc')
      }
      });
  };
  return (
    <div>
      <div className="text-center space-x-5">
        <Link to={"/"}>
          <button className="btn">Go to Home</button>
        </Link>
        <Link to={"/addCoffee"}>
          <button className="btn">Go to Add Coffee</button>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto p-10 bg-pink-100">
        <div className="text-center my-8 space-y-4 ">
          <h2 className="text-4xl font-bold">Update Existing Coffee Details</h2>
          <p>
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleUpdateCoffee} className="space-y-8">
          <div className="flex justify-evenly gap-10">
            <div className="w-full ">
              <p>Name</p>
              <input
                className="w-full p-2"
                type="text"
                name="name"
                placeholder="Name"
                defaultValue={`${name}`}
              />
            </div>
            <div className="w-full ">
              <p>Chef</p>
              <input
                className="w-full p-2"
                type="text"
                name="chef"
                placeholder="Chef"
                defaultValue={`${chef}`}
              />
            </div>
          </div>
          <div className="flex justify-evenly gap-10">
            <div className="w-full ">
              <p>Supplier</p>
              <input
                className="w-full p-2"
                type="text"
                name="supplier"
                placeholder="Supplier"
                defaultValue={`${supplier}`}
              />
            </div>
            <div className="w-full ">
              <p>Taste</p>
              <input
                className="w-full p-2"
                type="text"
                name="taste"
                placeholder="Taste"
                defaultValue={`${taste}`}
              />
            </div>
          </div>
          <div className="flex justify-evenly gap-10">
            <div className="w-full ">
              <p>Category</p>
              <input
                className="w-full p-2"
                type="text"
                name="category"
                placeholder="Category"
                defaultValue={`${category}`}
              />
            </div>
            <div className="w-full ">
              <p>Detail</p>
              <input
                className="w-full p-2"
                type="text"
                name="detail"
                placeholder="Detail"
                defaultValue={`${detail}`}
              />
            </div>
          </div>
          <div className="w-full">
            <p>Photo</p>
            <input
              className="w-full p-2"
              type="text"
              name="photo"
              placeholder="Photo"
              defaultValue={`${photo}`}
            />
          </div>
          <div>
            <input
              className="w-full p-2 bg-purple-500 text-white font-semibold cursor-pointer"
              type="submit"
              value="Add Coffee"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
