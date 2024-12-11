import React from "react";
import Button from "./components/ui/button.jsx";
import Counter from "./components/ux/counter.jsx";
import ProductList from "./components/ux/productLists.jsx";

export default function App() {
  return (
    <div className="min-h-screen max-h-full bg-zinc-100">
      <div className="font-bold text-white">
        <Button>Login</Button>
        <button className="bg-black text-white font-semibold text-lg">
          Login
        </button>
      </div>

      <div>
        <Counter />
      </div>

      <div>
        <span>API DE LISTA DE PRODUCTOS FALSOS:</span>
        <ProductList />
      </div>
    </div>
  );
}
