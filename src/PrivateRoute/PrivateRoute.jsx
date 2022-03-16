import { Route, Navigate } from "react-router"
import { useAuth } from "../Context/AuthContext";

export function PrivateRoute({ path, ...props }) {
    const { token } = useAuth()
    // console.log(token,"yeh meh hu path")
    return token ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} replace to="/userpage" />
  );
}