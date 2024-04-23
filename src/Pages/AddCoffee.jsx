import { Link } from "react-router-dom";

const AddCoffee = () => {
    const handleAddCoffee = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const detail = form.detail.value;
        const photo = form.photo.value;

        const newCoffee = {name, chef, supplier, taste, category, detail, photo}
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee',{
          method: "POST",
          headers: {
            'content-type': "application/json"
          },
          body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          if(data.insertedId){
            alert('added success')
          }
        })

    }
  return (
    <div>
      <div className="text-center space-x-5">
        <Link to={"/"}>
          <button className="btn">Go to Home</button>
        </Link>
        <Link to={"/updateCoffee"}>
          <button className="btn">Go to Update Coffee</button>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto p-10 bg-pink-100">
        <div className="text-center my-8 space-y-4 ">
          <h2 className="text-4xl font-bold">Add New Coffee</h2>
          <p>
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        {/* form  */}
        <form onSubmit={handleAddCoffee} className="space-y-8">
          <div className="flex justify-evenly gap-10">
            <div className="w-full ">
              <p>Name</p>
              <input className="w-full p-2" type="text" name="name" placeholder="Name" />
            </div>
            <div className="w-full ">
              <p>Chef</p>
              <input className="w-full p-2" type="text" name="chef" placeholder="Chef" />
            </div>
          </div>
          <div className="flex justify-evenly gap-10">
            <div className="w-full ">
              <p>Supplier</p>
              <input className="w-full p-2" type="text" name="supplier" placeholder="Supplier" />
            </div>
            <div className="w-full ">
              <p>Taste</p>
              <input className="w-full p-2" type="text" name="taste" placeholder="Taste" />
            </div>
          </div>
          <div className="flex justify-evenly gap-10">
            <div className="w-full ">
              <p>Category</p>
              <input className="w-full p-2" type="text" name="category" placeholder="Category" />
            </div>
            <div className="w-full ">
              <p>Detail</p>
              <input className="w-full p-2" type="text" name="detail" placeholder="Detail" />
            </div>
          </div>
          <div className="w-full">
            <p>Photo</p>
            <input className="w-full p-2" type="text" name="photo" placeholder="Photo" />
          </div>
          <div>
            <input className="w-full p-2 bg-purple-500 text-white font-semibold cursor-pointer" type="submit" value="Add Coffee" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
