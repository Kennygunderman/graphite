import exercises from './exercises.json'
import ExerciseList from './components/ExerciseList'

function App() {
  return <ExerciseList exercises={exercises} />
}

export default App
