import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../AuthProvider";
import axios from "axios";

const Register = () => {
  const { createUser } = useContext(authContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;

    createUser(email, pass)
      .then((res) => {
        console.log(res);

        // ==== create user on database ==========
        const createdAt = res.user?.metadata?.creationTime
        const user = { email, pass, createdAt };

        axios.post('https://coffee-store-server-henna-chi.vercel.app/user')
        .then(data =>{
          console.log(data.data);
        })

        // fetch("https://coffee-store-server-henna-chi.vercel.app/user", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(user),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     if(data.insertedId){
        //         alert('user added success')
        //     }
        //   });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="text-center ">
        <Link to={"/"}>
          <button className="btn">Go to Home</button>
        </Link>
      </div>

      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="pass"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                <Link to={"/login"}>
                  <p className="underline">Login</p>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
