import { Navigate } from "react-router-dom";
import {authResolver} from "./authResolver";

function RequireAuth({ children }) {
  let authed = authResolver();

  if (!authed) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function AuthRedirect({children}){
  let authed = authResolver();

  if(authed){
    return <Navigate to="/home" replace/>;
  }
  return children
}

export  {RequireAuth, AuthRedirect};