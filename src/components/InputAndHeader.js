import React from 'react'

const InputAndHeader = ({HandleSubmit,todo,SetTodo}) => {
    return (
        <>
            <div>
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
            </div>
        </>
    )
}

export default InputAndHeader