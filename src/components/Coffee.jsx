

const Coffee = ({data}) => {
    const {_id, name, chef, photo, supplier} = data;

    const danhleDelete = id =>{
        console.log(id);
        fetch(`http://localhost:5000/coffee/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json)
        .then(data => {
            console.log(data);
            alert("delete success")
        })
    }
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
                    <button className="btn bg-purple-500">Edit</button>
                    <br />
                    <button onClick={()=>danhleDelete(_id)} className="btn bg-red-300">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Coffee;