import React from "react";
import Artists from "./Artists";

const booking = [
  { artistName: "Sven Svensson", price: "5000kr" },
  { artistName: "Karl Svensson", price: "6000kr" },
  { artistName: "Test Svensson", price: "7000kr" }
];

function ArtistsList() {
  return (
    <div>
      {booking.map((test) => {
        return (
          <Artists
            artistName={test.artistName}
            price={test.price}
          />
        );
      })}
    </div>
  );
}

export default ArtistsList;
