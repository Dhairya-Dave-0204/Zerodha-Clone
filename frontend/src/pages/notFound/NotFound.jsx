import React from 'react'

function NotFound() {
  return (
    <div className="px-4 py-8 mt-20 text-center sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto text-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-semibold leading-tight md:text-3xl lg:text-4xl">
            Error: 404 Not Found!!!
          </h1>

          <p className="max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            The request you made is not currently available.
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFound