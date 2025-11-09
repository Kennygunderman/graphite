import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

function ExerciseCard({ exercise }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl">{exercise.name}</CardTitle>
        <CardDescription className="text-base">
          {exercise.type}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
            {exercise.muscleGroup}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

export default ExerciseCard

