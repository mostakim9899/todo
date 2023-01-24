import React from 'react'
import { Switch } from '@headlessui/react'

const CompletedTodos = ({Ctodos,classNames,toggleTodo,SetTodos}) => {
    return (
        <>
            <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">


                    <div className="sm:col-span-2">
                        <ul role="list" className="divide-y divide-gray-200">
                            {Ctodos.length === 0 && (
                                <div className="text-center">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto h-12 w-12 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                                    </svg>




                                    <h3 className="mt-2 text-sm font-medium text-gray-900">No Todos Completed</h3>
                                    <p className="mt-1 text-sm text-gray-500">Keep working</p>

                                </div>
                            )}
                            {Ctodos.map((todo, index) => (
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
                             </li>
                            ))}
                        </ul>
                    </div>
                </dl>
            </div>
        </>
    )
}

export default CompletedTodos