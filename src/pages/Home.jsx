import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_KEY = import.meta.env.VITE_API_URL;

const Home = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://rest.coincap.io/v3/assets", {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCoins(data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Criptomonedas</h1>
      {coins.map((coin) => (
        <div key={coin.id}>
          <Link to={`/coin/${coin.id}`}>
            {coin.name} - ${Number(coin.priceUsd).toFixed(2)}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;