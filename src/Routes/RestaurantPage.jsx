import Loader from "../Components/Loader";

function RestaurantPage() {
//   if (true) {
//     return <Loader />;
//   }
  return (
    <div data-testid="restaurant-container">
      <img data-testid="restaurant-image" width={"100%"} />
      <div>
        <h4 data-testid="restaurant-name">name</h4>
      </div>
      <div className="flex">
        <div>
          Type:
          <b data-testid="restaurant-type"></b>
        </div>
        <div>
          Rating:
          <b data-testid="restaurant-rating"></b>
        </div>
      </div>
      <div className="flex">
        <div>
          Votes:
          <b data-testid="restaurant-votes"></b>
        </div>
        <div>
          Starting Price:
          <b data-testid="restaurant-price"></b>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default RestaurantPage;