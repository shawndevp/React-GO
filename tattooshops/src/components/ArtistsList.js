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
  const [loadPage, setLoadPage] = useState(2);

  useEffect(()=> {

    const fetchProducts = async()=>{
      const response = await axios.get(`http://localhost:1337/Artists?_limit=${loadPage}`);
      console.log(response)

      setProduct(response.data)
    }

    fetchProducts()
  }, [loadPage] )


  function loadMore() {

    let dynamicPage = loadPage + 2;
    console.log("load more", loadPage)
    setLoadPage(dynamicPage)
    console.log(loadPage)
  }

  function showLess() {
    setLoadPage(2)
  }

  return (
    <>
      {products.map((artist) => (
          <Artists
            key={artist.id}
            artistId={artist.id}
            name={artist.name}
            price={artist.price}
            description={artist.description}
            img={artist.img}
          />
      ))}


      <button onClick={loadMore}>Load more</button><br/>
      <button onClick={showLess}>Show less</button>
    </>
  )
}

export default ArtistsList;
