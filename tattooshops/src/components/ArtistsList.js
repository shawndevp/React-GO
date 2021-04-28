import React, {useState, useEffect} from "react";
import Artists from "./Artists";
import axios from "axios";

/* const booking = [
  { id: 0, artistName: "Sven Svensson", price: "5000kr" },
  { id: 1, artistName: "Karl Svensson", price: "6000kr" },
  { id: 2, artistName: "Test Svensson", price: "7000kr" }
];

function ArtistsList() {
  return (
    <div>
      {booking.map((artist) => (
          <Artists
            key={artist.id}
            id={artist.id}
            artistName={artist.artistName}
            price={artist.price}
          />
      ))}
    </div>
  );
} */

function ArtistsList() {

  const [products, setProduct] = useState([]);

  useEffect(()=> {

    const fetchProducts = async()=>{
      const response = await axios.get("http://localhost:1337/Artists");
      console.log(response)

      setProduct(response.data)
    }

    fetchProducts()
  }, [] )


  return (
    <>
      {products.map((artist) => (
          <Artists
            key={artist.id}
            id={artist.id}
            name={artist.name}
            price={artist.price}
            description={artist.description}
            img={artist.img}
          />
      ))}
    </>
  )
}

export default ArtistsList;
