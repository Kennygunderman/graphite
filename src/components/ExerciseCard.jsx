import { Dumbbell } from 'lucide-react'
import { Card, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'

export default function ExerciseCard({ exercise }) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800">
            <Dumbbell className="h-4 w-4 text-slate-200" />
          </span>
          <CardTitle className="text-lg text-left">{exercise.name}</CardTitle>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          <Badge variant="blue">{exercise.type}</Badge>
          <Badge variant="green">{exercise.muscleGroup}</Badge>
        </div>
      </CardHeader>
    </Card>
  )
}


