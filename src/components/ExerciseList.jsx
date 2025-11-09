import { useMemo } from "react"
import ExerciseCard from "./ExerciseCard"
import SearchBar from "./SearchBar"

function ExerciseList({ exercises, searchQuery, onSearchChange }) {
  const filteredExercises = useMemo(() => {
    if (!searchQuery.trim()) {
      return exercises
    }

    const query = searchQuery.toLowerCase().trim()
    return exercises.filter((exercise) => {
      return (
        exercise.name.toLowerCase().includes(query) ||
        exercise.type.toLowerCase().includes(query) ||
        exercise.muscleGroup.toLowerCase().includes(query)
      )
    })
  }, [exercises, searchQuery])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Exercise Library</h1>
        <p className="text-muted-foreground mb-6">
          Browse through {exercises.length} exercises
        </p>
        <SearchBar
          value={searchQuery}
          onChange={onSearchChange}
          placeholder="Search by name, type, or muscle group..."
        />
      </div>
      {filteredExercises.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No exercises found matching "{searchQuery}"
          </p>
        </div>
      ) : (
        <>
          {searchQuery && (
            <p className="text-sm text-muted-foreground mb-4">
              Showing {filteredExercises.length} of {exercises.length} exercises
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredExercises.map((exercise, index) => (
              <ExerciseCard key={index} exercise={exercise} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default ExerciseList

