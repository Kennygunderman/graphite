import { useMemo, useState } from 'react'
import ExerciseCard from './ExerciseCard'
import { Input } from './ui/input'

export default function ExerciseList({ exercises }) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return exercises.filter((e) => {
      return (
        !q ||
        e.name.toLowerCase().includes(q) ||
        e.muscleGroup.toLowerCase().includes(q) ||
        e.type.toLowerCase().includes(q)
      )
    })
  }, [exercises, query])

  return (
    <div className="max-w-6xl mx-auto p-6 text-left">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Exercises</h1>
        <p className="text-sm text-slate-400 mt-1">Browse movements by type and muscle group.</p>
      </div>
      <div className="mb-6">
        <Input
          placeholder="Search by name, muscle group, or type..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((exercise, index) => (
          <li key={index}>
            <ExerciseCard exercise={exercise} />
          </li>
        ))}
      </ul>
    </div>
  )
}


