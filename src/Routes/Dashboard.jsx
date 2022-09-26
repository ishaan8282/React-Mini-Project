import { useContext, useEffect, useState } from "react";
import Loader from "../Components/Loader";
import { useSearchParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import RestaurantTable from "../Components/RestaurantTable"
import Pagination from "../Components/Pagination";

const getData = ({pages}) => {
  return fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${pages}&limit=10`
  ).then((res) => res.json());
};

const getPage = (value) => {
  value = Number(value);
  if(!value || value<1)
  {
    value=1

  }
  return value
}



function Dashboard() {

  const [data, setData] = useState([]);
  
  const [totalPages, settotalpages] = useState(null)

  const [searchParams, setSearchParams] = useSearchParams()
 
  const  {state, logoutUser } = useContext(AppContext);
 
  const initialpage = getPage(searchParams.get("page"))
   const [pages, setPages] = useState(initialpage)


  console.log("token", state.token);

  useEffect(() => {
    getData({pages})
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        settotalpages(res.totalPages)
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pages]);

  useEffect(()=>{
    setSearchParams({
      pages
    })
  },[pages])

  const handlePageChange = (val) => {
    setPages(val)
  }



  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button onClick={logoutUser} data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{state.token}</b>
        </p>
      </div>
      <br />
      <div>
        <select data-testid="filter-box">
          <option value="">All</option>
          {/* fine_dining, ethnic, fast_food, cafe, casual_dining	 */}
          
        </select>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <Loader /> */}
        <RestaurantTable data={data} />
        {/* Restaurant Table, remember to show loading indicator when API is loading */}
      </div>
      <br />
      <div data-testid="pagination-container">{/* Pagination */}
      <Pagination
          totalPages={totalPages}
          currentPage={pages}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Dashboard;