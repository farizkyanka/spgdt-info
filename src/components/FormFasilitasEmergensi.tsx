import React, { FormEvent, useState } from "react";

export default function FormFasilitasEmergensi() {
  const [emg, setEmg] = useState([""]);
  const [emgValue, setEmgValue] = useState("");

  function handleEmgValue(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setEmgValue(e.target.value);
  }

  function handleEmgSubmit(e: FormEvent) {
    e.preventDefault();
    setEmg([...emg, emgValue]);
    setEmgValue("");
  }

  function deleteEmg(index: number) {
    const newArray = [...emg];
    newArray.splice(index, 1);
    setEmg(newArray);
  }

  function handleDeletePress(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleEmgSubmit(e);
    }
  }

  return (
    <div>
      <label id="fasilitas emergensi">Fasilitas Emergensi</label>
      {emg.map((i, index) => (
        <input key={index} value={i} onClick={() => deleteEmg(index)} />
      ))}
      <input
        id="fasilitas emergensi"
        name="fasilitas emergensi"
        className="border-2"
        onChange={handleEmgValue}
        onKeyDown={(e) => handleDeletePress(e)}
        value={emgValue}
      />
      <button onClick={handleEmgSubmit}>add</button>
    </div>
  );
}
