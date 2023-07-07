/** @format */

import React from "react"

const Blog = () => {
  return (
    <>
     
      <div className="md:w-4/5 mx-auto">
        <div className="border rounded-md shadow-xl bg-slate-300 mt-4 p-6">
          <h2 className="text-2xl text-center font-bold">
            When should you use contextAPI ?
          </h2>
          <p>
            <span className="font-bold text-[#2922fa]">Answer : </span>
            contextAPI is react hook. Sometimes we need to use a data from
            different components. But react does not pass any props to child to
            parent. So that we use contextAPI. contextAPI give us to access any
            props from any components.
          </p>
        </div>
        <div className="border rounded-md shadow-xl bg-slate-300 mt-4 p-6">
          <h2 className="text-2xl text-center font-bold">
            What is custom hook ?
          </h2>
          <p>
            <span className="font-bold text-[#2922fa]">Answer : </span>Custom
            React JS hooks are reusable functions that a React JS software
            developer can use to add special and unique functionality to the
            React applications. Usually, if there is a requirement to add a
            feature, one can install a third-party library and solve the
            problem.
          </p>
        </div>
        <div className="border rounded-md shadow-xl bg-slate-300 my-4 p-6">
          <h2 className="text-2xl text-center font-bold">What is useRef ?</h2>
          <p>
            <span className="font-bold text-[#2922fa]">Answer : </span>
            useRef is react hook. The useRef Hook allows you to persist values
            between renders. It can be used to store a mutable value that does
            not cause a re-render when updated. It can be used to access a DOM
            element directly.
          </p>
        </div>
        <div className="border rounded-md shadow-xl bg-slate-300 my-4 p-6">
          <h2 className="text-2xl text-center font-bold">What is useMemo ?</h2>
          <p>
            <span className="font-bold text-[#2922fa]">Answer : </span>
            useMemo is a react hook that allows you to memoize expensive
            functions so that you can avoid calling them on every render. You
            simple pass in a function and an array of inputs and useMemo will
            only recompute the memoized value when one of the inputs has
            changed.
          </p>
        </div>
      </div>
    </>
  )
}

export default Blog
