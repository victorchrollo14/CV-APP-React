import { useState } from "react";

export function Input({ children }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <>
      <input
        type="text"
        name={children}
        className="input-button"
        value={value}
        onChange={handleChange}
        placeholder={children}
        accept="image/*"
      />
    </>
  );
}
