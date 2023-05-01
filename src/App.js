import React from "react"

import GoalList from "./components/GoalList/GoalList"
import "./App.css"

const App = () => {
  const courseGoals = [
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Lear all about the main Topics of the Course" },
    { id: "cg3", text: "Help other students in the Q&A" }
  ]

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList goals={courseGoals} />
    </div>
  )
}

export default App
