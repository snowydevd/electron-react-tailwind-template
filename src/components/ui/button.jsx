import React from "react";

export default function Button({ children }) {
  return (
    <button className="bg-black text-white rounded-lg p-2">{children}</button>
  );
}
