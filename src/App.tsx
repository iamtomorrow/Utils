import { useReducer, useState } from "react";
import "./styles.css";

import { ListReducer } from "../src/reducers/ListReducer";

export default function App() {
  const [text, setText] = useState("");

  const [list, dispatch] = useReducer(ListReducer, []);

  const handleAddClick = () => {
    dispatch({
      type: "add",
      payload: { text }
    });
    setText("");
  };

  const handleRemoveClick = (id: number) => {
    dispatch({
      type: "remove",
      payload: { id }
    });
  };

  const handleEditClick = (id: number) => {
    dispatch({
      type: "edit",
      payload: {
        id,
        text
      }
    });
    setText("");
  };

  const handleToggleClick = (id: number) => {
    dispatch({
      type: "toggle",
      payload: { id }
    });
  };

  return (
    <div className="App">
      <h1>List</h1>
      {list &&
        list.map((item) => (
          <div
            style={{
              height: 40,
              width: "100%",
              borderRadius: 6,
              boxShadow: "0 0 12px rgba(0, 0, 0, 0.2)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {item.text} {item.done ? "true" : "false"}
            <button onClick={() => handleToggleClick(item.id)}>Toggle</button>
            <button onClick={() => handleEditClick(item.id)}>Edit</button>
            <button onClick={() => handleRemoveClick(item.id)}>Remove</button>
          </div>
        ))}
      <div>
        <input
          placeholder="Type your text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddClick}>Add</button>
      </div>
    </div>
  );
}
