import React from 'react'
import { Switch } from '@headlessui/react';

const ActiveTodos = ({  classNames, toggleTodo, Ptodos,SetTodos }) => {
    return (
        <>
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

                                  
                               </div>
                           </li>
                            ))}
                        </ul>
                    </div>
                </dl>
            </div>
        </>
    )
}

export default ActiveTodos