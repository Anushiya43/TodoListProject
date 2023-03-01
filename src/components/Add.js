import React, { useState } from "react";
import "./styles.css";

export default function Add(props) {
  let [item, setItem] = useState("");
  let [status, setStatus] = useState("");
  const additem = () => {
    const a = {
      id: props.list.length + 1,
      work: item,
      state: status
    };
    props.addList(a);
    setStatus("-");
    setItem("");
  };

  return (
    <div className="App">
      <br />
      <br />

      <h1> Add Item </h1>
      <label>Work</label>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <label>status</label>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="-">-</option>
        <option value="Completed">Completed</option>
        <option value="Incomplete">Incompleted</option>
      </select>
      <button onClick={additem}>Add</button>
    </div>
  );
}
