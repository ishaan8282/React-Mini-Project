import "./styles.css";
import Dashboard from "./Routes/Dashboard"
import Login from "./Routes/Login"
import Home from "./Routes/Home"
import AllRoutes from "./Routes/AllRoutes";
export default function App() {
  return (
    <div className="App">
      <h1>React Restaurants Listing</h1>
      {/* <Dashboard/> */}
      {/* <Login/> */}
      {/* <Home/> */}
      <AllRoutes/>
    </div>
  );
}