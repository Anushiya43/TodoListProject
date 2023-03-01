import React, { useState } from "react";
import "./styles.css";

export default function Edit(props) {
  let [item, setItem] = useState("");
  let [status, setStatus] = useState("");
  const edititem = () => {
    const a = {
      id: props.c.id,
      work: item,
      state: status
    };
    props.editList(a);
    setStatus("-");
    setItem("");
  };

  return (
    <div className="App">
      <br />
      <br />

      <h1> Edit Item </h1>
      <label>Work</label>
      <input
        type="text"
        value={item}
        placeholder={props.c.work}
        onChange={(e) => setItem(e.target.value)}
      />
      <label>status</label>
      <select
        value={status}
        placeholder={props.c.state}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="-">-</option>
        <option value="Completed">Completed</option>
        <option value="Incomplete">Incompleted</option>
      </select>
      <div className="icon">
        <button onClick={edititem}>Edit</button>
        <button onClick={() => props.editState1()}>Cancel</button>
      </div>
    </div>
  );
}
