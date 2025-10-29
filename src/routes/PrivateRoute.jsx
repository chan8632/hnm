import { Navigate } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import ProductDetail from "../page/ProductDetail";

const PrivateRoute = ({ authenticate }) => {
  return (
    <div>{authenticate ? <ProductDetail /> : <Navigate to="/login" />}</div>
  );
};
export default PrivateRoute;
