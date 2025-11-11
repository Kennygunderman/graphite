import ExerciseCard from './ExerciseCard'

export default function ExerciseList({ exercises }) {
  return (
    <div className="max-w-6xl mx-auto p-6 text-left">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Exercises</h1>
        <p className="text-sm text-slate-400 mt-1">Browse movements by type and muscle group.</p>
      </div>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {exercises.map((exercise, index) => (
          <li key={index}>
            <ExerciseCard exercise={exercise} />
          </li>
        ))}
      </ul>
    </div>
  )
}


