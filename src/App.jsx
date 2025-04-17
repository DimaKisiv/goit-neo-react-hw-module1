import "./App.css";
import Product from "./components/profile/Profile.jsx";
import userData from "./data/userData.json";

function App() {
  return (
    <>
      <Product
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
}

export default App;
