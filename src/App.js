import "./components/styles.css";
import Add from "./components/Add.js";
import Header from "./components/Header.js";
import Display from "./components/Display.js";
import Edit from "./components/Edit.js";
import { useState } from "react";

export default function App(props) {
  const [list, setlist] = useState([]);
  const [edit, setedit] = useState(1);
  const [changedata, setChangedata] = useState();

  function addlist(item) {
    setlist([...list, item]);
  }

  function editList(item) {
    setedit(1);
    setlist(list.map((l) => (item.id === l.id ? item : l)));
  }

  function editState(l) {
    console.log(edit);
    setedit(0);
    setChangedata({ id: l.id, work: l.work, state: l.sate });
  }
  function deletelist(id) {
    setlist(list.filter((l) => id !== l.id));
  }
  function editState1() {
    setedit(1);
  }
  return (
    <div className="A">
      <Header />
      {
        <div className="Body">
          {edit ? (
            <Add list={list} addList={addlist} />
          ) : (
            <Edit editState1={editState1} c={changedata} editList={editList} />
          )}
          <Display deleteitem={deletelist} editState={editState} list={list} />
        </div>
      }
    </div>
  );
}
