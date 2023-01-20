import React from "react";
import { useState, useEffect } from "react";
import { Switch } from '@headlessui/react'


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

    // console.log(newTodos)
    // localStorage.setItem('todos', JSON.stringify(newTodos));
    // SetTodos(newTodos);

  };

  const queryParams = new URLSearchParams(window.location.search);
  const term = queryParams.get("tab");


  return (
    <>
      <div>
        <main className="lg:col-span-9 xl:col-span-10">
          <article>
            {/*  Header */}

            <h1 className="text-lg  flex items-center justify-center  mt-10 sm:mt-12">To-Do App</h1>

            <div className=" flex items-center justify-center  mt-10 sm:mt-12">
              <form onSubmit={HandleSubmit} className=" sm:max-w-xl sm:mx-auto lg:mx-0">
                <div className="sm:flex">
                  <div className="min-w-0 flex-1">
                    <label htmlFor="todo" className="sr-only">
                      Enter a Todo
                    </label>
                    <input
                      value={todo}
                      onChange={(e) => {
                        SetTodo(e.target.value)
                      }}
                      id="todo"
                      type="text"
                      placeholder=" Enter a Todo"
                      className="block w-full px-4 py-3 rounded-md  border-1 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-400 "
                    />
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-rose-500 to-rose-600 text-white font-medium hover:from-rose-600 hover:to-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-400 focus:ring-offset-gray-900"
                    >
                      Add Todo
                    </button>
                  </div>
                </div>

              </form>
            </div>
            {/* Tabs */}
            <div className="flex items-center justify-center  mt-6 sm:mt-2 2xl:mt-5">
              <div className="border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <nav className="-mb-px flex space-x-8" aria-label="Tabs">

                    <a
                      href="/?tab=allTodos"
                      className={classNames(
                        (term === "allTodos" | term !== "active" && term !== "completed")
                          ? "border-pink-500 text-gray-900"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                        "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                      )}
                      aria-current={(term === "allTodos") ? "page" : undefined}
                    >
                      All Todos
                    </a>
                    <a
                      href="/?tab=active"
                      className={classNames(
                        term === "active"
                          ? "border-pink-500 text-gray-900"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                        "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                      )}
                      aria-current={term === "active" ? "page" : undefined}
                    >
                      Active
                    </a>
                    <a
                      href="/?tab=completed"
                      className={classNames(
                        term === "completed"
                          ? "border-pink-500 text-gray-900"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                        "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                      )}
                      aria-current={term === "completed" ? "page" : undefined}
                    >
                      Completed
                    </a>

                  </nav>
                </div>
              </div>
            </div>
            {/* Description list */}

            {term !== "active" && term !== "completed" && (
              <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">


                  <div className="sm:col-span-2">
                    <ul role="list" className="divide-y divide-gray-200">
                      {todos.length === 0 && (
                        <div className="text-center">

                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto h-12 w-12 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                          </svg>


                          <h3 className="mt-2 text-sm font-medium text-gray-900">No Todos</h3>
                          <p className="mt-1 text-sm text-gray-500">Get started by creating a new todos.</p>

                        </div>
                      )}
                      {todos.map((todo, index) => (

                        <li
                          key={index}
                          className="relative bg-white py-5 px-4 hover:bg-gray-50 "
                        >
                          <div className="flex justify-between space-x-3 cursor-pointer">
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-medium text-gray-900 truncate">{todo.todo}</p>

                            </div>

                            <div>
                              <span className="text-sm font-medium text-gray-900">{todo.completed ? "Completed" : "Pending"}</span>

                            </div>

                            <Switch.Group as="div" className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500 items-center">


                              <Switch
                                checked={todo.completed}
                                onChange={() => toggleTodo(index)}
                                className={classNames(
                                  todo.completed ? 'bg-indigo-600' : 'bg-gray-200',
                                  '  relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 '
                                )}
                              >
                                <span
                                  aria-hidden="true"
                                  className={classNames(
                                    todo.completed ? 'translate-x-5' : 'translate-x-0',
                                    'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                  )}
                                />
                              </Switch>

                            </Switch.Group>

                            <div className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500 items-center cursor-pointer">

                              <svg onClick={(index) => {
                                const storedList = JSON.parse(localStorage.getItem('todos')) || [];
                                const itemToRemove = index
                                if (itemToRemove !== undefined) {
                                  storedList.splice(itemToRemove, 1);
                                  localStorage.setItem('todos', JSON.stringify(storedList));
                                  SetTodos(storedList);
                                }

                              }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                              </svg>
                            </div>
                          </div>
                        </li>))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {term === "active" && (
              <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">


                  <div className="sm:col-span-2">
                    <ul role="list" className="divide-y divide-gray-200">
                      {Ptodos.length === 0 && (
                        <div className="text-center">

                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto h-12 w-12 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                          </svg>



                          <h3 className="mt-2 text-sm font-medium text-gray-900">No Active Todos</h3>
                          <p className="mt-1 text-sm text-gray-500">Get started by creating a new todos.</p>

                        </div>
                      )}
                      {Ptodos.map((todo, index) => (
                        <li
                          key={index}
                          className="relative bg-white py-5 px-4 hover:bg-gray-50 "
                        >
                          <div className="flex justify-between space-x-3">
                            <div className="min-w-0 flex-1">
                              <a href="#" className="block focus:outline-none">
                                <span className="absolute inset-0" aria-hidden="true" />
                                <p className="text-sm font-medium text-gray-900 truncate">{todo.todo}</p>
                                {/* <p className="text-sm text-gray-500 truncate">{message.subject}</p> */}
                              </a>

                            </div>

                            <div>
                              <span className="text-sm font-medium text-gray-900">{todo.completed ? "Completed" : "Pending"}</span>

                            </div>

                            <Switch.Group as="div" className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500 items-center">


                              <Switch
                                checked={todo.completed}
                                onChange={() => toggleTodo(index)}
                                className={classNames(
                                  todo.completed ? 'bg-indigo-600' : 'bg-gray-200',
                                  '  relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 '
                                )}
                              >
                                <span
                                  aria-hidden="true"
                                  className={classNames(
                                    todo.completed ? 'translate-x-5' : 'translate-x-0',
                                    'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                  )}
                                />
                              </Switch>

                            </Switch.Group>


                          </div>
                          {/* <div className="mt-1">
                          <p className="line-clamp-2 text-sm text-gray-600">{message.preview}</p>
                        </div> */}
                        </li>
                      ))}
                    </ul>
                  </div>
                </dl>
              </div>
            )}
            {term === "completed" && (
              <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">


                  <div className="sm:col-span-2">
                    <ul role="list" className="divide-y divide-gray-200">
                      {Ctodos.length === 0 && (
                        <div className="text-center">

                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto h-12 w-12 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                          </svg>




                          <h3 className="mt-2 text-sm font-medium text-gray-900">No Active Todos</h3>
                          <p className="mt-1 text-sm text-gray-500">Get started by creating a new todos.</p>

                        </div>
                      )}
                      {Ctodos.map((todo, index) => (
                        <li
                          key={index}
                          className="relative bg-white py-5 px-4 hover:bg-gray-50 "
                        >
                          <div className="flex justify-between space-x-3">
                            <div className="min-w-0 flex-1">
                              <a href="#" className="block focus:outline-none">
                                <span className="absolute inset-0" aria-hidden="true" />
                                <p className="text-sm font-medium text-gray-900 truncate">{todo.todo}</p>
                                {/* <p className="text-sm text-gray-500 truncate">{message.subject}</p> */}
                              </a>

                            </div>

                            <div>
                              <span className="text-sm font-medium text-gray-900">{todo.completed ? "Completed" : "Pending"}</span>

                            </div>

                            <Switch.Group as="div" className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500 items-center">


                              <Switch
                                checked={todo.completed}
                                onChange={() => toggleTodo(index)}
                                className={classNames(
                                  todo.completed ? 'bg-indigo-600' : 'bg-gray-200',
                                  '  relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 '
                                )}
                              >
                                <span
                                  aria-hidden="true"
                                  className={classNames(
                                    todo.completed ? 'translate-x-5' : 'translate-x-0',
                                    'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                  )}
                                />
                              </Switch>

                            </Switch.Group>


                          </div>
                          {/* <div className="mt-1">
                          <p className="line-clamp-2 text-sm text-gray-600">{message.preview}</p>
                        </div> */}
                        </li>
                      ))}
                    </ul>
                  </div>
                </dl>
              </div>
            )}

          </article>
        </main>
      </div>
    </>
  );
};
export default TodoApp;

