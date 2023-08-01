import React, { useState } from "react";
import ToDoList from "./ToDoList";

const ToDo = () => {
  const [item, setItem] = useState("");

  const [click, setClick] = useState([]);

  const typeSome = (event) => {
    // console.log(event.target.value);
    setItem(event.target.value);
  };
  const listItems = () => {
    setClick((oldItems) => {
      return [...oldItems, item];
    }); 
    setItem("");
  };
  const deleteItems = (id) => {
    console.log("deleted");
    setClick((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <h1>ToDo List</h1>
          <input
            type="text"
            placeholder="Add a Item"
            value={item}
            onChange={typeSome}
          />
          <button className="submit" onClick={listItems}>
            {" "}
            +{" "}
          </button>

          <ol>
            {
              /* <li> {item} </li> */
              click.map((itemVal, index) => {
                return (
                  <ToDoList
                    key={index}
                    id={index}
                    text={itemVal}
                    onSelect={deleteItems}
                  />
                );
              })
            }
          </ol>
        </div>
      </div>
    </>
  );
};

export default ToDo;
