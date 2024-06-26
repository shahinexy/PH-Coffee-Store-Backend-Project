import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "./firebase/firebase.config";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    // create user
    const createUser = (email, pass) =>{
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    // login user
    const userLogin = (email, pass)=>{
        return signInWithEmailAndPassword(auth, email, pass)
    }

  const authInfo = { createUser, user, setUser, userLogin };
  return (
    <div>
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
