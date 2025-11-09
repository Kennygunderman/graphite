import exercises from './exercises.json'
import './App.css'

function App() {
  return (
    <ul>
      {exercises.map((exercise, index) => (
        <li key={index}>
          {exercise.name} - {exercise.type} - {exercise.muscleGroup}
        </li>
      ))}
    </ul>
  )
}

export default App
