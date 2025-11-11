import './App.css'
import exercises from './exercises.json'

function App() {
  return (
    <>
      <h1>Exercises</h1>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>
            <div>{exercise.name}</div>
            <div>Type: {exercise.type}</div>
            <div>Muscle Group: {exercise.muscleGroup}</div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
