import React, { Children, useState } from "react";
import { getProducts } from "../../api/getProducts";
export default function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const data = await getProducts();
    console.log(data);
    // setProducts(data);
  };

  return (
    <>
      <h1>Lista de productos</h1>
      <button
        className="p-2 bg-zinc-200 rounded-lg"
        onClick={() => fetchData()}
      >
        Actualizar lista
      </button>
      <ul className="w-9/12 grid sm:col-span-1 md:col-span-2 lg:col-span-3">
        {/* {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>{product.price}</p>
          </li>
        ))} */}
      </ul>
    </>
  );
}
