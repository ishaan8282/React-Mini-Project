import { Link } from "react-router-dom";

export default function RestaurantCard({id,
  name,
  rating,
  type,
  price,}) 
  {
  return (
    <tr data-testid="item">
      <td>
        <Link data-testid="name" to={`/restaurants/${id}`}>
          {name}
        </Link>
      </td>
      <td data-testid="rating">{rating}</td>
      <td data-testid="type">{type}</td>
      <td data-testid="price">{price}</td>
    </tr>
  );
}