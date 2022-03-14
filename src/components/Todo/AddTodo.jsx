import React, { useState } from "react";

export const AddTodo = () => {
  let [todo, setTodo] = useState("");
  const addToDos = () => {
    setTodo("");
    const toDoItems = getTodo();
    const serialNum = toDoItems.length + 1;
    const todayDate = `${new Date().toDateString()} at ${new Date().toLocaleTimeString()}`;
    toDoItems.push({ serialNum, todo, todayDate });
    localStorage.setItem("toDos", JSON.stringify(toDoItems));
  };

  const deleteItem = (id) => {
    const currentItems = getTodo();
    const exceptDeletedItemsArr = currentItems.filter(
      (todo) => todo.serialNum !== id
    );
    localStorage.setItem("toDos", JSON.stringify(exceptDeletedItemsArr));
  };

  const getTodo = () => {
    const toDosStorage = localStorage.getItem("toDos");
    let todoArr;
    if (toDosStorage) {
      todoArr = JSON.parse(toDosStorage);
    } else {
      todoArr = [];
    }
    return todoArr;
  };
  const todoItems = getTodo();

  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between">
                <h3>ToDos App</h3>
                <div className="input-group w-75">
                  <input
                    type="text"
                    placeholder="Add ToDos"
                    className="form-control form-control-lg"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                  />
                  <button className="btn btn-primary btn-lg" onClick={addToDos}>
                    Add ToDos
                  </button>
                </div>
              </div>
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Sl No</th>
                      <th>ToDos</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {todoItems.map(({ serialNum, todo, todayDate }) => (
                      <tr key={serialNum}>
                        <td>{serialNum}</td>
                        <td>{todo}</td>
                        <td>{todayDate}</td>
                        <td>
                          <button
                            onClick={() => deleteItem(serialNum)}
                            className="btn btn-danger"
                          >
                            &times;
                          </button>
                        </td>
                      </tr>
                    ))}
                    <tr></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
