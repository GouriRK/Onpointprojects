import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetails() {
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
  const { id } = useParams();
  const bookId = parseInt(id);
  const book = books.find((p) => p.id === bookId);

  if (!book) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2 style={{ color: "red", fontFamily: "opensans-bold" }}>
        Book details
      </h2>

      <h3 style={{ color: "green", fontFamily: "opensans-bold" }}>
        Name: {book.name}
      </h3>
      <p>
        <a href="www.amazon books store.com">
          <img src={book.image} />
        </a>
      </p>

      <p style={{ color: "blue", fontFamily: "opensans-bold" }}>
        Price: ${book.price}
      </p>
      <p style={{ color: "blue", fontFamily: "opensans-bold" }}>
        {book.description}
      </p>
      <Link to={`/`}>Back to Menu</Link>
    </div>
  );
}

export default ProductDetails;
