import { useState } from "react";

export function Input({ children, name, onChange}) {

  return (
    <>
      <input
        type="text"
        name={children}
        className="input-button"
        value={name}
        onChange={onChange}
        placeholder={children}
        accept="image/*"
      />
    </>
  );
}
