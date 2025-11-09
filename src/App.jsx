import { useState } from 'react'
import exercises from './exercises.json'
import ExerciseList from './components/ExerciseList'

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <ExerciseList
      exercises={exercises}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
    />
  )
}

export default App
