import ExerciseCard from "./ExerciseCard"

function ExerciseList({ exercises }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Exercise Library</h1>
        <p className="text-muted-foreground">
          Browse through {exercises.length} exercises
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
    </div>
  )
}

export default ExerciseList

