import React from "react";
import Button from "./components/ui/button.jsx";

export default function App() {
  return (
    <div className="min-h-screen max-h-full bg-zinc-100">
      <div className="font-bold text-white">
        <Button>Login</Button>
        <button className="bg-black text-white font-semibold text-lg">
          Login
        </button>
      </div>
    </div>
  );
}
