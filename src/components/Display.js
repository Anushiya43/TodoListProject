import "./styles.css";

const Display = (props) => {
  let count=1;
  return (
    <table>
      <thead>
        <th>No.</th>
        <th>Work</th>
        <th>State</th>
        <th>Action</th>
      </thead>
      <tbody>
        {props.list.map((l) => {
          return (
            <tr key={l.id}>
              
              <td>{count++}</td>
              <td>{l.work}</td>
              <td>{l.state}</td>
              <td>
                <div>
                  <button onClick={() => props.deleteitem(l.id)}>Delete</button>
                  <button onClick={() => props.editState(l)}>Edit</button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Display;
