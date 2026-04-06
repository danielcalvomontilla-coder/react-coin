import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_API_URL;

const Coin = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    fetch(`https://rest.coincap.io/v3/assets/${id}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCoin(data.data));
  }, [id]);

  if (!coin) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{coin.name}</h1>
      <p>Precio: ${Number(coin.priceUsd).toFixed(2)}</p>
      <p>Market Cap: ${Number(coin.marketCapUsd).toFixed(2)}</p>
      <p>Supply: {Number(coin.supply).toFixed(0)}</p>
    </div>
  );
};

export default Coin;