import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

function ExerciseCard({ exercise }) {
  return (
    <Card className="hover:shadow-lg transition-shadow bg-slate-900 border-slate-700 text-white">
      <CardHeader>
        <CardTitle className="text-xl text-white">{exercise.name}</CardTitle>
        <CardDescription className="text-base text-slate-300">
          {exercise.type}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-slate-700 text-white">
            {exercise.muscleGroup}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

export default ExerciseCard

