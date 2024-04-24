import { createContext } from "react";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const shin = "shahin";
  const authInfo = { shin };
  return (
    <div>
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
