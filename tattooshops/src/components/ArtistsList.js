import React from "react";
import Artists from "./Artists";
import Cart from "./Cart";

const booking = [
  { id: 0, artistName: "Sven Svensson", price: "5000kr" },
  { id: 1, artistName: "Karl Svensson", price: "6000kr" },
  { id: 2, artistName: "Test Svensson", price: "7000kr" }
];

const bookingCart = [
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
}

function BookList() {
  return (
    <div>
      {bookingCart.map((bookArtist) => (
          <Cart
            key={bookArtist.id}
            id={bookArtist.id}
            artistName={bookArtist.artistName}
            price={bookArtist.price}
          />
      ))}
    </div>
  );
}

export default ArtistsList;
export {BookList};
