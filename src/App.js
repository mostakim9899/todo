import React from "react";
import { useState, useEffect } from "react";
import AllTodos from './components/AllTodos';
import CompletedTodos from "./components/CompletedTodos";
import ActiveTodos from "./components/ActiveTodos";
import Tabs from "./components/Tabs";
import InputAndHeader from "./components/InputAndHeader";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TodoApp = () => {
  const [todo, SetTodo] = useState();
  const [todos, SetTodos] = useState(() => {
    const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];
    return initialTodos || [];
  });
  const [Ctodos, SetCtodos] = useState(() => {
    const intTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const UptTodos = intTodos.filter(item => item.completed === true)
    return UptTodos || [];
  });
  const [Ptodos, SetPtodos] = useState(() => {
    const PintTodos = JSON.parse(localStorage.getItem('todos')) || []
    const PUptTodos = PintTodos.filter(item => item.completed === false)
    return PUptTodos || [];
  });

  useEffect(() => {
    const UptTodos = todos.filter(item => item.completed === true);
    SetCtodos(UptTodos);
    const PUptTodos = todos.filter(item => item.completed === false);
    SetPtodos(PUptTodos);


  }, [todos])





  const HandleSubmit = (e) => {
    e.preventDefault()

    if (todo) {
      const newTodos = { todo, completed: false }
      const allTodos = [...todos, newTodos]
      SetTodos(allTodos);
      localStorage.setItem('todos', JSON.stringify(allTodos));
      SetTodo('')
    }
    else {
      alert("Please Enter a Todo")
    }
  }


  const toggleTodo = (index) => {

    const newTodos = JSON.parse(localStorage.getItem('todos')) || [];


    newTodos[index].completed = !newTodos[index].completed;
    SetTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const queryParams = new URLSearchParams(window.location.search);
  const term = queryParams.get("tab");


  return (
    <>
      <div>
        <main className="lg:col-span-9 xl:col-span-10">
          <article>
            {/*  Header */}

            <InputAndHeader HandleSubmit={HandleSubmit} todo={todo} SetTodo={SetTodo} />



            {/* Tabs */}
            <Tabs classNames={classNames} term={term} />



            {/* Description list */}

            {term !== "active" && term !== "completed" && (
              <AllTodos toggleTodo={toggleTodo} SetTodos={SetTodos} classNames={classNames} todos={todos} />
            )}
            {term === "active" && (
              <ActiveTodos toggleTodo={toggleTodo} SetTodos={SetTodos} classNames={classNames} todos={todos} Ptodos={Ptodos} />
            )}
            {term === "completed" && (
              <CompletedTodos toggleTodo={toggleTodo} SetTodos={SetTodos} classNames={classNames} Ctodos={Ctodos} />
            )}

          </article>
        </main>
      </div>
    </>
  );
};
export default TodoApp;

