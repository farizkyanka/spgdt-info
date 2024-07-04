import React, { FormEvent, useState } from "react";

export default function FormFasilitasTerapi() {
  const [ther, setTher] = useState([""]);
  const [therValue, setTherValue] = useState("");

  function handleTherValue(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setTherValue(e.target.value);
  }

  function handleTherSubmit(e: FormEvent) {
    e.preventDefault();
    setTher([...ther, therValue]);
    setTherValue("");
  }

  function deleteTher(index: number) {
    const newArray = [...ther];
    newArray.splice(index, 1);
    setTher(newArray);
  }

  function handleDeletePress(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleTherSubmit(e);
    }
  }

  return (
    <div>
      <label id="fasilitas terapi">Fasilitas Terapi</label>
      {ther.map((i, index) => (
        <input key={index} value={i} onClick={() => deleteTher(index)} />
      ))}
      <input
        id="fasilitas terapi"
        name="fasilitas terapi"
        className="border-2"
        onChange={handleTherValue}
        onKeyDown={(e) => handleDeletePress(e)}
        value={therValue}
      />
      <button onClick={handleTherSubmit}>add</button>
    </div>
  );
}
