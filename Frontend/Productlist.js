import React from "react";
import { Link } from "react-router-dom";

const Productlist = () => {
  const books = [
    {
      id: 1,
      image:
        "https://m.media-amazon.com/images/I/71dLXkOLOJL._AC_UY327_FMwebp_QL65_.jpg",
      name: "Crime punishment",
      description: "written by Fyodor Dostoevsky",
      price: 529,
    },
    {
      id: 2,
      image:
        "https://m.media-amazon.com/images/I/61WVRpAeALL._AC_UY327_FMwebp_QL65_.jpg",
      name: "The book of life",
      description: "written by J krishnamurti",
      price: 275,
    },
    {
      id: 3,
      image:
        "https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_UY327_FMwebp_QL65_.jpg",
      name: "The power of mind",
      description: "written by Joseph murphy",
      price: 400,
    },
    {
      id: 4,
      image:
        "https://m.media-amazon.com/images/I/71zytzrg6lL._AC_UY327_FMwebp_QL65_.jpg",
      name: "The 5AM club ",
      description: "written by Robin Sharma",
      price: 600,
    },
  ];
  return (
    <div className="list">
      <h1 style={{ color: "red", fontFamily: "opensans-bold" }}>Book list</h1>
      <ol>
        {books.map((book) => (
          <li key={book.id}>
            <h3 style={{ color: "green", fontFamily: "opensans-bold" }}>
              {book.name}
            </h3>
            <a href="www.amazon books store.com">
              <img src={book.image} />
            </a>

            <p style={{ color: "blue", fontFamily: "opensans-bold" }}>
              {book.description}
            </p>
            <p style={{ color: "violet", fontFamily: "opensans-bold" }}>
              Book is from amzon store.
            </p>
            <Link to={`/book/${book.id}`}>View details</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default Productlist;
