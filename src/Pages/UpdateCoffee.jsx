import { Link } from "react-router-dom";

const UpdateCoffee = () => {
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
      update
    </div>
  );
};

export default UpdateCoffee;
