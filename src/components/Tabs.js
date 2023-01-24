import React from 'react'

const Tabs = ({classNames,term}) => {
    return (
        <>

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
        </>
    )
}

export default Tabs