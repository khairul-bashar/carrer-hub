/** @format */

import React from "react"
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts"

const data = [
  { id: 1, name: "Assignment 1", value: 60 },
  { id: 2, name: "Assignment 2", value: 59 },
  { id: 3, name: "Assignment 3", value: 60 },
  { id: 4, name: "Assignment 4", value: 60 },
  { id: 5, name: "Assignment 5", value: 60 },
  { id: 6, name: "Assignment 6", value: 60 },
  { id: 7, name: "Assignment 7", value: 57 },
  { id: 8, name: "Assignment 8", value: 60 },
]

const Statistic = () => {
  return (
    <main className="py-20">
      <div style={{ width: "60%", height: 300 }} className="mx-auto">
        <ResponsiveContainer>
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="value" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <h1 className="text-center text-xl font-bold mt-5">
        Last 7 Assignments Analytics
      </h1>
    </main>
  )
}

export default Statistic
