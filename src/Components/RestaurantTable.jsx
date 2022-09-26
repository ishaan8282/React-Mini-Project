import RestaurantCard from "./RestaurantCard";

function RestaurantTable({data}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rating</th>
          <th>Type</th>
          <th>Price Starts From</th>
        </tr>
      </thead>
      <tbody>
      {data?.map((item) => (
          <RestaurantCard
            id={item.id}
            name={item.name}
            type={item.type}
            rating={item.rating}
            price={item.price_starts_from}
          />
        ))}
        

      </tbody>
    </table>
  );
}

export default RestaurantTable;